import { useState } from 'react';
import { signInWithGoogle } from '../../auth/firebase';
import { X, LogIn, Music, AlertCircle, Copy } from 'lucide-react';
import '../../scss/component/authmodal.scss';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDomainHelp, setShowDomainHelp] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const user = await signInWithGoogle();
      if (user) {
        onClose();
      } else {
        setError('Failed to sign in. Please try again.');
      }
    } catch (err: unknown) {
      console.error('Sign-in error:', err);
      const errorMessage =
        typeof err === 'object' && err !== null && 'message' in err
          ? (err as { message?: string }).message || 'An error occurred during sign in.'
          : 'An error occurred during sign in.';
      setError(errorMessage);
      
      // Show domain help for unauthorized domain errors
      if (errorMessage.includes('domain') || errorMessage.includes('unauthorized')) {
        setShowDomainHelp(true);
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <div className="auth-modal__header">
          <div className="auth-modal__title">
            <Music className="auth-modal__icon" />
            <h2>Welcome to AfricanMusic</h2>
          </div>
          <button 
            className="auth-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="auth-modal__content">
          <p className="auth-modal__description">
            Sign in to access your personalized music experience, create playlists, and discover new African music.
          </p>

          {error && (
            <div className="auth-modal__error">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <AlertCircle size={16} />
                <strong>Authentication Error</strong>
              </div>
              {error}
              {showDomainHelp && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem', fontWeight: '600' }}>🔧 Quick Fix:</div>
                  <div style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>
                    1. Open <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#4285f4' }}>Firebase Console</a><br />
                    2. Go to Authentication → Settings<br />
                    3. Add <strong style={{ fontFamily: 'monospace', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>
                      {window.location.hostname}
                    </strong> to Authorized domains<br />
                    4. Try signing in again
                  </div>
                  <button 
                    onClick={() => navigator.clipboard?.writeText(window.location.hostname)}
                    style={{ 
                      marginTop: '0.5rem', 
                      padding: '0.3rem 0.6rem', 
                      background: 'rgba(255,255,255,0.1)', 
                      border: 'none', 
                      borderRadius: '4px', 
                      color: 'white', 
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Copy size={12} />
                    Copy Domain
                  </button>
                </div>
              )}
            </div>
          )}

          <button
            className="auth-modal__google-btn"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <LogIn size={20} />
            {loading ? 'Signing in...' : 'Continue with Google'}
          </button>

          <div className="auth-modal__footer">
            <p>By signing in, you agree to our Terms of Service and Privacy Policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
