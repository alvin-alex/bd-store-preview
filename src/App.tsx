import React from 'react';
import { Monitor, Zap, Palette, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFAFA]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Monitor className="h-8 w-8 text-[#0B70B8]" />
              <span className="ml-2 text-xl font-bold text-[#333333]">StorePreview</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#preview" className="text-[#333333] hover:text-[#0B70B8] transition-colors">Preview</a>
              <a href="#features" className="text-[#333333] hover:text-[#0B70B8] transition-colors">Features</a>
              <a href="#support" className="text-[#333333] hover:text-[#0B70B8] transition-colors">Support</a>
            </nav>
            <button className="bg-[#0B70B8] text-white px-6 py-2 rounded text-sm font-semibold hover:bg-[#095a94] transition-colors">
              Claim Your Store
            </button>
          </div>
        </div>
      </header>

      {/* Hero Preview Section */}
      <section id="preview" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6" style={{ lineHeight: '1.2' }}>
              Your New Shopify Store Is Ready
            </h1>
            <p className="text-lg text-[#7A7A7A] max-w-2xl mx-auto" style={{ lineHeight: '1.5' }}>
              We've scraped, redesigned, and packaged your site into a live Shopify demo. Take a look.
            </p>
          </div>

          {/* Browser Mockup */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Browser Header */}
              <div className="bg-[#F5F5F5] p-4 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-[#E63946] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#FFD30A] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#00BFA5] rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded px-4 py-1 text-sm text-[#7A7A7A]">
                    yourstore.myshopify.com
                  </div>
                </div>
              </div>
              
              {/* Store Preview */}
              <div className="p-8 bg-white">
                <div className="space-y-8">
                  {/* Store Header */}
                  <div className="flex justify-between items-center pb-4 border-b border-[#F5F5F5]">
                    <div className="text-2xl font-bold text-[#333333]">Your Store</div>
                    <div className="flex space-x-4">
                      <span className="text-sm text-[#7A7A7A]">Cart (0)</span>
                      <span className="text-sm text-[#7A7A7A]">Account</span>
                    </div>
                  </div>
                  
                  {/* Hero Product */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#F5F5F5] aspect-square rounded-lg flex items-center justify-center">
                      <div className="text-[#7A7A7A] text-center">
                        <div className="w-16 h-16 bg-[#D1D1D1] rounded-lg mx-auto mb-4"></div>
                        <p>Product Image</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-[#333333]">Featured Product</h2>
                      <p className="text-[#7A7A7A]">Beautiful product description that converts visitors into customers.</p>
                      <div className="text-3xl font-bold text-[#0B70B8]">$99.99</div>
                      <button className="bg-[#0B70B8] text-white px-8 py-3 rounded font-semibold hover:bg-[#095a94] transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  {/* Product Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="space-y-2">
                        <div className="bg-[#F5F5F5] aspect-square rounded-lg flex items-center justify-center">
                          <div className="w-8 h-8 bg-[#D1D1D1] rounded"></div>
                        </div>
                        <div className="text-sm font-semibold text-[#333333]">Product {i}</div>
                        <div className="text-sm text-[#0B70B8] font-bold">$49.99</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0B70B8] text-white px-8 py-3 rounded font-semibold hover:bg-[#095a94] transition-colors">
              Publish to My Shopify
            </button>
            <button className="border-2 border-[#EE4D23] text-[#EE4D23] px-8 py-3 rounded font-semibold hover:bg-[#EE4D23] hover:text-white transition-colors">
              Request Tweaks
            </button>
          </div>
        </div>
      </section>

      {/* Features Snapshot */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0B70B8] rounded-lg mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">One-Click Go-Live</h3>
              <p className="text-sm text-[#7A7A7A]">Launch your store instantly with zero technical setup required.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0B70B8] rounded-lg mb-4">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Agency-Quality Design</h3>
              <p className="text-sm text-[#7A7A7A]">Professional layouts that convert visitors into customers.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0B70B8] rounded-lg mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Hassle-Free Setup</h3>
              <p className="text-sm text-[#7A7A7A]">We handle all the technical details so you can focus on selling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4" style={{ lineHeight: '1.3' }}>
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0B70B8] rounded-full mb-6">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4" style={{ lineHeight: '1.3' }}>
                We scrape your existing site
              </h3>
              <p className="text-sm text-[#7A7A7A]" style={{ lineHeight: '1.4' }}>
                Our system analyzes your current website and extracts all your products, images, and content.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0B70B8] rounded-full mb-6">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4" style={{ lineHeight: '1.3' }}>
                We rebuild and optimize on Shopify
              </h3>
              <p className="text-sm text-[#7A7A7A]" style={{ lineHeight: '1.4' }}>
                Your content is transformed into a conversion-optimized Shopify store with modern design.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0B70B8] rounded-full mb-6">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4" style={{ lineHeight: '1.3' }}>
                You preview → click publish → you're live
              </h3>
              <p className="text-sm text-[#7A7A7A]" style={{ lineHeight: '1.4' }}>
                Review your new store, request any tweaks, then publish directly to your Shopify account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">See More Pages</h2>
            <p className="text-lg text-[#7A7A7A]">Your complete store includes all essential pages</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Product Page', desc: 'Detailed product views' },
              { title: 'Shopping Cart', desc: 'Streamlined checkout' },
              { title: 'About Page', desc: 'Your brand story' },
              { title: 'Contact', desc: 'Customer support' }
            ].map((page, i) => (
              <div key={i} className="bg-[#F5F5F5] rounded-lg p-6 aspect-square flex flex-col justify-between">
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#D1D1D1] rounded-lg"></div>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-[#333333] mb-1">{page.title}</h4>
                  <p className="text-sm text-[#7A7A7A]">{page.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Next Steps */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">What's Included</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Your Complete Store</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#0B70B8] rounded-full mt-2 mr-3"></div>
                    <span className="text-[#333333]">Professional theme customization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#0B70B8] rounded-full mt-2 mr-3"></div>
                    <span className="text-[#333333]">All products imported and optimized</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#0B70B8] rounded-full mt-2 mr-3"></div>
                    <span className="text-[#333333]">Mobile-responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#0B70B8] rounded-full mt-2 mr-3"></div>
                    <span className="text-[#333333]">SEO optimization</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Support & Service</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#0B70B8] rounded-full mt-2 mr-3"></div>
                    <span className="text-[#333333]">Free revision requests</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#0B70B8] rounded-full mt-2 mr-3"></div>
                    <span className="text-[#333333]">30-day launch guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#0B70B8] rounded-full mt-2 mr-3"></div>
                    <span className="text-[#333333]">Direct Shopify integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#0B70B8] rounded-full mt-2 mr-3"></div>
                    <span className="text-[#333333]">Technical support included</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-[#0B70B8] text-white px-8 py-3 rounded font-semibold hover:bg-[#095a94] transition-colors">
                Yes, I'm In
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Monitor className="h-6 w-6 text-[#0B70B8]" />
              <span className="ml-2 text-lg font-bold">StorePreview</span>
            </div>
            
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-[#D1D1D1] hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-[#D1D1D1] hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-[#D1D1D1] hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="text-[#D1D1D1]">
              Need help? <a href="mailto:support@storepreview.com" className="text-[#0B70B8] hover:underline">support@storepreview.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;