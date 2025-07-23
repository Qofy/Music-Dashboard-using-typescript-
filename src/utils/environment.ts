export const getEnvironmentInfo = () => {
  const hostname = window.location.hostname;
  const port = window.location.port;
  const protocol = window.location.protocol;
  
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  const isDevelopment = import.meta.env.DEV;
  const isProduction = import.meta.env.PROD;
  
  return {
    hostname,
    port,
    protocol,
    fullDomain: port ? `${hostname}:${port}` : hostname,
    isLocalhost,
    isDevelopment,
    isProduction,
    currentUrl: window.location.origin
  };
};

export const getFirebaseAuthDomainHelp = () => {
  const env = getEnvironmentInfo();
  
  return {
    currentDomain: env.fullDomain,
    suggectedDomains: [
      'localhost',
      '127.0.0.1',
      'localhost:3000',
      'localhost:5173',
      ...(env.hostname !== 'localhost' && env.hostname !== '127.0.0.1' ? [env.fullDomain] : [])
    ],
    instructions: `
To fix the domain authorization error:

1. Go to Firebase Console: https://console.firebase.google.com/
2. Select project: disney-cone
3. Navigate to Authentication > Settings
4. Add these domains to "Authorized domains":
   ${[...new Set(['localhost', '127.0.0.1', env.fullDomain])].join('\n   ')}

Current domain: ${env.fullDomain}
    `.trim()
  };
};
