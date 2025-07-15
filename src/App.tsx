import React from 'react';
import { Monitor, Zap, Palette, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-white font-manrope">
      {/* Header */}
      <header className="bg-neutral-white shadow-subtle sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-16">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Monitor className="h-8 w-8 text-primary-blue" />
              <span className="ml-2 text-xl font-bold text-neutral-black font-satoshi">StorePreview</span>
            </div>
            <nav className="hidden md:flex space-x-32">
              <a href="#preview" className="text-neutral-black hover:text-primary-blue transition-colors font-manrope text-body">Preview</a>
              <a href="#features" className="text-neutral-black hover:text-primary-blue transition-colors font-manrope text-body">Features</a>
              <a href="#support" className="text-neutral-black hover:text-primary-blue transition-colors font-manrope text-body">Support</a>
            </nav>
            <button className="bg-primary-blue text-white px-16 py-2 rounded text-small font-semibold hover:bg-primary-blue-dark transition-colors font-manrope">
              Claim Your Store
            </button>
          </div>
        </div>
      </header>

      {/* Hero Preview Section */}
      <section id="preview" className="py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-16">
          <div className="text-center mb-32">
            <h1 className="text-h1 font-bold text-neutral-black mb-16 font-satoshi">
              You're store, BeautifullyDone.
            </h1>
            <p className="text-body text-neutral-dark max-w-2xl mx-auto font-manrope">
              We've scraped, redesigned, and packaged your site into a live Shopify demo. Take a look.
            </p>
          </div>

          {/* Browser Mockup */}
          <div className="max-w-5xl mx-auto mb-32">
            <div className="bg-neutral-white rounded shadow-card overflow-hidden">
              {/* Browser Header */}
              <div className="bg-neutral-light p-16 flex items-center space-x-8">
                <div className="flex space-x-8">
                  <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                  <div className="w-3 h-3 bg-accent-yellow rounded-full"></div>
                  <div className="w-3 h-3 bg-accent-teal rounded-full"></div>
                </div>
                <div className="flex-1 mx-16">
                  <div className="bg-neutral-white rounded px-16 py-1 text-small text-neutral-dark font-manrope">
                    yourstore.myshopify.com
                  </div>
                </div>
              </div>
              
              {/* Store Preview with 32px padding */}
              <div className="p-32 bg-neutral-white">
                <div className="space-y-32">
                  {/* Store Header */}
                  <div className="flex justify-between items-center pb-16 border-b border-neutral-light">
                    <div className="text-h3 font-bold text-neutral-black font-satoshi">Your Store</div>
                    <div className="flex space-x-16">
                      <span className="text-small text-neutral-dark font-manrope">Cart (0)</span>
                      <span className="text-small text-neutral-dark font-manrope">Account</span>
                    </div>
                  </div>
                  
                  {/* Hero Product */}
                  <div className="grid md:grid-cols-2 gap-32">
                    <div className="bg-neutral-light aspect-square rounded flex items-center justify-center">
                      <div className="text-neutral-dark text-center">
                        <div className="w-16 h-16 bg-neutral-mid rounded mx-auto mb-16"></div>
                        <p className="font-manrope text-small">Product Image</p>
                      </div>
                    </div>
                    <div className="space-y-16">
                      <h2 className="text-h3 font-bold text-neutral-black font-satoshi">Featured Product</h2>
                      <p className="text-neutral-dark font-manrope text-body">Beautiful product description that converts visitors into customers.</p>
                      <div className="text-h2 font-bold text-primary-blue font-satoshi">$99.99</div>
                      <button className="bg-primary-blue text-white px-32 py-3 rounded font-semibold hover:bg-primary-blue-dark transition-colors font-manrope text-body">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  {/* Product Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="space-y-8">
                        <div className="bg-neutral-light aspect-square rounded flex items-center justify-center">
                          <div className="w-8 h-8 bg-neutral-mid rounded"></div>
                        </div>
                        <div className="text-small font-semibold text-neutral-black font-manrope">Product {i}</div>
                        <div className="text-small text-primary-blue font-bold font-manrope">$49.99</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-16 justify-center">
            <button className="bg-primary-blue text-white px-32 py-3 rounded font-semibold hover:bg-primary-blue-dark transition-colors font-manrope text-body">
              Publish to My Shopify
            </button>
            <button className="border-2 border-secondary-orange text-secondary-orange px-32 py-3 rounded font-semibold hover:bg-secondary-orange hover:text-neutral-white transition-colors font-manrope text-body">
              Request Tweaks
            </button>
          </div>
        </div>
      </section>

      {/* Features Snapshot */}
      <section id="features" className="py-32 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid md:grid-cols-3 gap-32">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue rounded mb-16">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-body font-semibold text-neutral-black mb-8 font-space-grotesk">One-Click Go-Live</h3>
              <p className="text-small text-neutral-dark font-manrope">Launch your store instantly with zero technical setup required.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue rounded mb-16">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-body font-semibold text-neutral-black mb-8 font-space-grotesk">Agency-Quality Design</h3>
              <p className="text-small text-neutral-dark font-manrope">Professional layouts that convert visitors into customers.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue rounded mb-16">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-body font-semibold text-neutral-black mb-8 font-space-grotesk">Hassle-Free Setup</h3>
              <p className="text-small text-neutral-dark font-manrope">We handle all the technical details so you can focus on selling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-16">
          <div className="text-center mb-32">
            <h2 className="text-h2 font-bold text-neutral-black mb-16 font-satoshi">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-32">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-blue rounded-full mb-16">
                <span className="text-white font-bold text-body font-satoshi">1</span>
              </div>
              <h3 className="text-h4 font-bold text-neutral-black mb-16 font-satoshi">
                We scrape your existing site
              </h3>
              <p className="text-small text-neutral-dark font-manrope">
                Our system analyzes your current website and extracts all your products, images, and content.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-blue rounded-full mb-16">
                <span className="text-white font-bold text-body font-satoshi">2</span>
              </div>
              <h3 className="text-h4 font-bold text-neutral-black mb-16 font-satoshi">
                We rebuild and optimize on Shopify
              </h3>
              <p className="text-small text-neutral-dark font-manrope">
                Your content is transformed into a conversion-optimized Shopify store with modern design.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-blue rounded-full mb-16">
                <span className="text-white font-bold text-body font-satoshi">3</span>
              </div>
              <h3 className="text-h4 font-bold text-neutral-black mb-16 font-satoshi">
                You preview → click publish → you're live
              </h3>
              <p className="text-small text-neutral-dark font-manrope">
                Review your new store, request any tweaks, then publish directly to your Shopify account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="py-32 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-16">
          <div className="text-center mb-32">
            <h2 className="text-h2 font-bold text-neutral-black mb-16 font-satoshi">See More Pages</h2>
            <p className="text-body text-neutral-dark font-manrope">Your complete store includes all essential pages</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { title: 'Product Page', desc: 'Detailed product views' },
              { title: 'Shopping Cart', desc: 'Streamlined checkout' },
              { title: 'About Page', desc: 'Your brand story' },
              { title: 'Contact', desc: 'Customer support' }
            ].map((page, i) => (
              <div key={i} className="bg-neutral-light rounded p-16 aspect-square flex flex-col justify-between shadow-subtle">
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 bg-neutral-mid rounded"></div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-neutral-black mb-1 font-manrope text-body">{page.title}</h4>
                  <p className="text-small text-neutral-dark font-manrope">{page.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Next Steps */}
      <section className="py-32 bg-neutral-light">
        <div className="max-w-4xl mx-auto px-16">
          <div className="text-center mb-32">
            <h2 className="text-h2 font-bold text-neutral-black mb-16 font-satoshi">What's Included</h2>
          </div>
          
          <div className="bg-neutral-white rounded shadow-card p-32">
            <div className="grid md:grid-cols-2 gap-32">
              <div>
                <h3 className="text-h4 font-bold text-neutral-black mb-16 font-satoshi">Your Complete Store</h3>
                <ul className="space-y-16">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3"></div>
                    <span className="text-neutral-black font-manrope text-body">Professional theme customization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3"></div>
                    <span className="text-neutral-black font-manrope text-body">All products imported and optimized</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3"></div>
                    <span className="text-neutral-black font-manrope text-body">Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3"></div>
                    <span className="text-neutral-black font-manrope text-body">SEO optimization</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-h4 font-bold text-neutral-black mb-16 font-satoshi">Support & Service</h3>
                <ul className="space-y-16">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3"></div>
                    <span className="text-neutral-black font-manrope text-body">Free revision requests</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3"></div>
                    <span className="text-neutral-black font-manrope text-body">30-day launch guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3"></div>
                    <span className="text-neutral-black font-manrope text-body">Direct Shopify integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3"></div>
                    <span className="text-neutral-black font-manrope text-body">Technical support included</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-32">
              <button className="bg-primary-blue text-white px-32 py-3 rounded font-semibold hover:bg-primary-blue-dark transition-colors font-manrope text-body">
                Yes, I'm In
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-black text-white py-32">
        <div className="max-w-7xl mx-auto px-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-16 md:mb-0">
              <Monitor className="h-6 w-6 text-primary-blue" />
              <span className="ml-2 text-body font-bold font-satoshi">StorePreview</span>
            </div>
            
            <div className="flex space-x-16 mb-16 md:mb-0">
              <a href="#" className="text-neutral-mid hover:text-neutral-white transition-colors font-manrope text-body">Terms</a>
              <a href="#" className="text-neutral-mid hover:text-neutral-white transition-colors font-manrope text-body">Privacy</a>
              <a href="#" className="text-neutral-mid hover:text-neutral-white transition-colors font-manrope text-body">Contact</a>
            </div>
            
            <div className="text-neutral-mid font-manrope text-body">
              Need help? <a href="mailto:support@storepreview.com" className="text-primary-blue hover:underline">support@storepreview.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;