import { useState } from 'react';
import { auth } from '../../auth/firebase';

export const FirebaseDebug = () => {
  const [debugInfo, setDebugInfo] = useState<any>(null);

  const checkFirebaseConfig = () => {
    const config = {
      currentDomain: window.location.hostname,
      currentOrigin: window.location.origin,
      firebaseConfig: {
        apiKey: auth.app.options.apiKey ? '✅ Present' : '❌ Missing',
        authDomain: auth.app.options.authDomain,
        projectId: auth.app.options.projectId,
      },
      authState: {
        currentUser: auth.currentUser ? '✅ Signed in' : '❌ Not signed in',
        userId: auth.currentUser?.uid || 'None'
      }
    };
    
    setDebugInfo(config);
    console.log('Firebase Debug Info:', config);
  };

  if (!import.meta.env.DEV) {
    return null; // Only show in development
  }

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      left: '10px', 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '1rem', 
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <button 
        onClick={checkFirebaseConfig}
        style={{ 
          background: '#4285f4', 
          color: 'white', 
          border: 'none', 
          padding: '0.5rem', 
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '0.5rem'
        }}
      >
        Check Firebase Config
      </button>
      
      {debugInfo && (
        <div>
          <div><strong>Domain:</strong> {debugInfo.currentDomain}</div>
          <div><strong>Origin:</strong> {debugInfo.currentOrigin}</div>
          <div><strong>Project:</strong> {debugInfo.firebaseConfig.projectId}</div>
          <div><strong>Auth Domain:</strong> {debugInfo.firebaseConfig.authDomain}</div>
          <div><strong>API Key:</strong> {debugInfo.firebaseConfig.apiKey}</div>
          <div><strong>User:</strong> {debugInfo.authState.currentUser}</div>
        </div>
      )}
    </div>
  );
};
