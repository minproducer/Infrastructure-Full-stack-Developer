# 🚀 Deploy to hr.minproducer.com/fullstackdevInfrastructure

## 📋 Setup Instructions

Since you already have `hr.minproducer.com` pointing to your `hr` repository, here are the steps to add this job site as a subpath:

### Method 1: Add to Existing `hr` Repository (Recommended)

1. **Build this project:**

   ```bash
   npm run build
   ```

2. **Copy built files to your `hr` repo:**

   ```bash
   # Copy all files from dist/ to hr/fullstackdevInfrastructure/
   cp -r dist/* /path/to/hr/fullstackdevInfrastructure/
   ```

3. **Commit to `hr` repository:**

   ```bash
   cd /path/to/hr
   git add fullstackdevInfrastructure/
   git commit -m "Add Infrastructure Job Description site"
   git push origin main
   ```

4. **Access your site:**
   ```
   https://hr.minproducer.com/fullstackdevInfrastructure/
   ```

### Method 2: PowerShell Script (Windows)

Create this script to automate the process:

```powershell
# build-and-deploy.ps1
Write-Host "Building project..."
npm run build

Write-Host "Copying to hr repository..."
$hrRepo = "D:\path\to\your\hr\repository"
$targetDir = "$hrRepo\fullstackdevInfrastructure"

# Remove old files
if (Test-Path $targetDir) {
    Remove-Item $targetDir -Recurse -Force
}

# Copy new build
Copy-Item "dist" $targetDir -Recurse

Write-Host "Files copied to: $targetDir"
Write-Host "Now commit and push from your hr repository!"
```

### Method 3: GitHub Actions Auto-Deploy

Add this to your `hr` repository's `.github/workflows/sync-job-site.yml`:

```yaml
name: Sync Job Description Site

on:
  repository_dispatch:
    types: [deploy-job-site]

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout hr repo
        uses: actions/checkout@v4

      - name: Download job site artifact
        # Add logic to download built files from this repo

      - name: Copy to fullstackdevInfrastructure
        run: |
          rm -rf fullstackdevInfrastructure/
          mkdir -p fullstackdevInfrastructure/
          cp -r downloaded-files/* fullstackdevInfrastructure/

      - name: Commit and push
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add fullstackdevInfrastructure/
          git commit -m "Update Infrastructure Job site" || exit 0
          git push
```

## 🎯 Current Configuration

✅ **Base path:** `/fullstackdevInfrastructure/` (correct)
✅ **No CNAME conflict:** Removed CNAME file
✅ **Build ready:** All assets use correct paths
✅ **Domain ready:** Will work at `hr.minproducer.com/fullstackdevInfrastructure/`

## 📁 What You'll Copy

After running `npm run build`, copy these files to your `hr` repo:

```
hr/
├── fullstackdevInfrastructure/
│   ├── index.html
│   ├── assets/
│   │   ├── index-xxx.css
│   │   ├── index-xxx.js
│   │   └── (other chunks)
│   ├── favicon.svg
│   └── vite.svg
```

## 🚀 Quick Start

1. **Build:** `npm run build`
2. **Copy:** Move `dist/*` to `hr/fullstackdevInfrastructure/`
3. **Push:** Commit to your `hr` repository
4. **Visit:** `https://hr.minproducer.com/fullstackdevInfrastructure/`

The site will be live immediately after pushing to your `hr` repo! 🎉
