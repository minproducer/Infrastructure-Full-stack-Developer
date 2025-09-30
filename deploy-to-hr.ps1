# PowerShell script to build and deploy to hr.minproducer.com

param(
    [Parameter(Mandatory=$false)]
    [string]$HrRepoPath = "D:\Development\Github\HR"
)

Write-Host "🚀 Building Infrastructure Job Description Website..." -ForegroundColor Cyan

# Build the project
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green
Write-Host ""

# Show built files
Write-Host "📁 Built files in dist/:" -ForegroundColor Yellow
Get-ChildItem -Path "dist" -Recurse | Select-Object Name, Length, LastWriteTime | Format-Table -AutoSize

Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Copy all files from 'dist/' folder" -ForegroundColor White
Write-Host "2. Paste into your 'hr' repository as 'fullstackdevInfrastructure/'" -ForegroundColor White
Write-Host "3. Commit and push to your 'hr' repository" -ForegroundColor White
Write-Host "4. Visit: https://hr.minproducer.com/fullstackdevInfrastructure/" -ForegroundColor White

if ($HrRepoPath -ne "") {
    $targetPath = Join-Path $HrRepoPath "fullstackdevInfrastructure"
    
    Write-Host ""
    Write-Host "🔄 Auto-copying to HR repository..." -ForegroundColor Cyan
    
    # Remove old files if exists
    if (Test-Path $targetPath) {
        Remove-Item $targetPath -Recurse -Force
        Write-Host "🗑️ Removed old files" -ForegroundColor Yellow
    }
    
    # Copy new files
    Copy-Item "dist" $targetPath -Recurse
    Write-Host "✅ Files copied to: $targetPath" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "📤 Now commit and push from your HR repository:" -ForegroundColor Cyan
    Write-Host "cd `"$HrRepoPath`"" -ForegroundColor White
    Write-Host "git add fullstackdevInfrastructure/" -ForegroundColor White
    Write-Host "git commit -m `"Add Infrastructure Developer Job site`"" -ForegroundColor White
    Write-Host "git push origin main" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "💡 To auto-copy, run with HR repo path:" -ForegroundColor Yellow
    Write-Host ".\deploy-to-hr.ps1 -HrRepoPath `"D:\path\to\your\hr\repository`"" -ForegroundColor White
}

Write-Host ""
Write-Host "🌐 Final URL: https://hr.minproducer.com/fullstackdevInfrastructure/" -ForegroundColor Green