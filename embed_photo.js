const fs = require('fs');
const path = require('path');

const photoPath = 'C:\\Users\\gorla\\.gemini\\antigravity-ide\\brain\\4745e37f-0bf7-449d-bb5e-6f9845167f52\\media__1782321752018.jpg';
const portfolioDir = 'C:\\Users\\gorla\\Desktop\\portfolio';
const indexPath = path.join(portfolioDir, 'index.html');

// Read and encode image
const imageData = fs.readFileSync(photoPath);
const base64 = imageData.toString('base64');
const dataUrl = 'data:image/jpeg;base64,' + base64;

// Copy raw file too
fs.copyFileSync(photoPath, path.join(portfolioDir, 'profile.jpg'));
fs.copyFileSync(photoPath, path.join(portfolioDir, 'profile.png'));
console.log('Photo copied as profile.jpg and profile.png');

// Patch index.html
let html = fs.readFileSync(indexPath, 'utf8');
const newTag = `<img id="profile-img" src="${dataUrl}" alt="Gorla Venkata Vasavi Latha Studio Portrait">`;
html = html.replace(/<img id="profile-img"[^>]*>/g, newTag);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('index.html updated with embedded photo!');
console.log('Done! Open index.html in your browser.');
