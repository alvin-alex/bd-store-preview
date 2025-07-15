import React from 'react';
import { skipToContent } from '../hooks/useFocusManager';

export const SkipLinks: React.FC = () => {
  const handleSkipToContent = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    skipToContent(targetId);
  };

  return (
    <div className="skip-links">
      <a 
        href="#main-content"
        onClick={(e) => handleSkipToContent(e, 'main-content')}
        className="skip-link"
      >
        Skip to main content
      </a>
      <a 
        href="#preview-section"
        onClick={(e) => handleSkipToContent(e, 'preview-section')}
        className="skip-link"
      >
        Skip to store preview
      </a>
      <a 
        href="#pages-section"
        onClick={(e) => handleSkipToContent(e, 'pages-section')}
        className="skip-link"
      >
        Skip to pages section
      </a>
      <a 
        href="#footer"
        onClick={(e) => handleSkipToContent(e, 'footer')}
        className="skip-link"
      >
        Skip to footer
      </a>
    </div>
  );
};