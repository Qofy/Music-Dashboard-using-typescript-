import { useState } from 'react';
import { LogOut, Settings, User } from 'lucide-react';
import { User as FirebaseUser } from 'firebase/auth';
import { useAuth } from '../auth/AuthContext';
import { signOutUser } from '../auth/firebase';
import { AuthModal } from './Auth/AuthModal';
import DefaultProfileImg from '../images/profile.jpg';
import '../scss/component/profile.scss';

export const Profile = () => {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [signOutLoading, setSignOutLoading] = useState(false);

  const handleSignOut = async () => {
    setSignOutLoading(true);
    await signOutUser();
    setSignOutLoading(false);
  };

  const handleSignIn = () => {
    setShowAuthModal(true);
  };

  if (loading) {
    return (
      <section className="profile-container">
        <div className="profile-loading">
          <div className="profile-skeleton"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="profile-container">
      {user ? (
        <AuthenticatedProfile 
          user={user} 
          onSignOut={handleSignOut}
          signOutLoading={signOutLoading}
        />
      ) : (
        <UnauthenticatedProfile onSignIn={handleSignIn} />
      )}
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </section>
  );
};

interface AuthenticatedProfileProps {
  user: FirebaseUser;
  onSignOut: () => void;
  signOutLoading: boolean;
}

const AuthenticatedProfile: React.FC<AuthenticatedProfileProps> = ({ 
  user, 
  onSignOut, 
  signOutLoading 
}) => {
  return (
    <>
      <div className="profile-info">
        <img 
          className="profile-image" 
          src={user.photoURL || DefaultProfileImg} 
          alt="Profile" 
        />
        <div className="profile-details">
          <h3 className="profile-name">{user.displayName || 'Music Lover'}</h3>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>
      
      <div className="profile-actions">
        <button className="profile-btn profile-btn--secondary">
          <Settings size={18} />
          Settings
        </button>
        <button 
          className="profile-btn profile-btn--danger"
          onClick={onSignOut}
          disabled={signOutLoading}
        >
          <LogOut size={18} />
          {signOutLoading ? 'Signing out...' : 'Sign Out'}
        </button>
      </div>
    </>
  );
};

interface UnauthenticatedProfileProps {
  onSignIn: () => void;
}

const UnauthenticatedProfile: React.FC<UnauthenticatedProfileProps> = ({ onSignIn }) => {
  return (
    <>
      <div className="profile-info">
        <div className="profile-placeholder">
          <User size={40} />
        </div>
        <div className="profile-details">
          <h3 className="profile-name">Welcome</h3>
          <p className="profile-email">Sign in to access your music</p>
        </div>
      </div>
      
      <div className="profile-actions">
        <button 
          className="profile-btn profile-btn--primary"
          onClick={onSignIn}
        >
          Sign In
        </button>
      </div>
    </>
  );
};