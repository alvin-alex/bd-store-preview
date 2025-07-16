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
              {/* Store Preview with 32px padding */}
              <div className="relative group cursor-pointer">
                <a
                  href="https://merch.topg.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-surface"
                  aria-label="Visit TopG Merchandise Store - Opens in new tab"
                >
                  <img
                    src="https://i.imgur.com/OUp92sg.png"
                    alt="TopG Merchandise Store - Live e-commerce website preview"
                    className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  
                  {/* Overlay with hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-6 py-3 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center space-x-2 text-gray-800">
                        <ExternalLink className="h-5 w-5" />
                        <span className="font-semibold font-manrope">Visit Live Store</span>
                      </div>
                    </div>
                  </div>
                </a>
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