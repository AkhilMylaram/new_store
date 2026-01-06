/**
 * Creates simple placeholder images if AI-generated images are not available
 * This ensures the app doesn't break when images are missing
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const placeholderText = (text) => `
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ff9a9e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#fad0c4;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#grad)"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;

const files = [
  ['hero-icecream.jpg', 'Hero Ice Cream'],
  ['vanilla.jpg', 'Vanilla'],
  ['chocolate.jpg', 'Chocolate'],
  ['strawberry.jpg', 'Strawberry'],
  ['mint.jpg', 'Mint Chip'],
  ['caramel.jpg', 'Caramel'],
  ['cookies.jpg', 'Cookies & Cream'],
  ['pistachio.jpg', 'Pistachio'],
  ['mango.jpg', 'Mango']
];

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

let created = 0;
let skipped = 0;

files.forEach(([filename, text]) => {
  const filePath = path.join(imagesDir, filename);
  
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${filename} exists`);
    skipped++;
  } else {
    // Create a simple SVG placeholder (you can convert this to JPG later)
    const svgContent = placeholderText(text);
    const svgPath = filePath.replace('.jpg', '.svg');
    fs.writeFileSync(svgPath, svgContent);
    console.log(`📝 Created placeholder: ${filename.replace('.jpg', '.svg')}`);
    created++;
  }
});

console.log(`\n📊 Summary: ${created} placeholders created, ${skipped} existing files skipped`);
console.log('\n⚠️  Note: These are SVG placeholders. Replace with HD AI-generated images:');
console.log('   1. Run: npm run gen-images');
console.log('   2. See: scripts/generate-images.md');
console.log('   3. Replace SVG files with JPG/PNG images');