# RUBE Website - Quick Deploy to GitHub Pages

## 🚀 One-Minute Setup

### 1. Push to GitHub
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

### 2. Enable GitHub Pages
- Go to repo **Settings** → **Pages**
- Select **GitHub Actions** as source
- Done! 🎉

### 3. Your site will be live at:
- `https://YOUR_USERNAME.github.io/web` (after 1-2 minutes)

---

## 🌐 Use Custom Domain (Optional)

Add your custom domain:
1. **Settings** → **Secrets and variables** → **Actions**
2. **New secret**: Name = `CUSTOM_DOMAIN`, Value = `yourdomain.com`
3. Push a commit: `git push`

Your site will deploy automatically to `https://yourdomain.com`

---

## ✅ Fully Deployed Features
- ✅ Bilingual (English/Arabic)
- ✅ All pages & products
- ✅ Mobile responsive
- ✅ Image optimization
- ✅ Search engines ready

---

## 📖 Full Guide
See `DEPLOYMENT.md` for detailed instructions and troubleshooting.

---

## 💡 Local Testing
```bash
npm run export    # Build static site
npx serve out     # Preview locally
```

---

**Need help?** Check GitHub Pages docs: https://docs.github.com/pages
