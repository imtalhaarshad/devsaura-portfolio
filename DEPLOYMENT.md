# Deployment Guide - DevsAura Portfolio

Complete step-by-step guide to deploy your DevsAura portfolio website to GitHub Pages and other hosting platforms.

## Table of Contents
1. [GitHub Pages (Recommended)](#github-pages)
2. [Vercel](#vercel)
3. [Netlify](#netlify)
4. [Custom Domain](#custom-domain)
5. [SEO & Analytics](#seo--analytics)

## GitHub Pages

### Prerequisites
- GitHub account
- Git installed on your machine
- Your portfolio files ready

### Step-by-Step Deployment

#### 1. Create Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Repository name: `devsaura-portfolio`
4. Description: "Professional portfolio website for DevsAura"
5. Select **Public**
6. Click **Create repository**

#### 2. Initialize Git & Push Code

```bash
# Navigate to your project directory
cd devsaura-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: DevsAura portfolio website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/devsaura-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** section
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**

#### 4. Wait for Deployment

- GitHub will build and deploy your site
- It may take 1-2 minutes
- Check the **Deployments** section for status

#### 5. Access Your Site

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/devsaura-portfolio/
```

### Updating Your Site

Every time you push changes to the `main` branch, GitHub Pages will automatically rebuild and deploy:

```bash
# Make your changes
# ... edit files ...

# Stage changes
git add .

# Commit
git commit -m "Update portfolio with new project"

# Push to GitHub
git push origin main
```

---

## Vercel

### Advantages
- Faster deployments
- Built-in analytics
- Environment variables support
- Automatic HTTPS

### Step-by-Step

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** and choose GitHub
3. Authorize Vercel
4. Click **Import Project**
5. Paste your GitHub repo URL or connect GitHub
6. Select the repository
7. Click **Import**
8. Configure (default settings are fine)
9. Click **Deploy**

Your site will be live at a Vercel URL instantly.

### Connect Custom Domain to Vercel
1. Go to project Settings
2. Click **Domains**
3. Add your domain
4. Follow DNS configuration instructions

---

## Netlify

### Advantages
- Drag & drop deployment
- Forms support
- Built-in analytics
- Redirects support

### Step-by-Step

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click **New site from Git**
4. Select GitHub
5. Choose your repository
6. Configure build settings:
   - Leave build command empty
   - Publish directory: `.` (root)
7. Click **Deploy site**

Your site will be live in seconds!

---

## Custom Domain

### Using GitHub Pages with Custom Domain

1. Purchase a domain (GoDaddy, Namecheap, etc.)
2. In your repository:
   - Settings → Pages
   - Under "Custom domain", enter your domain
   - Click Save
3. GitHub will create a `CNAME` file automatically

### DNS Configuration

**For A Record:**
```
Host: @
Type: A
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**For CNAME:**
```
Host: www
Type: CNAME
Value: YOUR_USERNAME.github.io
```

### Using Vercel with Custom Domain

1. In Vercel project Settings
2. Go to Domains
3. Add your domain
4. Update DNS records as shown
5. Verify domain ownership

---

## SEO & Analytics

### Add Google Analytics

1. Create Google Analytics account
2. Get your Tracking ID
3. Add this to all HTML files (before `</head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

### Sitemap

Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/services.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/portfolio.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/contact.html</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

### robots.txt

Create `robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### Meta Tags

Add to all HTML files (update accordingly):

```html
<!-- Basic Meta Tags -->
<meta name="description" content="Professional web development & AI automation agency based in Lahore, Pakistan.">
<meta name="keywords" content="web development, AI automation, voice agents, microsoft 365">
<meta name="author" content="DevsAura">

<!-- Open Graph (Social Media) -->
<meta property="og:title" content="DevsAura - Web Development & AI Automation">
<meta property="og:description" content="Professional agency building web solutions and AI automation.">
<meta property="og:image" content="https://yourdomain.com/og-image.png">
<meta property="og:url" content="https://yourdomain.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="DevsAura">
<meta name="twitter:description" content="Web Development & AI Automation Agency">
```

---

## Troubleshooting

### Site Not Appearing

**GitHub Pages:**
- Wait 2-3 minutes after push
- Check the Deployments tab for errors
- Ensure `main` branch is selected in Settings > Pages

**Vercel/Netlify:**
- Check build logs for errors
- Verify all files are committed and pushed
- Check project settings

### 404 Errors on Page Navigation

Make sure all file paths are correct:
```html
<!-- Correct -->
<a href="services.html">Services</a>
<a href="portfolio.html">Portfolio</a>

<!-- Incorrect (avoid) -->
<a href="/services.html">Services</a>
<a href="./portfolio.html">Portfolio</a>
```

### Form Not Working

The current form logs to console. To enable email:
1. Implement FormSpree integration, OR
2. Set up a backend service, OR
3. Use a service like Typeform

---

## Performance Optimization

### Image Optimization
```bash
# Using ImageOptim or similar tools
# Compress all images before uploading
```

### Enable Caching
Already handled by GitHub Pages/Vercel/Netlify.

### Minify CSS/JS (Optional)
1. Use online minifier for small changes
2. Or set up build process with Node.js

---

## Monitoring & Maintenance

### Check Performance
- GitHub Pages: Use built-in Analytics
- Vercel: Dashboard shows analytics
- Netlify: Analytics tab in dashboard

### Update Content
1. Make changes locally
2. Commit with clear messages
3. Push to main branch
4. Changes live within minutes

### Regular Backups
```bash
# Clone backup locally
git clone YOUR_REPO backup-folder
```

---

## Security Checklist

- ✅ HTTPS enabled (automatic on all platforms)
- ✅ No sensitive data in code
- ✅ Regular dependency updates
- ✅ Contact form validation
- ✅ Spam protection (add reCAPTCHA if needed)

---

## Next Steps

1. **Deploy** to GitHub Pages following the steps above
2. **Test** all pages and links
3. **Add Google Analytics** for tracking
4. **Set up custom domain** when ready
5. **Monitor performance** regularly
6. **Update content** as needed

---

**Questions?** Refer to the [README.md](./README.md) or check official documentation for your chosen platform.

**Happy deploying! 🚀**
