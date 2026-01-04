# Portfolio1

Starter static portfolio website for Portfolio1(skAbdul712).

## What’s included
- index.html — single-page layout (About / Projects / Skills / Contact)
- styles.css — responsive, modern styles
- script.js — loads projects.json and handles small behavior
- projects.json — edit to add or update projects
- assets/ — put images, resume PDF, icons here

## Quick start
1. Clone or create a repo and add these files.
2. Replace placeholder text (Your Name, links, email) and add images in `assets/`.
3. Edit `projects.json` to list your projects.
4. Test locally by opening `index.html` in a browser or run a basic static server:
   - Python 3: `python -m http.server 3000`
   - Node (install http-server): `npx http-server -c-1 -p 3000`
5. Deploy:
   - GitHub Pages: push to `main` (or `gh-pages`) and enable Pages in repo settings
   - Netlify / Vercel: drag & drop or connect the repo

## Customization tips
- Update the contact email in `index.html` and `script.js` if needed (currently Rabbanishaik882@gmail.com).
- Add your resume to `assets/YourName_Resume.pdf` and update the link in `index.html`.

## Deployment to GitHub Pages
1. Initialize git and push:
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/skAbdul712/portfolio1.git
git push -u origin main

2. In GitHub, go to Settings → Pages, choose branch `main` and `/ (root)`, save. Your site will be live at `https://skAbdul712.github.io/portfolio1/` in a few minutes.

If you want, I can:
- Customize the projects list if you provide project details.
- Create a simple publish workflow to deploy automatically.
