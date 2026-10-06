const fs = require('fs');
const terms = ["Gaming Gadgets On Rent", "Action Cameras", "PS5 + Games", "Join the movement", "Popular Gaming Searches", "Frequently Asked Questions"];

const origHtml = fs.readFileSync('orig.html', 'utf8');
const mineHtml = fs.readFileSync('mine.html', 'utf8');

function countOccurrences(text, term) {
  let count = 0;
  let pos = text.indexOf(term);
  while (pos !== -1) {
    count++;
    pos = text.indexOf(term, pos + term.length);
  }
  return count;
}

for (const term of terms) {
  const o = countOccurrences(origHtml, term);
  const m = countOccurrences(mineHtml, term);
  console.log(`${term.padEnd(35)} orig=${o.toString().padEnd(6)} mine=${m}`);
}
