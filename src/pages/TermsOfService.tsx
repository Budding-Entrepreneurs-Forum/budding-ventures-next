import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/ui/SectionHeading';

const TermsOfService = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container-wide mx-auto px-4 md:px-8 max-w-4xl">
          <SectionHeading title="Terms of Service" description="Last updated: February 2026" />

          <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground space-y-10 mt-12">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
              <p>
                By accessing and using the Budding Entrepreneurs Forum (BEF) website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of the website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Website Usage</h2>
              <p>When using this website, you agree not to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Engage in any unlawful or prohibited activity</li>
                <li>Attempt to disrupt, interfere with, or compromise the website's functionality or security</li>
                <li>Upload or transmit any harmful, offensive, or malicious content</li>
                <li>Misuse contact forms or communication channels for spam or unsolicited messages</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
              <p>
                All logos, newsletters, designs, written content, branding materials, and other creative assets displayed on this website are the property of Budding Entrepreneurs Forum, MIT World Peace University, unless otherwise stated. Unauthorised reproduction, distribution, or use of any materials without prior written consent is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
              <p>Budding Entrepreneurs Forum shall not be held liable for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Technical interruptions, downtime, or service unavailability</li>
                <li>Errors, inaccuracies, or omissions in website content</li>
                <li>Content, policies, or practices of any third-party websites linked from this site</li>
              </ul>
              <p className="mt-2">
                The website and its content are provided on an "as is" basis without warranties of any kind, either express or implied.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">External Links</h2>
              <p>
                This website may contain links to external platforms and third-party websites for informational purposes. Budding Entrepreneurs Forum does not endorse and is not responsible for the content, accuracy, or practices of these external sites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Modifications</h2>
              <p>
                Budding Entrepreneurs Forum reserves the right to update, modify, or revise these Terms of Service at any time without prior notice. Continued use of the website after any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact Information</h2>
              <p>
                If you have any questions regarding these Terms of Service, please contact us at:{' '}
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

export default TermsOfService;
