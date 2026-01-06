/**
 * Creates browser-compatible placeholder images
 * These will work in the browser even without real AI-generated images
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Create simple SVG placeholders that work in browsers
function createSVGPlaceholder(text, color1, color2) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#grad)"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="64" fill="white" text-anchor="middle" dominant-baseline="middle" font-weight="bold">${text}</text>
</svg>`;
}

const images = [
  ['hero-icecream.jpg', 'Premium Ice Cream', '#ff9a9e', '#fad0c4'],
  ['vanilla.jpg', 'Vanilla', '#a8edea', '#fed6e3'],
  ['chocolate.jpg', 'Chocolate', '#8E2DE2', '#4A00E0'],
  ['strawberry.jpg', 'Strawberry', '#ff9a9e', '#ff6a88'],
  ['mint.jpg', 'Mint', '#00b09b', '#96c93d'],
  ['caramel.jpg', 'Caramel', '#f6d365', '#fda085'],
  ['cookies.jpg', 'Cookies', '#434343', '#000000'],
  ['pistachio.jpg', 'Pistachio', '#a8ff78', '#78ffd6'],
  ['mango.jpg', 'Mango', '#f093fb', '#f5576c']
];

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

let created = 0;
let skipped = 0;

images.forEach(([filename, text, color1, color2]) => {
  const filePath = path.join(imagesDir, filename);
  
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${filename} exists`);
    skipped++;
  } else {
    // Create SVG file
    const svgContent = createSVGPlaceholder(text, color1, color2);
    fs.writeFileSync(filePath, svgContent);
    console.log(`📝 Created: ${filename}`);
    created++;
  }
});

console.log(`\n📊 Summary: ${created} images created, ${skipped} existing`);
console.log('\n✅ These SVG placeholders will work in the browser!');
console.log('   They show as gradient backgrounds with text.');
console.log('   Replace with real AI-generated JPG/PNG images anytime.');