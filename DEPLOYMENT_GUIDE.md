# Trinitee Website - Frontend Deployment Guide

## Deployment Platform Options

### Option 1: Vercel (Recommended)
Best for React/Vite apps with zero configuration.

### Option 2: Netlify
Alternative with similar features.

### Option 3: Railway
If you want everything in one place with your API.

---

## 🚀 Vercel Deployment (Recommended)

### Step 1: Install Vercel CLI (Optional)
```bash
npm i -g vercel
```

### Step 2: Deploy via GitHub (Easiest)

1. **Go to https://vercel.com**
2. **Sign in with GitHub**
3. **Click "Add New Project"**
4. **Import your repository**: `Bonginkosi727/Trinitee-website`
5. **Configure Project:**
   - Framework Preset: **Vite**
   - Root Directory: `Trinitee-website`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Add Environment Variables** (see below)
7. **Click "Deploy"**

### Step 3: Set Environment Variables in Vercel

Go to Project Settings → Environment Variables and add:

#### REQUIRED:
```bash
VITE_API_URL=https://your-railway-api.railway.app/graphql
```

#### OPTIONAL (for EmailJS contact form):
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 4: Update API CORS

After deployment, update your Railway API `CORS_ORIGIN`:
```bash
CORS_ORIGIN=https://your-vercel-app.vercel.app
```

---

## 🎯 Environment Variables Explained

### 1. VITE_API_URL (REQUIRED)
**Your Railway API GraphQL endpoint**

Format:
```bash
VITE_API_URL=https://trinitee-api-production.up.railway.app/graphql
```

How to find it:
1. Go to Railway dashboard
2. Click on your API service
3. Go to "Settings" → "Domains"
4. Copy the domain (e.g., `trinitee-api-production.up.railway.app`)
5. Add `/graphql` at the end

---

### 2. EmailJS Variables (OPTIONAL)

These are only needed if you're using the contact form with EmailJS.

#### Get EmailJS Credentials:
1. **Sign up at https://www.emailjs.com**
2. **Create Email Service:**
   - Dashboard → Email Services → Add New Service
   - Select Gmail/Outlook/etc.
   - Copy the **Service ID**

3. **Create Email Template:**
   - Dashboard → Email Templates → Create New Template
   - Copy the **Template ID**

4. **Get Public Key:**
   - Dashboard → Account → API Keys
   - Copy the **Public Key**

#### Add to Vercel:
```bash
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_xyz789abc123
```

---

## 📋 Complete Setup Checklist

### Pre-Deployment:
- [ ] API is deployed and running on Railway
- [ ] API GraphQL endpoint is accessible
- [ ] You have the API URL (e.g., `https://xxx.railway.app/graphql`)

### Vercel Setup:
- [ ] Create Vercel account (with GitHub)
- [ ] Import repository
- [ ] Set Framework to **Vite**
- [ ] Set Root Directory to **Trinitee-website**
- [ ] Add `VITE_API_URL` environment variable
- [ ] Add EmailJS variables (if using contact form)
- [ ] Deploy

### Post-Deployment:
- [ ] Get Vercel deployment URL
- [ ] Update Railway API `CORS_ORIGIN` with Vercel URL
- [ ] Test frontend at your Vercel URL
- [ ] Verify API connection works
- [ ] Test contact form (if applicable)

---

## 🔧 Netlify Deployment (Alternative)

### Deploy via GitHub:

1. **Go to https://netlify.com**
2. **Sign in with GitHub**
3. **Click "Add new site" → "Import an existing project"**
4. **Select your repository**
5. **Configure:**
   - Base directory: `Trinitee-website`
   - Build command: `npm run build`
   - Publish directory: `Trinitee-website/dist`
6. **Add Environment Variables:**
   - `VITE_API_URL`
   - EmailJS variables (optional)
7. **Click "Deploy"**

### Netlify CLI:
```bash
npm install -g netlify-cli
cd Trinitee-website
netlify deploy --prod
```

---

## 🚂 Railway Deployment (Alternative)

If you want to host frontend on Railway too:

### Create `railway.json`:
```json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm run preview",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

### Deploy:
1. Railway Dashboard → New Service
2. Connect GitHub repo
3. Select `Trinitee-website` folder
4. Add environment variables
5. Deploy

**Note:** Vercel is better optimized for static sites.

---

## 🔍 Verification Steps

### 1. Check Build Locally
```bash
cd Trinitee-website
npm install
npm run build
npm run preview
```

Should build without errors and preview at `http://localhost:4173`

### 2. Check Deployment
Visit your Vercel URL (e.g., `https://trinitee-website.vercel.app`)

### 3. Test API Connection
- Open browser DevTools → Network tab
- Navigate to Business Assessment page
- Should see GraphQL requests to your Railway API
- Should NOT see CORS errors

### 4. Test Contact Form
- Fill out contact form
- Submit
- Check if email is received (if using EmailJS)

---

## ⚠️ Common Issues & Solutions

### Issue: Build Fails with TypeScript Errors

**Solution:**
```bash
# Fix locally first
npm run type-check
npm run build
```

Fix any TypeScript errors, commit, and push.

---

### Issue: "VITE_API_URL is not defined"

**Solution:**
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add `VITE_API_URL` with your Railway API URL
3. Redeploy

---

### Issue: CORS Error when calling API

**Solution:**
1. Go to Railway → Your API Service → Variables
2. Update `CORS_ORIGIN`:
```bash
CORS_ORIGIN=https://your-vercel-app.vercel.app
```
3. Redeploy API

---

### Issue: Contact Form Not Sending

**Solution:**
1. Verify EmailJS variables are set correctly
2. Check EmailJS dashboard for errors
3. Verify email service is connected
4. Check browser console for errors

---

### Issue: Routes Don't Work (404 on refresh)

**Solution:**
The `vercel.json` file handles this with rewrites. Make sure it's committed to git.

---

## 📊 Environment Variables Summary

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `VITE_API_URL` | ✅ Yes | `http://localhost:4000/graphql` | Railway API GraphQL endpoint |
| `VITE_EMAILJS_SERVICE_ID` | ⬜ Optional | - | EmailJS service ID for contact form |
| `VITE_EMAILJS_TEMPLATE_ID` | ⬜ Optional | - | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | ⬜ Optional | - | EmailJS public key |

---

## 🎨 Custom Domain (Optional)

### Add Custom Domain to Vercel:

1. **Vercel Dashboard → Project → Settings → Domains**
2. **Add Domain:** `trinitee.co.za` or `www.trinitee.co.za`
3. **Configure DNS:**
   - Add CNAME record in your domain registrar
   - Point to Vercel's provided value
4. **Wait for SSL** (automatic, ~5 minutes)
5. **Update Railway API CORS_ORIGIN:**
```bash
CORS_ORIGIN=https://trinitee.co.za,https://www.trinitee.co.za
```

---

## 📱 Preview Deployments

Vercel automatically creates preview deployments for every git push:
- **Production:** `main` or `master` branch → `trinitee.vercel.app`
- **Preview:** `dev` branch → `trinitee-git-dev.vercel.app`

You can have different API URLs for each:
- Production → Production API
- Preview → Staging/Dev API

---

## 🚀 Quick Deploy Commands

### Vercel CLI:
```bash
cd Trinitee-website
vercel --prod
```

### Test Build Locally:
```bash
npm run build
npm run preview
```

---

## 📞 Support

**Common Deploy Issues:**
1. TypeScript errors → Run `npm run type-check` locally
2. CORS errors → Update `CORS_ORIGIN` in Railway API
3. API not found → Check `VITE_API_URL` is correct
4. Build fails → Check Vercel build logs

**Resources:**
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- EmailJS Docs: https://www.emailjs.com/docs

---

## ✅ Success Indicators

- ✅ Vercel build completes successfully
- ✅ Site loads at Vercel URL
- ✅ No console errors
- ✅ Business Assessment page works
- ✅ Can submit contact form
- ✅ GraphQL queries reach Railway API
- ✅ No CORS errors in console

---

**Deployment Status:** Ready to deploy!
**Next Step:** Deploy to Vercel with the URL from your Railway API
