import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Terms: React.FC = () => {
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
          <h1 className="text-h1 font-bold text-theme-text mb-8 font-cabinet">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <div className="space-y-8 text-theme-text">
              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">1. Agreement to Terms</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  By accessing and using BeautifullyDone's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">2. Use License</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on BeautifullyDone's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-body text-theme-text-secondary font-manrope leading-relaxed space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">3. Service Terms</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  BeautifullyDone provides website design and development services. All services are subject to availability and may be modified or discontinued at any time. We reserve the right to refuse service to anyone for any reason at any time.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">4. Payment Terms</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  Payment is due upon completion of services unless otherwise agreed upon in writing. Late payments may be subject to additional fees. All payments are non-refundable unless otherwise specified in your service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">5. Disclaimer</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  The materials on BeautifullyDone's website are provided on an 'as is' basis. BeautifullyDone makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">6. Limitations</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  In no event shall BeautifullyDone or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BeautifullyDone's website, even if BeautifullyDone or a BeautifullyDone authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">7. Revisions</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  BeautifullyDone may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-theme-text mb-4 font-cabinet">8. Contact Information</h2>
                <p className="text-body text-theme-text-secondary font-manrope leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a 
                    href="mailto:legal@beautifullydone.store" 
                    className="text-theme-primary hover:text-theme-primary-hover underline"
                  >
                    legal@beautifullydone.store
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