import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useFocusManager } from '../hooks/useFocusManager';

export const HomePage: React.FC = () => {
  const { announceFocusChange } = useFocusManager();

  // Handle CTA button clicks with focus management
  const handlePublishClick = () => {
    announceFocusChange('Redirecting to Shopify publishing...');
    // Add your publishing logic here
  };

  const handleRequestTweaksClick = () => {
    // This will be handled by the Layout component
    const event = new CustomEvent('openRequestTweaksModal');
    window.dispatchEvent(event);
  };

  return (
    <>
      {/* Hero Preview Section */}
      <section id="preview-section" className="py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-16">
          <div className="text-center mb-32">
            <h1 className="text-h1 font-bold text-theme-primary mb-16 font-cabinet">
              You're store, BeautifullyDone.
            </h1>
            <p className="text-body text-theme-text-secondary max-w-2xl mx-auto font-manrope">
              We've scraped, redesigned, and packaged your site into a live Shopify demo. Take a look.
            </p>
          </div>

          {/* Browser Mockup */}
          <div className="max-w-5xl mx-auto mb-32">
            <div className="bg-theme-surface rounded shadow-card dark:shadow-card-dark overflow-hidden border border-theme-border">
              {/* Browser Header */}
              <div className="bg-theme-surface p-16 flex items-center space-x-8 border-b border-theme-border">
                <div className="flex space-x-8">
                  <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                  <div className="w-3 h-3 bg-accent-yellow rounded-full"></div>
                  <div className="w-3 h-3 bg-accent-teal rounded-full"></div>
                </div>
                <div className="flex-1 mx-16">
                  <a
                    href="https://demo-store.myshopify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-theme-bg rounded px-16 py-1 text-small text-theme-text-secondary font-manrope hover:text-theme-primary hover:bg-theme-surface transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-surface inline-flex items-center gap-2 w-full justify-center group"
                    aria-label="Visit demo store in new tab"
                  >
                    <span>yourstore.myshopify.com</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </div>
              </div>
              
              {/* Store Preview with 32px padding */}
              <div className="p-32 bg-theme-bg">
                <div className="space-y-32">
                  {/* Store Header */}
                  <div className="flex justify-between items-center pb-16 border-b border-theme-border">
                    <div className="text-h3 font-bold text-theme-text font-cabinet">Your Store</div>
                    <div className="flex space-x-16">
                      <span className="text-small text-theme-text-secondary font-manrope">Cart (0)</span>
                      <span className="text-small text-theme-text-secondary font-manrope">Account</span>
                    </div>
                  </div>
                  
                  {/* Hero Product */}
                  <div className="grid md:grid-cols-2 gap-32">
                    <div className="bg-theme-surface aspect-square rounded flex items-center justify-center">
                      <div className="text-theme-text-secondary text-center">
                        <div className="w-16 h-16 bg-theme-border rounded mx-auto mb-16"></div>
                        <p className="font-manrope text-small">Product Image</p>
                      </div>
                    </div>
                    <div className="space-y-16">
                      <h2 className="text-h3 font-bold text-theme-text font-cabinet">Featured Product</h2>
                      <p className="text-theme-text-secondary font-manrope text-body max-w-prose">Beautiful product description that converts visitors into customers.</p>
                      <div className="text-h2 font-bold text-theme-text font-cabinet">$99.99</div>
                      <button className="bg-theme-primary text-white px-32 py-3 rounded font-semibold hover:bg-theme-primary-hover transition-colors font-manrope text-body">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  {/* Product Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="space-y-8">
                        <div className="bg-theme-surface aspect-square rounded flex items-center justify-center">
                          <div className="w-8 h-8 bg-theme-border rounded"></div>
                        </div>
                        <div className="text-small font-semibold text-theme-text font-manrope">Product {i}</div>
                        <div className="text-small text-theme-primary font-bold font-manrope">$49.99</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-16 justify-center">
            <button 
              className="cta-gradient text-white px-32 py-3 rounded font-semibold hover:opacity-90 transition-opacity font-manrope text-body focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-theme-bg"
              onClick={handlePublishClick}
            >
              Publish to My Shopify
            </button>
            <button 
              className="border-2 border-theme-primary text-theme-primary px-32 py-3 rounded font-semibold hover:bg-theme-primary hover:text-white transition-colors font-manrope text-body focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg"
              onClick={handleRequestTweaksClick}
            >
              Request Tweaks
            </button>
          </div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section id="pages-section" className="py-32 bg-theme-bg">
        <div className="max-w-7xl mx-auto px-16">
          <div className="text-center mb-32">
            <h2 className="text-h2 font-bold text-theme-primary mb-16 font-cabinet">See More Pages</h2>
            <p className="text-body text-theme-text-secondary font-manrope max-w-prose mx-auto">Your complete store includes all essential pages</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { title: 'Product Page', desc: 'Detailed product views' },
              { title: 'Shopping Cart', desc: 'Streamlined checkout' },
              { title: 'About Page', desc: 'Your brand story' },
              { title: 'Contact', desc: 'Customer support' }
            ].map((page, i) => (
              <div key={i} className="bg-theme-surface rounded p-16 aspect-square flex flex-col justify-between shadow-subtle dark:shadow-subtle-dark border border-theme-border border-opacity-20">
                <div 
                  className="flex-1 flex items-center justify-center"
                  role="img"
                  aria-label={`${page.title} preview`}
                >
                  <div className="w-16 h-16 bg-theme-border rounded"></div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-theme-text mb-1 font-manrope text-body">{page.title}</h4>
                  <p className="text-small text-theme-text-secondary font-manrope">{page.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};