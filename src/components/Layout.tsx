import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { SkipLinks } from './SkipLinks';
import { RequestTweaksModal } from './Modal';
import { useFocusManager } from '../hooks/useFocusManager';

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

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isRequestTweaksModalOpen, setIsRequestTweaksModalOpen] = useState(false);
  const { announceFocusChange } = useFocusManager();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link 
                to="/"
                className="focus:outline-none"
              >
                <img src="/logo-10.svg" alt="BeautifullyDone Logo" className="h-12 w-12" />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
            </nav>
            <div className="flex items-center space-x-6">
              <ThemeToggle />
              {isHomePage && (
                <button 
                  className="bg-gradient-to-r from-theme-primary via-trae-cta-gradient-mid to-trae-cta-gradient-end text-white px-6 py-2.5 rounded text-sm font-semibold hover:opacity-90 transition-opacity font-manrope focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-theme-bg"
                  onClick={handlePublishClick}
                >
                  Claim Your Store
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" role="main">
        {children}
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-theme-bg text-theme-text py-32" role="contentinfo">
        <div className="max-w-7xl mx-auto px-16">
          <div className="space-y-16">
            {/* First Row */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-16 md:mb-0">
                <a 
                  href="https://beautifullydone.store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center focus:outline-none"
                >
                  <img src="/logo-10.svg" alt="BeautifullyDone Logo" className="h-24 w-24" />
                  <span className="ml-2 text-h1 font-bold font-cabinet text-white">BeautifullyDone</span>
                </a>
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
            
            {/* Second Row - Updated to remove Contact */}
            <div className="flex justify-start space-x-16">
              <Link 
                to="/terms"
                className="text-theme-text-secondary hover:text-theme-primary transition-colors font-manrope text-body focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg rounded"
              >
                Terms
              </Link>
              <Link 
                to="/privacy"
                className="text-theme-text-secondary hover:text-theme-primary transition-colors font-manrope text-body focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-bg rounded"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Modal - Only show on home page */}
      {isHomePage && (
        <RequestTweaksModal 
          isOpen={isRequestTweaksModalOpen} 
          onClose={() => setIsRequestTweaksModalOpen(false)} 
        />
      )}
    </div>
  );
};