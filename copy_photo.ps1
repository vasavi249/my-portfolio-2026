Write-Host "Copying profile photo to portfolio workspace..."
$sourcePath = "C:\Users\gorla\.gemini\antigravity-ide\brain\4745e37f-0bf7-449d-bb5e-6f9845167f52\media__1782316500069.jpg"
Copy-Item -Path $sourcePath -Destination "$PSScriptRoot\profile.jpg" -Force
Copy-Item -Path $sourcePath -Destination "$PSScriptRoot\profile.png" -Force
if ($?) {
    Write-Host "Profile photo copied successfully as profile.jpg and profile.png!" -ForegroundColor Green
} else {
    Write-Host "Error copying photo." -ForegroundColor Red
}
# Keep window open if run from file explorer
if ($Host.Name -eq "ConsoleHost") {
    Write-Host "Press any key to exit..."
    $null = [Console]::ReadKey($true)
}
