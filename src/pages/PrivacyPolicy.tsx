import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container-wide mx-auto px-4 md:px-8 max-w-4xl">
          <SectionHeading title="Privacy Policy" description="Last updated: February 2026" />

          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground space-y-10 mt-12">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Introduction</h2>
              <p>
                Budding Entrepreneurs Forum (BEF) is a student-led initiative at MIT World Peace University, Pune. This Privacy Policy outlines how we collect, use, and protect any information you provide while using our website. By accessing this website, you agree to the practices described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name, if submitted via contact or inquiry forms</li>
                <li>Email address, if voluntarily provided</li>
                <li>Any other information you choose to submit through our website</li>
                <li>Basic website usage data such as page views and visit duration</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Information</h2>
              <p>The information we collect may be used to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your inquiries and messages</li>
                <li>Improve the overall website experience</li>
                <li>Communicate updates related to the forum's activities</li>
                <li>Share forum-related information, events, and newsletters</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Services</h2>
              <p>
                Our website may use third-party services for hosting, storage, chatbot functionality, and embedded maps. These service providers operate under their own privacy policies, and we encourage you to review them independently. We do not sell or share your personal data with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Data Protection</h2>
              <p>
                We implement reasonable technical and organisational measures to protect the information you provide from unauthorised access, misuse, or disclosure. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Cookies</h2>
              <p>
                Our website may use essential cookies to ensure proper functionality and enhance your browsing experience. These cookies do not collect personal information and are necessary for the website to operate effectively.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">External Links</h2>
              <p>
                This website may contain links to external platforms and third-party websites. Budding Entrepreneurs Forum is not responsible for the privacy practices or content of these external sites. We recommend reviewing their respective privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Updates to This Policy</h2>
              <p>
                This Privacy Policy may be updated periodically to reflect changes in our practices or for operational, legal, or regulatory reasons. We encourage you to review this page from time to time for the latest information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact Information</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please reach out to us at:{' '}
                <a href="mailto:buddingentrepreneursforum@gmail.com" className="text-primary hover:underline">
                  buddingentrepreneursforum@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
