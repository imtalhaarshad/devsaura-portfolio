# DevsAura - Professional Portfolio Website

A modern, professional portfolio website for DevsAura, a freelance web development & AI automation agency based in Lahore, Pakistan.

## Features

✨ **Modern Design**
- Dark theme with glassmorphism effects
- Purple and cyan gradient accents
- Smooth animations and hover effects
- Fully responsive and mobile-friendly

🎨 **Design Highlights**
- Animated hero section with gradient text
- Glassmorphism UI components
- Smooth scroll behavior
- Interactive form with validation
- Gradient blob background animations

📱 **Responsive Layout**
- Mobile-first design
- Hamburger menu for mobile devices
- Flexible grid layouts
- Optimized for all screen sizes

⚡ **Performance**
- Pure HTML, CSS, and JavaScript (no frameworks)
- Lightweight and fast loading
- Smooth animations and transitions
- Intersection Observer for lazy animations

## Pages

1. **Home** (`index.html`)
   - Hero section with animated tagline
   - Features showcase
   - Call-to-action buttons

2. **Services** (`services.html`)
   - Web Development
   - AI Automation
   - Voice Agents
   - Microsoft 365 Solutions
   - Process timeline

3. **Portfolio** (`portfolio.html`)
   - 4 sample projects with details
   - Project statistics and tags
   - Case study section

4. **Contact** (`contact.html`)
   - Contact form with validation
   - Contact information
   - FAQ section
   - Social media links

## File Structure

```
devsaura-portfolio/
├── index.html           # Home page
├── services.html        # Services page
├── portfolio.html       # Portfolio page
├── contact.html         # Contact page
├── style.css            # All styles
├── main.js              # JavaScript functionality
├── README.md            # This file
└── .gitignore          # Git ignore file
```

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactivity and form handling

## Setup & Deployment

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/devsaura-portfolio.git
cd devsaura-portfolio
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using Live Server extension in VS Code
```

### Deploy to GitHub Pages

1. Push your code to GitHub:
```bash
git remote add origin https://github.com/yourusername/devsaura-portfolio.git
git branch -M main
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to Settings > Pages
   - Select "main" branch as source
   - Save

3. Your site will be live at: `https://yourusername.github.io/devsaura-portfolio/`

## Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary: #8B5CF6;        /* Purple */
    --secondary: #06B6D4;      /* Cyan */
    --background: #0F172A;     /* Dark background */
    /* ... other colors ... */
}
```

### Contact Form
The contact form currently logs data to the browser console. To enable email submissions:

**Option 1: Formspree**
1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in `contact.html`

**Option 2: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add the service key to `main.js`
3. Send emails directly from the browser

**Option 3: Custom Backend**
- Set up your own server to handle form submissions
- Update the form submission handler in `main.js`

### Replace Placeholder Content
- Update contact information in all pages
- Replace social media links
- Update project descriptions and images
- Modify service descriptions
- Add real case studies and metrics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Images**: Optimize images before adding them
2. **Caching**: GitHub Pages uses browser caching by default
3. **Analytics**: Add Google Analytics or similar for tracking
4. **SEO**: Update meta tags and descriptions for each page

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Mobile-friendly touch targets

## Future Enhancements

- [ ] Blog section
- [ ] Client testimonials
- [ ] Team member profiles
- [ ] Animated charts for statistics
- [ ] Dark/light mode toggle
- [ ] Multiple language support
- [ ] CMS integration
- [ ] Email notifications for contact form

## License

This project is open source and available under the MIT License.

## Contact

For inquiries about DevsAura services:
- Email: info@devsaura.com
- Location: Lahore, Pakistan

## Credits

Built with modern web technologies and best practices for responsive, accessible, and performant web design.

---

**Last Updated**: 2024
**Version**: 1.0.0
