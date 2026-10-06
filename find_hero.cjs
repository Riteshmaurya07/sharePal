const https = require('https');
https.get('https://sharepal.in/bangalore/gaming-gadgets-on-rent', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const matches = data.match(/https:\/\/images\.sharepal\.in\/[^\"'>]+/g);
    if (matches) {
      const unique = [...new Set(matches)];
      console.log('Images:', unique.filter(u => u.includes('banner') || u.includes('hero') || u.includes('gaming')));
    } else {
      console.log('No matches');
    }
  });
});
