import React, { useEffect, useRef, ReactNode } from 'react';
import { X } from 'lucide-react';
import { useFocusManager, useFocusTrap } from '../hooks/useFocusManager';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  className = '' 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { storeFocus, restoreFocus, announceFocusChange } = useFocusManager();
  
  // Use focus trap when modal is open
  useFocusTrap(isOpen, modalRef);

  // Handle modal open/close focus management
  useEffect(() => {
    if (isOpen) {
      storeFocus();
      announceFocusChange(`${title} dialog opened`);
      
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      restoreFocus();
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, storeFocus, restoreFocus, announceFocusChange, title]);

  // Handle escape key and custom modal-escape event
  useEffect(() => {
    const handleEscape = () => {
      onClose();
    };

    if (isOpen && modalRef.current) {
      modalRef.current.addEventListener('modal-escape', handleEscape);
    }

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener('modal-escape', handleEscape);
      }
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
      aria-hidden="true"
    >
      <div
        ref={modalRef}
        className={`bg-theme-surface rounded-lg shadow-xl max-w-md w-full max-h-96 overflow-y-auto ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-theme-border">
          <h2 
            id="modal-title" 
            className="text-xl font-semibold text-theme-text font-cabinet"
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-theme-text-secondary hover:text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-surface rounded-full p-1"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div id="modal-description" className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Example usage components
export const RequestTweaksModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ 
  isOpen, 
  onClose 
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request Tweaks">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="tweaks-description" className="block text-sm font-medium text-theme-text mb-2">
            What changes would you like to make?
          </label>
          <textarea
            id="tweaks-description"
            rows={4}
            className="w-full px-3 py-2 border border-theme-border rounded-md focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent bg-theme-bg text-theme-text"
            placeholder="Describe the tweaks you'd like to see..."
            required
          />
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-theme-text-secondary hover:text-theme-text focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-surface rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-theme-primary text-white rounded hover:bg-theme-primary-hover focus:outline-none focus:ring-2 focus:ring-theme-primary focus:ring-offset-2 focus:ring-offset-theme-surface"
          >
            Submit Request
          </button>
        </div>
      </form>
    </Modal>
  );
};