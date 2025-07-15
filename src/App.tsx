import React, { useState, useEffect } from 'react';
import { Monitor, Zap, Palette, Settings, Moon, Sun } from 'lucide-react';
import { SkipLinks } from './components/SkipLinks';
import { RequestTweaksModal } from './components/Modal';
import { useFocusManager } from './hooks/useFocusManager';

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
  const [isRequestTweaksModalOpen, setIsRequestTweaksModalOpen] = useState(false);
  const { announceFocusChange } = useFocusManager();

  // Handle CTA button clicks with focus management
  const handlePublishClick = () => {
    announceFocusChange('Redirecting to Shopify publishing...');
    // Add your publishing logic here
  };

  const handleRequestTweaksClick = () => {
    setIsRequestTweaksModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-theme-bg font-manrope">
      <SkipLinks />
      
      {/* Header */}
      <header 
        className="bg-theme-bg shadow-subtle dark:shadow-subtle-dark sticky top-0 z-50"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-16">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/src/logo/10.svg" alt="BeautifullyDone Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-theme-text font-cabinet">BeautifullyDone</span>
            </div>
            <nav className="hidden md:flex space-x-32">
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button 
                className="bg-gradient-to-r from-theme-primary via-trae-cta-gradient-mid to-trae-cta-gradient-end text-neutral-black px-16 py-2 rounded text-small font-semibold hover:opacity-90 transition-opacity font-manrope focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-theme-bg"
                className="bg-gradient-to-r from-theme-primary via-trae-cta-gradient-mid to-trae-cta-gradient-end text-white px-16 py-2 rounded text-small font-semibold hover:opacity-90 transition-opacity font-manrope focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-theme-bg"
                onClick={handlePublishClick}
              >
                Claim Your Store
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Preview Section */}
      <main id="main-content" role="main">
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
                  <div className="bg-theme-bg rounded px-16 py-1 text-small text-theme-text-secondary font-manrope">
                    yourstore.myshopify.com
                  </div>
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
              className="bg-gradient-to-r from-theme-primary via-trae-cta-gradient-mid to-trae-cta-gradient-end text-neutral-black px-32 py-3 rounded font-semibold hover:opacity-90 transition-opacity font-manrope text-body focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-theme-bg"
              className="bg-gradient-to-r from-theme-primary via-trae-cta-gradient-mid to-trae-cta-gradient-end text-white px-32 py-3 rounded font-semibold hover:opacity-90 transition-opacity font-manrope text-body focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-theme-bg"
              onClick={handlePublishClick}
            >
              Publish to My Shopify
            </button>
            <button 
              className="border-2 border-theme-primary text-neutral-black px-32 py-3 rounded font-semibold hover:bg-theme-primary hover:text-neutral-black transition-colors font-manrope text-body focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg"
              className="border-2 border-theme-primary text-theme-primary px-32 py-3 rounded font-semibold hover:bg-theme-primary hover:text-white transition-colors font-manrope text-body focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg"
              onClick={handleRequestTweaksClick}
            >
              Request Tweaks
            </button>
          </div>
        </div>
      </section>
      </main>

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

      {/* Footer */}
      <footer id="footer" className="bg-theme-bg text-theme-text py-32" role="contentinfo">
        <div className="max-w-7xl mx-auto px-16">
          <div className="space-y-16">
            {/* First Row */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-16 md:mb-0">
                <img src="/src/logo/10.svg" alt="BeautifullyDone Logo" className="h-6 w-6" />
                <span className="ml-2 text-body font-bold font-cabinet text-theme-primary">BeautifullyDone</span>
              </div>
              
              <div className="text-theme-text-secondary font-manrope text-body">
                Need help? <a 
                  href="mailto:support@beautifullydone.com" 
                  className="text-theme-primary hover:underline focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg rounded"
                >
                  support@beautifullydone.com
                </a>
              </div>
            </div>
            
            {/* Second Row */}
            <div className="flex justify-center space-x-16">
              <a 
                href="#" 
                className="text-theme-text-secondary hover:text-theme-primary transition-colors font-manrope text-body focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg rounded"
              >
                Terms
              </a>
              <a 
                href="#" 
                className="text-theme-text-secondary hover:text-theme-primary transition-colors font-manrope text-body focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg rounded"
              >
                Privacy
              </a>
              <a 
                href="#" 
                className="text-theme-text-secondary hover:text-theme-primary transition-colors font-manrope text-body focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg rounded"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Modal */}
      <RequestTweaksModal 
        isOpen={isRequestTweaksModalOpen} 
        onClose={() => setIsRequestTweaksModalOpen(false)} 
      />
    </div>
  );
}

export default App;