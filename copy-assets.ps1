# Elite AI Portfolio - Asset Setup Script
# Run this script to copy your assets before deploying

Write-Host "Copying assets to portfolio..." -ForegroundColor Cyan

# Copy profile photo
if (Test-Path "C:\Users\mrpra\Pictures\Camera Roll\IMG_0585.JPG") {
    Copy-Item "C:\Users\mrpra\Pictures\Camera Roll\IMG_0585.JPG" "C:\pravin\portfolio\public\images\profile.jpg" -Force
    Write-Host "✓ Profile photo copied" -ForegroundColor Green
} else {
    Write-Host "✗ Profile photo not found at C:\Users\mrpra\Pictures\Camera Roll\IMG_0585.JPG" -ForegroundColor Red
}

# Copy resume PDF
if (Test-Path "C:\Users\mrpra\Pictures\Camera Roll\PravinMR.pdf") {
    Copy-Item "C:\Users\mrpra\Pictures\Camera Roll\PravinMR.pdf" "C:\pravin\portfolio\public\resume\PravinMR.pdf" -Force
    Write-Host "✓ Resume PDF copied" -ForegroundColor Green
} else {
    Write-Host "✗ Resume PDF not found at C:\Users\mrpra\Pictures\Camera Roll\PravinMR.pdf" -ForegroundColor Red
}

Write-Host "`nAssets copied successfully! Run 'npm run dev' to test locally." -ForegroundColor Cyan
