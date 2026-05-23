# Customization Guide - DevsAura Portfolio

Quick reference guide for customizing your portfolio website.

## Content Updates

### Contact Information
Update in these files:
- `index.html` - Footer
- `services.html` - Footer
- `portfolio.html` - Footer
- `contact.html` - Contact info cards & footer

**Lines to update:**
```html
<!-- Email -->
<a href="mailto:info@devsaura.com">info@devsaura.com</a>

<!-- Phone -->
<p>+92 (XXX) XXXX-XXXX</p>

<!-- Location -->
<p>Lahore, Pakistan</p>
```

### Social Media Links
In footer and contact page:
```html
<a href="https://linkedin.com/company/devsaura">LinkedIn</a>
<a href="https://twitter.com/devsaura">Twitter</a>
<a href="https://github.com/devsaura">GitHub</a>
```

### Project Portfolio
Edit `portfolio.html` section `<!-- Project Cards -->`:

**Update project details:**
- Project title
- Description
- Technologies used
- Project metrics/stats
- Project links

### Service Descriptions
Edit `services.html` `<!-- Services Grid -->` section.

Each service card has:
- Icon (emoji)
- Title
- Description paragraph
- Feature tags
- Call-to-action button

## Design Customization

### Colors

Edit `:root` variables in `style.css`:

```css
:root {
    /* Primary gradient (Purple) */
    --primary: #8B5CF6;

    /* Secondary accent (Cyan) */
    --secondary: #06B6D4;

    /* Light accent */
    --accent-light: #A78BFA;

    /* Dark accent */
    --accent-dark: #6366F1;

    /* Backgrounds */
    --background: #0F172A;      /* Very dark blue */
    --surface: #1E293B;         /* Dark blue */
    --surface-light: #334155;   /* Medium blue */

    /* Text colors */
    --text-primary: #F1F5F9;    /* Nearly white */
    --text-secondary: #CBD5E1;  /* Light gray */
    --text-tertiary: #94A3B8;   /* Medium gray */
}
```

### Example Color Schemes

**Modern Blue & Orange:**
```css
--primary: #0066FF;
--secondary: #FF6600;
--accent-light: #99CCFF;
--accent-dark: #FF8833;
```

**Tech Purple & Green:**
```css
--primary: #7C3AED;
--secondary: #10B981;
--accent-light: #A78BFA;
--accent-dark: #059669;
```

**Dark Minimal:**
```css
--primary: #FFFFFF;
--secondary: #888888;
--accent-light: #CCCCCC;
--accent-dark: #444444;
```

### Fonts

Currently uses system fonts. To add custom Google Fonts:

1. Add to `<head>` in all HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap" rel="stylesheet">
```

2. Update in `style.css`:
```css
body {
    font-family: 'YOUR_FONT', system-ui, sans-serif;
}
```

### Spacing

Adjust spacing variables:
```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
```

### Animations

Adjust animation speeds:
```css
--transition-fast: 0.15s ease-in-out;
--transition-normal: 0.3s ease-in-out;
--transition-smooth: 0.5s ease-in-out;
```

## Layout Customization

### Hero Section Height

In `style.css`, find `.hero`:
```css
.hero {
    min-height: 100vh;  /* Change to desired height */
}
```

### Container Width

Adjust max-width:
```css
.container {
    max-width: 1200px;  /* Increase for wider layout */
}
```

### Grid Columns

Change number of columns in grids:
```css
.features-grid {
    grid-template-columns: repeat(3, 1fr);  /* 3 columns instead of auto-fit */
}
```

## Adding New Pages

1. Create new HTML file (e.g., `blog.html`)
2. Copy navbar and footer from existing page
3. Copy `<script src="main.js"></script>` before closing `</body>`
4. Add navigation link in navbar:
```html
<li><a href="blog.html" class="nav-link">Blog</a></li>
```

## Adding New Sections

Template for new section:
```html
<section class="your-section-name">
    <div class="container">
        <h2>Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

Add CSS:
```css
.your-section-name {
    padding: var(--spacing-2xl) var(--spacing-lg);
}
```

## Form Integration

### Option 1: Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create form and get form ID
3. Update form action in `contact.html`:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Get your service ID and template ID
3. Add to `main.js`:
```javascript
emailjs.init("YOUR_PUBLIC_KEY");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
        .then(() => {
            // Success handling
        });
});
```

### Option 3: Custom Backend
Set form action to your backend:
```html
<form id="contactForm" action="https://your-server.com/submit-form" method="POST">
```

## SEO Optimization

### Meta Descriptions
Update `<meta name="description">` in each HTML file:
```html
<meta name="description" content="Your unique description for this page">
```

### Page Titles
Update `<title>` in each HTML file:
```html
<title>Unique Title - DevsAura</title>
```

### Structured Data
Add JSON-LD for better SEO:
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevsAura",
    "url": "https://yourdomain.com",
    "logo": "https://yourdomain.com/logo.png",
    "description": "Web Development & AI Automation Agency"
}
</script>
```

## Mobile Optimization

### Hamburger Menu Styling
Edit in `style.css`:
```css
.hamburger {
    /* Adjust for different screens */
}

@media (max-width: 768px) {
    .hamburger {
        display: flex;  /* Show on mobile */
    }
}
```

### Touch Targets
Ensure buttons are at least 44x44px:
```css
.btn {
    padding: var(--spacing-sm) var(--spacing-lg);  /* 16px × 32px minimum */
}
```

## Performance Tips

### Image Optimization
- Compress before uploading
- Use WebP format when possible
- Optimize file sizes to < 100KB

### CSS Optimization
- Remove unused styles
- Minify for production

### JavaScript Optimization
- Minify JS code
- Remove console.log in production
- Use async/defer for external scripts

## Browser Testing

Test on:
- Chrome (desktop & mobile)
- Firefox (desktop & mobile)
- Safari (desktop & mobile)
- Edge
- Mobile browsers

## Accessibility Improvements

### Add Alt Text for Images
```html
<img src="image.png" alt="Descriptive text">
```

### Improve Color Contrast
Ensure text meets WCAG AA standards (4.5:1 ratio for normal text)

### Keyboard Navigation
Test Tab key navigation through all interactive elements

## Analytics Integration

### Google Analytics 4
Add this to `<head>` in all pages:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Backup Strategy

```bash
# Create local backup
git clone YOUR_REPO backup-$(date +%Y%m%d)

# Or use GitHub's download feature
```

## Version Control Best Practices

```bash
# Always create descriptive commits
git commit -m "Update portfolio projects with new case study"

# Use branches for major changes
git checkout -b feature/add-testimonials
git push origin feature/add-testimonials
# Then create Pull Request on GitHub
```

---

**Ready to customize?** Start with color changes, then move to content updates!
