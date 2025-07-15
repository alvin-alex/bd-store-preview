import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-theme-bg font-manrope">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-theme-primary hover:text-theme-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg rounded"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-theme-surface rounded-lg shadow-card dark:shadow-card-dark p-8 border border-theme-border">
          <h1 className="text-h1 font-bold text-theme-text mb-8 font-cabinet">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <div className="space-y-8 text-theme-text">
              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">1. Information We Collect</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:
                </p>
                <ul className="list-disc list-inside text-body text-theme-text-secondary font-manrope leading-relaxed space-y-2 ml-4">
                  <li>Name and contact information</li>
                  <li>Business information and website details</li>
                  <li>Payment information</li>
                  <li>Communications with our team</li>
                  <li>Usage data and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">2. How We Use Your Information</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-body text-theme-text-secondary font-manrope leading-relaxed space-y-2 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">3. Information Sharing</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-body text-theme-text-secondary font-manrope leading-relaxed space-y-2 ml-4 mt-4">
                  <li>With your consent</li>
                  <li>With service providers who assist us in operating our business</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>In connection with a business transaction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">4. Data Security</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">5. Cookies and Tracking</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  We use cookies and similar tracking technologies to collect information about your browsing activities and to provide you with a better experience. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">6. Your Rights</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-body text-theme-text-secondary font-manrope leading-relaxed space-y-2 ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">7. Data Retention</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">8. International Transfers</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We will ensure that any such transfers comply with applicable data protection laws and that your information receives adequate protection.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">9. Changes to This Policy</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date below.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">10. Contact Us</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at{' '}
                  <a 
                    href="mailto:privacy@beautifullydone.store" 
                    className="text-theme-primary hover:text-theme-primary-hover underline"
                  >
                    privacy@beautifullydone.store
                  </a>
                </p>
              </section>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-theme-border">
            <p className="text-small text-theme-text-secondary font-manrope">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};