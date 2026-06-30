@echo off
echo Adding your profile photo to the portfolio...
echo.

set "SRC=C:\Users\gorla\.gemini\antigravity-ide\brain\4745e37f-0bf7-449d-bb5e-6f9845167f52\media__1782321752018.jpg"
set "DST=C:\Users\gorla\Desktop\portfolio"

C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -ExecutionPolicy Bypass -NoProfile -Command ^
  "Copy-Item -LiteralPath '%SRC%' -Destination '%DST%\profile.jpg' -Force; ^
   Copy-Item -LiteralPath '%SRC%' -Destination '%DST%\profile.png' -Force; ^
   Write-Host 'SUCCESS: Photo copied!'"

if exist "%DST%\profile.jpg" (
    echo.
    echo ============================================
    echo  SUCCESS! Your photo has been added!
    echo ============================================
    echo.
    echo Now open index.html in your browser.
    echo.
) else (
    echo.
    echo Trying alternate method...
    copy /Y "%SRC%" "%DST%\profile.jpg"
    copy /Y "%SRC%" "%DST%\profile.png"
    echo Done!
)
pause
