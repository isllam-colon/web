# Deployment Guide: GitHub Pages with Custom Domain

Your website is now ready to deploy to GitHub Pages! Follow these simple steps:

## Step 1: Push Your Code to GitHub

If you haven't already, push your project to GitHub:

```bash
cd /Users/kingeslam/Downloads/web

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: RUBE website ready for deployment"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/web.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/web`
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - The workflow will auto-detect and deploy on every push

## Step 3: Set Up Custom Domain (OPTIONAL)

If you have a custom domain (e.g., `rubeegyptdemo.com`):

### Option A: Using GitHub Secrets (Recommended)

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `CUSTOM_DOMAIN`
4. Value: Enter your domain exactly as it should appear in the CNAME file
   - Example: `rubeegyptdemo.com` or `www.rubeegyptdemo.com`
5. Click **Add secret**

Then push a commit to trigger the workflow:
```bash
git add .
git commit -m "Add custom domain setup"
git push
```

### Option B: Manual CNAME Setup

1. In your repository, go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain: `rubeegyptdemo.com`
3. GitHub will automatically create the CNAME file

## Step 4: Verify Deployment

After pushing, GitHub Actions will automatically:
1. Build your static site
2. Create a CNAME file (if custom domain is configured)
3. Deploy to GitHub Pages

**View your site at:**
- Default: `https://YOUR_USERNAME.github.io/web`
- Custom domain: `https://rubeegyptdemo.com`

Check deployment status in your repository under the **Actions** tab.

## What Gets Deployed

The deployment workflow exports your entire Next.js site as **static HTML/CSS/JS** files:
- ✅ All pages (home, shop, categories, product pages, etc.)
- ✅ Images (from Unsplash)
- ✅ CSS & JavaScript bundled
- ✅ Bilingual support (EN/AR)
- ✅ All interactive features

## Troubleshooting

### Custom Domain Not Working
- **Error**: "The custom domain `rubeegyptdemo` is not properly formatted"
- **Solution**: Use full domain format: `rubeegyptdemo.com` (not just `rubeegyptdemo`)
- Domain should include the TLD (`.com`, `.eg`, etc.)

### GitHub Actions Workflow Failed
1. Check the **Actions** tab in your repository
2. Click the failed workflow to see detailed logs
3. Common issues:
   - Dependencies not installed → Already handled (npm ci)
   - Build errors → Check `npm run export` locally first

### Test Locally First

Before pushing to GitHub, test the export locally:

```bash
cd /Users/kingeslam/Downloads/web

# Create static export
npm run export

# The `out/` folder contains all static files
# You can serve it locally to test:
# npx serve out
```

## File Structure After Export

```
out/
├── CNAME                    # Auto-generated if custom domain set
├── 404.html                 # GitHub Pages 404 page
├── _next/                   # Next.js assets
├── en/                      # English pages (all routes)
├── ar/                      # Arabic pages (all routes)
└── photos/                  # Product photos
```

## Next Steps

1. **If you have a custom domain:**
   - Update your domain's DNS records to point to GitHub Pages
   - See: https://docs.github.com/pages/configuring-a-custom-domain-for-your-pages-site

2. **To make changes:**
   - Edit files locally
   - Commit and push: `git add . && git commit -m "message" && git push`
   - GitHub Actions will auto-rebuild and deploy

3. **Environment-specific URLs:**
   - The site auto-detects its deployment URL
   - Images load from Unsplash (external CDN)
   - All content is fully static and cacheable

## Support

For issues with GitHub Pages:
- GitHub Pages Docs: https://docs.github.com/pages
- Custom domain troubleshooting: https://docs.github.com/articles/troubleshooting-custom-domains

For issues with your site:
- Check the Actions logs for build errors
- Verify `npm run export` works locally
