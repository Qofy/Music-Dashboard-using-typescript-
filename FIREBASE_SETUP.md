# 🔥 Firebase Setup Guide

## Fix "auth/unauthorized-domain" Error

This error occurs because your current domain is not authorized in Firebase Console. Follow these steps to fix it:

### 📋 Step 1: Go to Firebase Console

1. Open [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **disney-cone**

### 🔐 Step 2: Configure Authentication

1. In the left sidebar, click **Authentication**
2. Click on the **Settings** tab (gear icon)
3. Scroll down to **Authorized domains**

### 🌐 Step 3: Add Your Domains

Add these domains to the authorized list:

#### For Development:
```
localhost
127.0.0.1
```

#### For Production (when deployed):
```
your-domain.com
www.your-domain.com
your-vercel-app.vercel.app
your-netlify-app.netlify.app
```

### ✅ Step 4: Enable Google Sign-In

1. Go to **Authentication** > **Sign-in method**
2. Click on **Google**
3. Toggle **Enable**
4. Add your project's support email
5. Click **Save**

### 🖥️ Step 5: Test Locally

After adding the domains, test your authentication:

```bash
npm run dev
```

Visit `http://localhost:5173` and try signing in.

## 🛠️ Alternative Fix: Use Firebase Emulator (Development Only)

If you want to test without configuring domains:

### Install Firebase CLI:
```bash
npm install -g firebase-tools
```

### Initialize Firebase in your project:
```bash
firebase init auth
```

### Start the emulator:
```bash
firebase emulators:start --only auth
```

### Update your development config:
```typescript
// In src/auth/firebase.ts (for development only)
if (import.meta.env.DEV) {
  connectAuthEmulator(auth, "http://localhost:9099");
}
```

## 🚀 Common Domain Patterns

### Localhost variations:
- `localhost`
- `localhost:3000`
- `localhost:5173` (Vite default)
- `127.0.0.1`

### Deployment platforms:
- **Vercel**: `your-app.vercel.app`
- **Netlify**: `your-app.netlify.app`
- **Firebase Hosting**: `your-project.web.app`
- **Custom Domain**: `yourdomain.com`

## ⚠️ Important Notes

1. **No Protocol**: Don't include `http://` or `https://`
2. **Port Numbers**: Include port if not standard (80/443)
3. **Subdomains**: Add each subdomain separately
4. **Wildcards**: Not supported, add each domain explicitly

## 🐛 Troubleshooting

### Error persists after adding domain?
- Wait 5-10 minutes for changes to propagate
- Clear browser cache and cookies
- Try incognito/private browsing mode

### Still getting errors?
- Check browser console for detailed error messages
- Verify your Firebase project ID matches the config
- Ensure Google Sign-In is enabled in Firebase Console

## 📞 Need Help?

If you continue having issues:
1. Check the browser console for detailed error messages
2. Verify your Firebase project configuration
3. Make sure you're using the correct Firebase project

---

**Current Project Config:**
- Project ID: `disney-cone`
- Auth Domain: `disney-cone.firebaseapp.com`
