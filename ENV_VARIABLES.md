# Frontend Environment Variables - Quick Reference

## For Vercel/Netlify/Railway Deployment

Copy these environment variables to your deployment platform:

---

## ✅ REQUIRED

### VITE_API_URL
**Your Railway API GraphQL endpoint**

```bash
VITE_API_URL=https://trinitee-api-production.up.railway.app/graphql
```

**How to get it:**
1. Go to Railway Dashboard
2. Click your API service
3. Go to Settings → Domains
4. Copy the generated domain
5. Add `/graphql` at the end

**Example values:**
```bash
# Production
VITE_API_URL=https://trinitee-api-production.up.railway.app/graphql

# Development (local)
VITE_API_URL=http://localhost:4000/graphql
```

---

## ⬜ OPTIONAL (For Contact Form)

### EmailJS Configuration

Only needed if you're using the contact form feature.

```bash
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_xyz789abc123
```

**Get these from:**
1. Sign up at https://www.emailjs.com
2. Dashboard → Email Services → Create Service → Copy **Service ID**
3. Dashboard → Email Templates → Create Template → Copy **Template ID**
4. Dashboard → Account → API Keys → Copy **Public Key**

---

## 📋 Copy-Paste Template for Deployment

```bash
# === REQUIRED ===
VITE_API_URL=https://your-railway-api.railway.app/graphql

# === OPTIONAL (Contact Form) ===
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

---

## 🎯 Platform-Specific Instructions

### Vercel:
1. Project Settings → Environment Variables
2. Add each variable
3. Apply to: **Production, Preview, Development**
4. Click "Save"
5. Redeploy if already deployed

### Netlify:
1. Site Settings → Build & Deploy → Environment
2. Click "Add variable"
3. Add each variable
4. Click "Save"
5. Trigger redeploy

### Railway:
1. Project → Service → Variables
2. Click "New Variable"
3. Add each variable
4. Deploy

---

## ⚠️ Important Notes

1. **VITE_ Prefix Required**: All Vite environment variables MUST start with `VITE_`
2. **Rebuild Required**: After changing env vars, you must redeploy/rebuild
3. **Public Variables**: These are embedded in the build and visible in browser
4. **No Secrets**: Don't put sensitive keys here (they're public in the frontend bundle)

---

## 🔍 How to Verify

### Check if variables are loaded:
```javascript
// In browser console:
console.log(import.meta.env.VITE_API_URL)
```

Should show your Railway API URL, not `undefined`.

---

## 🔄 After Deployment

Once your frontend is deployed, update the API CORS settings:

### Railway API → Variables:
```bash
CORS_ORIGIN=https://your-vercel-app.vercel.app
```

Or multiple origins:
```bash
CORS_ORIGIN=https://your-vercel-app.vercel.app,http://localhost:5173
```

---

## ✅ Quick Checklist

- [ ] Got Railway API URL from Railway dashboard
- [ ] Added `VITE_API_URL` to deployment platform
- [ ] (Optional) Set up EmailJS and added variables
- [ ] Deployed frontend
- [ ] Updated API `CORS_ORIGIN` with frontend URL
- [ ] Tested site - no CORS errors
- [ ] GraphQL queries work
- [ ] Contact form works (if applicable)

---

## 🆘 Troubleshooting

**"Cannot connect to API"**
→ Check `VITE_API_URL` is correct and includes `/graphql`

**"CORS error"**
→ Update Railway API `CORS_ORIGIN` with your Vercel URL

**"Variable is undefined"**
→ Make sure variable name starts with `VITE_`
→ Redeploy after adding variables

**"Build fails"**
→ Variables with empty values are okay (uses defaults)
→ Check for TypeScript errors: `npm run type-check`

---

## 📊 Variables Summary

| Variable | Required | Used For | Get From |
|----------|----------|----------|----------|
| `VITE_API_URL` | ✅ Yes | Connect to backend API | Railway API domain |
| `VITE_EMAILJS_SERVICE_ID` | ⬜ No | Contact form emails | EmailJS dashboard |
| `VITE_EMAILJS_TEMPLATE_ID` | ⬜ No | Contact form emails | EmailJS dashboard |
| `VITE_EMAILJS_PUBLIC_KEY` | ⬜ No | Contact form emails | EmailJS dashboard |

---

**Next Step:** Add `VITE_API_URL` to your deployment platform and deploy!
