# 📦 GitHub Repository Setup

## 🚀 Push to GitHub Repository

### 1. Initialize Git (if not already done)

```bash
git init
```

### 2. Add remote repository

```bash
git remote add origin https://github.com/minproducer/Infrastructure-Full-stack-Developer.git
```

### 3. Stage all files

```bash
git add .
```

### 4. Commit with descriptive message

```bash
git commit -m "Initial commit: Infrastructure Full-stack Developer job description website

Features:
- Modern React + TypeScript + Vite setup
- Dark theme optimized UI/UX
- 3D animations and particle effects
- Mobile-responsive design
- Performance optimized (75KB main bundle)
- Vietnamese CV integration
- English-only interface
- Deploy scripts for hr.minproducer.com"
```

### 5. Push to GitHub

```bash
git push -u origin main
```

## 🔄 Future Updates

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

## 🌐 Deployment Strategy

- **Source Code**: Stored in https://github.com/minproducer/Infrastructure-Full-stack-Developer
- **Live Site**: Deployed to https://hr.minproducer.com/fullstackdevInfrastructure/
- **Deploy Method**: Use `quick-deploy.ps1` to build and copy to HR repository

## 📁 Repository Structure

```
Infrastructure-Full-stack-Developer/
├── src/                    # React TypeScript source code
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions (optional)
├── dist/                   # Build output (ignored in git)
├── deploy-to-hr.ps1       # HR repository deployment script
├── quick-deploy.ps1       # One-click deployment script
├── README.md              # Project documentation
├── DEPLOYMENT.md          # Deployment instructions
├── HR-DEPLOY-GUIDE.md     # HR-specific deploy guide
└── package.json           # Dependencies and scripts
```

## 🔧 Development Workflow

1. **Make changes** to source code
2. **Test locally**: `npm run dev`
3. **Commit to GitHub**: Follow git workflow above
4. **Deploy to live site**: Run `quick-deploy.ps1`
5. **Push HR repo**: Commit and push from `D:\Development\Github\HR`

This keeps source code versioned on GitHub while maintaining the existing deployment to hr.minproducer.com! 🎉
