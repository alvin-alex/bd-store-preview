import React, { useState, useEffect } from 'react';
import { Monitor, Zap, Palette, Settings, Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
    
    setIsDark(shouldUseDark);
    updateTheme(shouldUseDark);
  }, []);

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    updateTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200 hover:bg-theme-surface focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-checked={isDark}
      role="switch"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-theme-text" />
      ) : (
        <Moon className="h-5 w-5 text-theme-text" />
      )}
    </button>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-theme-bg font-manrope">
      {/* Header */}
      <header className="bg-theme-bg shadow-subtle dark:shadow-subtle-dark sticky top-0 z-50 border-b border-theme-border">
        <div className="max-w-7xl mx-auto px-16">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Monitor className="h-8 w-8 text-theme-primary" />
              <span className="ml-2 text-xl font-bold text-theme-text font-cabinet">StorePreview</span>
            </div>
            <nav className="hidden md:flex space-x-32">
              <a href="#preview" className="text-theme-text hover:text-theme-primary transition-colors font-manrope text-body">Preview</a>
              <a href="#features" className="text-theme-text hover:text-theme-primary transition-colors font-manrope text-body">Features</a>
              <a href="#support" className="text-theme-text hover:text-theme-primary transition-colors font-manrope text-body">Support</a>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button className="bg-trae-neutral-button-bg text-trae-neutral-button-text px-16 py-2 rounded text-small font-semibold hover:bg-gray-100 transition-colors font-manrope border border-theme-primary border-opacity-50">
                Claim Your Store
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Preview Section */}
      <section id="preview" className="py-16 lg:py-32">
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
            <div className="bg-theme-surface rounded shadow-card dark:shadow-card-dark overflow-hidden border-0">
              {/* Browser Header */}
              <div className="bg-theme-surface p-16 flex items-center space-x-8 border-b border-theme-border border-opacity-30">
                <div className="flex space-x-8">
                  <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                  <div className="w-3 h-3 bg-accent-yellow rounded-full"></div>
                  <div className="w-3 h-3 bg-accent-teal rounded-full"></div>
                </div>
                <div className="flex-1 mx-16">
                  <div className="bg-theme-bg rounded px-16 py-1 text-small text-theme-text-secondary font-manrope">
                    yourstore.myshopify.com
                  </div>
                </div>
              </div>
              
              {/* Store Preview with 32px padding */}
              <div className="p-32 bg-theme-bg">
                <div className="space-y-32">
                  {/* Store Header */}
                  <div className="flex justify-between items-center pb-16 border-b border-theme-border border-opacity-20">
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
                      <p className="text-theme-text-secondary font-manrope text-body">Beautiful product description that converts visitors into customers.</p>
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
            <button className="bg-gradient-to-r from-trae-cta-gradient-start via-trae-cta-gradient-mid to-trae-cta-gradient-end text-white px-32 py-3 rounded font-semibold hover:opacity-90 transition-opacity font-manrope text-body">
              Publish to My Shopify
          <div className="flex flex-col sm:flex-row gap-16 justify-center">
            <button className="bg-gradient-to-r from-trae-cta-gradient-start via-trae-cta-gradient-mid to-trae-cta-gradient-end text-white px-32 py-3 rounded font-semibold hover:opacity-90 transition-opacity font-manrope text-body">
              Publish to My Shopify
            </button>
            <button className="border border-theme-secondary text-theme-secondary px-32 py-3 rounded font-semibold hover:bg-theme-secondary hover:text-white transition-colors font-manrope text-body border-opacity-40">
              Request Tweaks
            </button>
          </div>
        </div>
      </section>

      {/* Features Snapshot */}
      <section id="features" className="py-32 bg-theme-bg">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid md:grid-cols-3 gap-32">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-theme-primary rounded mb-16">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-body font-semibold text-theme-text mb-8 font-space-grotesk">One-Click Go-Live</h3>
              <p className="text-small text-theme-text-secondary font-manrope">Launch your store instantly with zero technical setup required.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-theme-primary rounded mb-16">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-body font-semibold text-theme-text mb-8 font-space-grotesk">Agency-Quality Design</h3>
              <p className="text-small text-theme-text-secondary font-manrope">Professional layouts that convert visitors into customers.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-theme-primary rounded mb-16">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-body font-semibold text-theme-text mb-8 font-space-grotesk">Hassle-Free Setup</h3>
              <p className="text-small text-theme-text-secondary font-manrope">We handle all the technical details so you can focus on selling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-theme-surface">
        <div className="max-w-7xl mx-auto px-16">
          <div className="text-center mb-32">
            <h2 className="text-h2 font-bold text-theme-primary mb-16 font-cabinet">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-32">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-theme-primary rounded-full mb-16">
                <span className="text-white font-bold text-body font-cabinet">1</span>
              </div>
              <h3 className="text-h4 font-bold text-theme-text mb-16 font-cabinet">
                We scrape your existing site
              </h3>
              <p className="text-small text-theme-text-secondary font-manrope">
                Our system analyzes your current website and extracts all your products, images, and content.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-theme-primary rounded-full mb-16">
                <span className="text-white font-bold text-body font-cabinet">2</span>
              </div>
              <h3 className="text-h4 font-bold text-theme-text mb-16 font-cabinet">
                We rebuild and optimize on Shopify
              </h3>
              <p className="text-small text-theme-text-secondary font-manrope">
                Your content is transformed into a conversion-optimized Shopify store with modern design.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-theme-primary rounded-full mb-16">
                <span className="text-white font-bold text-body font-cabinet">3</span>
              </div>
              <h3 className="text-h4 font-bold text-theme-text mb-16 font-cabinet">
                You preview → click publish → you're live
              </h3>
              <p className="text-small text-theme-text-secondary font-manrope">
                Review your new store, request any tweaks, then publish directly to your Shopify account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="py-32 bg-theme-bg">
        <div className="max-w-7xl mx-auto px-16">
          <div className="text-center mb-32">
            <h2 className="text-h2 font-bold text-theme-primary mb-16 font-cabinet">See More Pages</h2>
            <p className="text-body text-theme-text-secondary font-manrope">Your complete store includes all essential pages</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { title: 'Product Page', desc: 'Detailed product views' },
              { title: 'Shopping Cart', desc: 'Streamlined checkout' },
              { title: 'About Page', desc: 'Your brand story' },
              { title: 'Contact', desc: 'Customer support' }
            ].map((page, i) => (
              <div key={i} className="bg-theme-surface rounded p-16 aspect-square flex flex-col justify-between shadow-subtle dark:shadow-subtle-dark border border-theme-border border-opacity-20">
                <div className="flex-1 flex items-center justify-center">
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

      {/* Pricing & Next Steps */}
      <section className="py-32 bg-theme-surface">
        <div className="max-w-4xl mx-auto px-16">
          <div className="text-center mb-32">
            <h2 className="text-h2 font-bold text-theme-primary mb-16 font-cabinet">What's Included</h2>
          </div>
          
          <div className="bg-theme-bg rounded shadow-card dark:shadow-card-dark p-32 border border-theme-border border-opacity-30">
            <div className="grid md:grid-cols-2 gap-32">
              <div>
                <h3 className="text-h4 font-bold text-theme-primary mb-16 font-cabinet">Your Complete Store</h3>
                <ul className="space-y-16">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-theme-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-theme-text font-manrope text-body">Professional theme customization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-theme-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-theme-text font-manrope text-body">All products imported and optimized</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-theme-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-theme-text font-manrope text-body">Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-theme-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-theme-text font-manrope text-body">SEO optimization</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-h4 font-bold text-theme-primary mb-16 font-cabinet">Support & Service</h3>
                <ul className="space-y-16">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-theme-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-theme-text font-manrope text-body">Free revision requests</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-theme-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-theme-text font-manrope text-body">30-day launch guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-theme-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-theme-text font-manrope text-body">Direct Shopify integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-theme-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-theme-text font-manrope text-body">Technical support included</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-32">
              <button className="bg-trae-neutral-button-bg text-theme-primary px-32 py-3 rounded font-semibold hover:bg-gray-100 transition-colors font-manrope text-body border border-theme-primary border-opacity-50">
                Yes, I'm In
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-theme-text text-theme-bg py-32">
        <div className="max-w-7xl mx-auto px-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-16 md:mb-0">
              <Monitor className="h-6 w-6 text-theme-primary" />
              <span className="ml-2 text-body font-bold font-cabinet text-theme-primary">StorePreview</span>
            </div>
            
            <div className="flex space-x-16 mb-16 md:mb-0">
              <a href="#" className="text-theme-text-secondary hover:text-theme-bg transition-colors font-manrope text-body">Terms</a>
              <a href="#" className="text-theme-text-secondary hover:text-theme-bg transition-colors font-manrope text-body">Privacy</a>
              <a href="#" className="text-theme-text-secondary hover:text-theme-bg transition-colors font-manrope text-body">Contact</a>
            </div>
            
            <div className="text-theme-text-secondary font-manrope text-body">
              Need help? <a href="mailto:support@storepreview.com" className="text-theme-primary hover:underline">support@storepreview.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;