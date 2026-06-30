"""
Run this script to embed your profile photo as base64 in index.html
Usage: python embed_photo.py
"""
import base64
import re
import os

# Source photo path - your latest uploaded photo
photo_path = r"C:\Users\gorla\.gemini\antigravity-ide\brain\4745e37f-0bf7-449d-bb5e-6f9845167f52\media__1782316500069.jpg"

# Also copy to profile.jpg / profile.png as fallback
portfolio_dir = os.path.dirname(os.path.abspath(__file__))
profile_jpg = os.path.join(portfolio_dir, "profile.jpg")
profile_png = os.path.join(portfolio_dir, "profile.png")

print(f"Reading photo from: {photo_path}")

with open(photo_path, "rb") as f:
    data = f.read()

# Copy as profile.jpg and profile.png
import shutil
shutil.copy(photo_path, profile_jpg)
shutil.copy(photo_path, profile_png)
print(f"Copied photo to: {profile_jpg}")
print(f"Copied photo to: {profile_png}")

# Encode as base64 data URL
b64 = base64.b64encode(data).decode("utf-8")
data_url = f"data:image/jpeg;base64,{b64}"
print(f"Base64 data URL length: {len(data_url)} characters")

# Update index.html to use the base64 data URL directly
index_path = os.path.join(portfolio_dir, "index.html")
with open(index_path, "r", encoding="utf-8") as f:
    html = f.read()

# Replace the src of the profile image
old_pattern = r'src="profile\.(png|jpg|jpeg)"'
new_src = f'src="{data_url}"'

updated_html = re.sub(old_pattern, new_src, html)

if updated_html != html:
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(updated_html)
    print("SUCCESS: index.html updated with embedded profile photo!")
else:
    print("WARNING: Could not find profile image tag in index.html.")
    print("Checking for profile-img element...")
    
    # Try alternate pattern
    old_pattern2 = r'(<img[^>]*id="profile-img"[^>]*src=")[^"]*(")'
    new_html = re.sub(old_pattern2, rf'\g<1>{data_url}\g<2>', html)
    if new_html != html:
        with open(index_path, "w", encoding="utf-8") as f:
            f.write(new_html)
        print("SUCCESS: index.html updated with embedded profile photo (alternate method)!")
    else:
        print("ERROR: Could not update index.html. Please check manually.")

print("\nDone! Open index.html in your browser to see your photo.")
