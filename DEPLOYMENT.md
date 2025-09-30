# 🚀 GitHub Pages Deployment Guide

## Custom Domain Setup (hr.minproducer.com)

### 1. DNS Configuration

Configure your DNS provider to point `hr.minproducer.com` to GitHub Pages:

**A Records:**

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**OR CNAME Record:**

```
yourusername.github.io
```

### 2. Repository Configuration

The `base` path is already configured in `vite.config.ts`:

```typescript
base: '/fullstackdevInfrastructure/',
```

### 2. Push to GitHub

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### 4. GitHub Pages Settings

1. Go to repository Settings → Pages
2. Under **Source**, select **GitHub Actions**
3. Under **Custom domain**, enter: `hr.minproducer.com`
4. Check **Enforce HTTPS**

### 5. Access Your Site

Your site will be available at:

```
https://hr.minproducer.com/fullstackdevInfrastructure/
```

### Manual Deployment (Alternative)

```bash
npm run deploy
```

## Files Added for Deployment

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `vite.config.ts` - Updated with base path
- `package.json` - Added deploy script
- `README.md` - Updated with deployment instructions

## Troubleshooting

**If deployment fails:**

1. Check Actions tab for error details
2. Ensure Pages is enabled with GitHub Actions source
3. Verify the base path matches your repository name
4. Make sure all dependencies install correctly

**If assets don't load:**

1. Double-check the base path in vite.config.ts
2. Ensure it starts and ends with `/`
3. Repository name is case-sensitive

## Features Included

✅ Dark theme only (optimized for readability)
✅ English-only interface
✅ Vietnamese CV link in Contact section
✅ Mobile-responsive navigation
✅ 3D effects and animations
✅ Performance optimizations
✅ Automatic GitHub Pages deployment
