import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../scss/component/mobilemenutoggle.scss';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuToggle({ isOpen, onToggle }: MobileMenuToggleProps) {
  return (
    <button 
      className="mobile-menu-toggle"
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  
  return { isOpen, toggle, close };
}
