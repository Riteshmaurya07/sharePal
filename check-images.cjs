const fs = require('fs');
const https = require('https');
const products = require('./src/data/products.json').products;

async function checkImages() {
  for (const p of products) {
    await new Promise(resolve => {
      https.get(p.image, (res) => {
        if (res.statusCode !== 200) {
          console.log(`[FAILED] ${res.statusCode} ${p.name} - ${p.image}`);
        }
        res.resume();
        resolve();
      }).on('error', (e) => {
        console.log(`[ERROR] ${e.message} ${p.name} - ${p.image}`);
        resolve();
      });
    });
  }
}

checkImages();
