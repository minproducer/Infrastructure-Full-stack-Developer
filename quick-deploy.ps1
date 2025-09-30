# Quick Deploy Script for HR Repository

Write-Host "🚀 Starting deployment to hr.minproducer.com..." -ForegroundColor Cyan

$hrRepo = "D:\Development\Github\HR"
$targetDir = "$hrRepo\fullstackdevInfrastructure"

# Check if HR repo exists
if (!(Test-Path $hrRepo)) {
    Write-Host "❌ HR repository not found at: $hrRepo" -ForegroundColor Red
    Write-Host "Please make sure the HR repo is cloned to this location." -ForegroundColor Yellow
    exit 1
}

Write-Host "📂 HR Repository found: $hrRepo" -ForegroundColor Green

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green

# Remove old deployment
if (Test-Path $targetDir) {
    Write-Host "🗑️ Removing old deployment..." -ForegroundColor Yellow
    Remove-Item $targetDir -Recurse -Force
}

# Copy new build
Write-Host "📁 Copying files to HR repository..." -ForegroundColor Yellow
Copy-Item "dist" $targetDir -Recurse

Write-Host "✅ Files copied successfully!" -ForegroundColor Green

# Show what was copied
Write-Host ""
Write-Host "📋 Deployed files:" -ForegroundColor Cyan
Get-ChildItem -Path $targetDir -Recurse | Select-Object Name, Length | Format-Table -AutoSize

Write-Host ""
Write-Host "📤 Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to HR repository: cd `"$hrRepo`"" -ForegroundColor White
Write-Host "2. Check status: git status" -ForegroundColor White
Write-Host "3. Add files: git add fullstackdevInfrastructure/" -ForegroundColor White
Write-Host "4. Commit: git commit -m `"Add Infrastructure Job site`"" -ForegroundColor White
Write-Host "5. Push: git push origin main" -ForegroundColor White

Write-Host ""
Write-Host "🌐 Final URL: https://hr.minproducer.com/fullstackdevInfrastructure/" -ForegroundColor Green
Write-Host ""

# Ask if user wants to auto-commit
$autoCommit = Read-Host "Do you want to auto-commit and push? (y/N)"
if ($autoCommit -eq "y" -or $autoCommit -eq "Y") {
    Write-Host "🔄 Auto-committing..." -ForegroundColor Cyan
    
    Set-Location $hrRepo
    
    git add fullstackdevInfrastructure/
    git commit -m "Add Infrastructure Developer Job Description site"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Committed successfully!" -ForegroundColor Green
        
        $push = Read-Host "Push to GitHub? (y/N)"
        if ($push -eq "y" -or $push -eq "Y") {
            git push origin main
            if ($LASTEXITCODE -eq 0) {
                Write-Host "🎉 Deployed successfully!" -ForegroundColor Green
                Write-Host "🌐 Visit: https://hr.minproducer.com/fullstackdevInfrastructure/" -ForegroundColor Cyan
            } else {
                Write-Host "❌ Push failed! Please check your git configuration." -ForegroundColor Red
            }
        }
    } else {
        Write-Host "❌ Commit failed! Please check for conflicts." -ForegroundColor Red
    }
    
    # Go back to original directory
    Set-Location $PSScriptRoot
}