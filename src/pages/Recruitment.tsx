import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { GlassCard } from '@/components/ui/GlassCard';
import {
  Rocket, Lightbulb, GraduationCap, Users, Crown, Sparkles,
  ArrowDown, Loader2, CheckCircle2, AlertCircle,
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import {
  mitwpuAcademics, recruitmentDepartments, currentYearOptions, divisionOptions,
} from '@/data/mitwpuAcademics';

const MAX_DEPARTMENTS = 3;

const benefits = [
  { icon: Rocket, title: 'Explore Your Potential', text: 'Find out how far your ideas can actually go.' },
  { icon: Lightbulb, title: 'Turn Ideas Into Action', text: 'Move from thinking about it to building it.' },
  { icon: GraduationCap, title: 'Learn Beyond the Classroom', text: 'Real projects, real deadlines, real learning.' },
  { icon: Crown, title: 'Build Leadership Skills', text: 'Own your work and lead the people around you.' },
  { icon: Users, title: 'Work With Ambitious People', text: 'Grow alongside students who push you forward.' },
  { icon: Sparkles, title: 'Create Meaningful Impact', text: 'Leave behind work the campus remembers.' },
];

type Errors = Record<string, string>;

const Recruitment = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const [form, setForm] = useState({
    full_name: '', email: '', prn: '', contact_number: '', linkedin_url: '',
    school: '', course: '', specialization: '', current_year: '', division: '', why_join: '',
  });
  const [departments, setDepartments] = useState<string[]>([]);

  useEffect(() => {
    document.title = 'Recruitment | Budding Entrepreneurs Forum MIT-WPU';
  }, []);

  const courses = useMemo(
    () => (form.school ? Object.keys(mitwpuAcademics[form.school] || {}) : []),
    [form.school],
  );
  const specializations = useMemo(
    () => (form.school && form.course ? mitwpuAcademics[form.school]?.[form.course] || [] : []),
    [form.school, form.course],
  );

  const set = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const toggleDepartment = (dept: string) => {
    setDepartments((prev) => {
      if (prev.includes(dept)) return prev.filter((d) => d !== dept);
      if (prev.length >= MAX_DEPARTMENTS) {
        toast.error(`You can select a maximum of ${MAX_DEPARTMENTS} departments. Remove one to choose another.`);
        return prev;
      }
      setErrors((e) => ({ ...e, departments: '' }));
      return [...prev, dept];
    });
  };

  const validate = () => {
    const e: Errors = {};
    if (!form.full_name.trim()) e.full_name = 'Please enter your full name.';
    if (!form.email.trim()) e.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Please enter a valid email address.';
    if (!form.prn.trim()) e.prn = 'Please enter your PRN number.';
    if (!form.contact_number.trim()) e.contact_number = 'Please enter your contact number.';
    else if (!/^[+\d][\d\s-]{7,15}$/.test(form.contact_number.trim())) e.contact_number = 'Please enter a valid contact number.';
    if (form.linkedin_url.trim() && !/^https?:\/\/.+/.test(form.linkedin_url.trim()))
      e.linkedin_url = 'Please enter a valid URL starting with https://';
    if (!form.school) e.school = 'Please select your school.';
    if (!form.course) e.course = 'Please select your course.';
    if (specializations.length > 0 && !form.specialization) e.specialization = 'Please select your specialization.';
    if (!form.current_year) e.current_year = 'Please select your current year.';
    if (!form.division) e.division = 'Please select your division.';
    if (departments.length === 0) e.departments = 'Please select at least one department.';
    if (!form.why_join.trim()) e.why_join = 'Please tell us why you want to join.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error('Please fill in all required fields correctly.');
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from('recruitment_applications').insert({
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        prn: form.prn.trim(),
        contact_number: form.contact_number.trim(),
        linkedin_url: form.linkedin_url.trim() || null,
        school: form.school,
        course: form.course,
        specialization: form.specialization || 'Not Applicable',
        current_year: form.current_year,
        division: form.division,
        departments,
        why_join: form.why_join.trim(),
      });
      if (error) throw error;

      supabase.functions
        .invoke('send-recruitment-email', {
          body: { name: form.full_name.trim(), email: form.email.trim(), departments },
        })
        .catch((err) => console.error('Confirmation email failed:', err));

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Application submit error:', err);
      toast.error('Something went wrong while submitting. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (key: string) =>
    `w-full px-4 py-3 bg-secondary border rounded-lg text-sm box-border max-w-full focus:outline-none focus:ring-2 focus:ring-primary/40 ${
      errors[key] ? 'border-destructive' : 'border-border'
    }`;

  const FieldError = ({ name }: { name: string }) =>
    errors[name] ? (
      <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
        <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors[name]}
      </p>
    ) : null;

  if (submitted) {
    return (
      <Layout>
        <section className="pt-32 pb-24 bg-background min-h-[70vh] flex items-center">
          <div className="container-wide mx-auto px-4 md:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl mx-auto text-center"
            >
              <GlassCard className="p-8">
                <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-5" />
                <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Application Submitted Successfully!
                </h1>
                <p className="text-muted-foreground mb-3">
                  Thank you for applying to the Budding Entrepreneurs Forum.
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  Your application has been received successfully. Our team will review your application, and
                  shortlisted candidates will be contacted regarding the next steps.
                </p>
                <p className="text-sm font-medium text-primary">
                  Every journey begins with the decision to take the first step.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-28 md:pt-32 pb-14 md:pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-wide mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-semibold tracking-wide mb-5">
              RECRUITMENT
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-5 leading-tight">
              Every Big Idea Starts With <span className="gradient-text">One Bold Step</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl">
              The Budding Entrepreneurs Forum is where MIT-WPU students explore ideas, build real skills, take
              ownership of meaningful work, and grow alongside ambitious people. This is your chance to learn far
              beyond the classroom and find out what you are truly capable of.
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base inline-flex items-center justify-center gap-2 shadow-glow hover:opacity-90 transition-opacity"
            >
              APPLY NOW <ArrowDown className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-14 md:py-20 bg-card">
        <div className="container-wide mx-auto px-4 md:px-8">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-3">
            Where Ideas Become&nbsp;<span className="gradient-text">Impact</span>
          </h2>
          <p className="text-center text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10">
            Joining BEF is not about getting a position. It is about discovering what you are capable of.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="h-full p-5">
                  <b.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1.5">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section ref={formRef} className="py-14 md:py-20 bg-background scroll-mt-24 overflow-x-hidden">
        <div className="container-wide mx-auto px-4 md:px-8 max-w-full">
          <div className="max-w-2xl mx-auto min-w-0">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2">
              Recruitment <span className="gradient-text">Application</span>
            </h2>
            <p className="text-muted-foreground text-sm mb-8">Fields marked with * are required.</p>

            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {/* PERSONAL */}
              <GlassCard className="p-5 md:p-6 overflow-hidden">
                <h3 className="font-display text-lg font-bold text-foreground mb-5">Personal Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                    <input type="text" value={form.full_name} onChange={(e) => set('full_name', e.target.value)} className={inputClass('full_name')} placeholder="Your full name" />
                    <FieldError name="full_name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">MIT-WPU Email Address *</label>
                    <input type="email" inputMode="email" value={form.email} onChange={(e) => set('email', e.target.value)} className={inputClass('email')} placeholder="you@mitwpu.edu.in" />
                    <FieldError name="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">PRN Number *</label>
                    <input type="text" value={form.prn} onChange={(e) => set('prn', e.target.value)} className={inputClass('prn')} placeholder="Your PRN" />
                    <FieldError name="prn" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Contact Number *</label>
                    <input type="tel" inputMode="tel" value={form.contact_number} onChange={(e) => set('contact_number', e.target.value)} className={inputClass('contact_number')} placeholder="+91 98765 43210" />
                    <FieldError name="contact_number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">LinkedIn Profile <span className="text-muted-foreground font-normal">(optional)</span></label>
                    <input type="url" inputMode="url" value={form.linkedin_url} onChange={(e) => set('linkedin_url', e.target.value)} className={inputClass('linkedin_url')} placeholder="https://linkedin.com/in/username" />
                    <FieldError name="linkedin_url" />
                  </div>
                </div>
              </GlassCard>

              {/* ACADEMIC */}
              <GlassCard className="p-5 md:p-6 overflow-hidden">
                <h3 className="font-display text-lg font-bold text-foreground mb-5">Academic Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">School *</label>
                    <select
                      value={form.school}
                      onChange={(e) => { setForm((p) => ({ ...p, school: e.target.value, course: '', specialization: '' })); setErrors((p) => ({ ...p, school: '' })); }}
                      className={inputClass('school')}
                    >
                      <option value="">Select your school</option>
                      {Object.keys(mitwpuAcademics).map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <FieldError name="school" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Course *</label>
                    <select
                      value={form.course}
                      disabled={!form.school}
                      onChange={(e) => { setForm((p) => ({ ...p, course: e.target.value, specialization: '' })); setErrors((p) => ({ ...p, course: '' })); }}
                      className={`${inputClass('course')} disabled:opacity-50`}
                    >
                      <option value="">{form.school ? 'Select your course' : 'Select a school first'}</option>
                      {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <FieldError name="course" />
                  </div>
                  {specializations.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Specialization *</label>
                      <select value={form.specialization} onChange={(e) => set('specialization', e.target.value)} className={inputClass('specialization')}>
                        <option value="">Select your specialization</option>
                        {specializations.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <FieldError name="specialization" />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Current Year *</label>
                    <select value={form.current_year} onChange={(e) => set('current_year', e.target.value)} className={inputClass('current_year')}>
                      <option value="">Select your year</option>
                      {currentYearOptions.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                    <FieldError name="current_year" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Division *</label>
                    <select value={form.division} onChange={(e) => set('division', e.target.value)} className={inputClass('division')}>
                      <option value="">Select your division</option>
                      {divisionOptions.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                    <FieldError name="division" />
                  </div>
                </div>
              </GlassCard>

              {/* DEPARTMENTS */}
              <GlassCard className="p-5 md:p-6 overflow-hidden">
                <h3 className="font-display text-lg font-bold text-foreground mb-1.5">Preferred Departments *</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Select up to three departments that align with your interests and strengths.
                  <span className="block mt-1 text-xs text-primary font-medium">{departments.length} of {MAX_DEPARTMENTS} selected</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {recruitmentDepartments.map((dept) => {
                    const checked = departments.includes(dept);
                    const disabled = !checked && departments.length >= MAX_DEPARTMENTS;
                    return (
                      <label
                        key={dept}
                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors min-w-0 ${
                          checked ? 'border-primary bg-primary/10' : 'border-border bg-secondary'
                        } ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          disabled={disabled}
                          onChange={() => toggleDepartment(dept)}
                          className="mt-0.5 w-5 h-5 flex-shrink-0 accent-primary"
                        />
                        <span className="text-sm text-foreground break-words min-w-0">{dept}</span>
                      </label>
                    );
                  })}
                </div>
                <FieldError name="departments" />
              </GlassCard>

              {/* ABOUT YOU */}
              <GlassCard className="p-5 md:p-6 overflow-hidden">
                <h3 className="font-display text-lg font-bold text-foreground mb-5">About You</h3>
                <label className="block text-sm font-medium mb-1.5">
                  Why do you want to join the Budding Entrepreneurs Forum? *
                </label>
                <textarea
                  rows={6}
                  value={form.why_join}
                  onChange={(e) => set('why_join', e.target.value)}
                  className={`${inputClass('why_join')} resize-none`}
                  placeholder="Tell us what draws you to BEF and what you hope to build here."
                />
                <FieldError name="why_join" />
              </GlassCard>

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>) : 'SUBMIT APPLICATION'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Recruitment;
