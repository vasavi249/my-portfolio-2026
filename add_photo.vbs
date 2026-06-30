Dim fso
Set fso = CreateObject("Scripting.FileSystemObject")

Dim src
src = "C:\Users\gorla\.gemini\antigravity-ide\brain\4745e37f-0bf7-449d-bb5e-6f9845167f52\media__1782321752018.jpg"

Dim dst1
dst1 = "C:\Users\gorla\Desktop\portfolio\profile.jpg"

Dim dst2
dst2 = "C:\Users\gorla\Desktop\portfolio\profile.png"

If fso.FileExists(src) Then
    fso.CopyFile src, dst1, True
    fso.CopyFile src, dst2, True
    MsgBox "✅ Profile photo added successfully!" & vbCrLf & vbCrLf & "Files created:" & vbCrLf & "• profile.jpg" & vbCrLf & "• profile.png" & vbCrLf & vbCrLf & "Now open index.html in your browser to see your photo!", vbInformation, "Photo Added!"
Else
    MsgBox "❌ Source photo not found. Please contact support.", vbCritical, "Error"
End If
