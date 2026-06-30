@echo off
echo Copying profile photo to portfolio workspace...
set "src=C:\Users\gorla\.gemini\antigravity-ide\brain\4745e37f-0bf7-449d-bb5e-6f9845167f52\media__1782316500069.jpg"
copy "%src%" "%~dp0profile.jpg" /Y
copy "%src%" "%~dp0profile.png" /Y
if %ERRORLEVEL% EQU 0 (
    echo Profile photo copied successfully as profile.jpg and profile.png!
) else (
    echo Error copying photo. Please verify the source file path.
)
pause
