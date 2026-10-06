const fs = require('fs');
const https = require('https');
const path = require('path');

const dataFile = path.join(__dirname, 'src', 'data', 'products.json');
const products = require('./src/data/products.json');

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(new Error(`Status Code: ${res.statusCode} for ${url}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function fixImages() {
  let updated = false;
  for (let i = 0; i < products.products.length; i++) {
    const p = products.products[i];
    let url = p.image;
    
    // Some urls might have weird spaces
    url = url.replace(/ /g, '%20');
    
    const dest = path.join(__dirname, 'public', 'products', `${p.id}.webp`);
    
    if (url.startsWith('http')) {
      try {
        console.log(`Downloading ${url}...`);
        await downloadImage(url, dest);
        p.image = `/products/${p.id}.webp`;
        updated = true;
      } catch (e) {
        console.error(`Failed to download ${url}: ${e.message}`);
        // Let's try fixing common sharepal url mistakes
        let fixedUrl = url.replace('%20(1)', ' (1)').replace('%20controllers', ' controllers');
        try {
           await downloadImage(fixedUrl, dest);
           p.image = `/products/${p.id}.webp`;
           updated = true;
           console.log(`Success on retry!`);
        } catch (e2) {
           console.error(`Failed retry as well: ${fixedUrl}`);
        }
      }
    }
  }

  if (updated) {
    fs.writeFileSync(dataFile, JSON.stringify(products, null, 2), 'utf-8');
    console.log('Saved updated products.json');
  }
}

fixImages();
