const { chromium } = require('playwright');
const fs = require('fs');

async function compare() {
  const browser = await chromium.launch();
  const page1 = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const page2 = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to original...');
  await page1.goto('https://sharepal.in/bangalore/gaming-gadgets-on-rent', { waitUntil: 'networkidle' });
  
  console.log('Navigating to localhost...');
  // We need to ensure localhost is running. I will assume it's running because it's a background task.
  try {
    await page2.goto('http://localhost:5173/', { waitUntil: 'networkidle', timeout: 10000 });
  } catch(e) {
    console.error("Localhost not running or took too long.");
  }

  // Extract Header details
  const origHeader = await page1.evaluate(() => {
    const el = document.querySelector('header');
    if (!el) return null;
    const styles = window.getComputedStyle(el);
    return { height: styles.height, bg: styles.backgroundColor, display: styles.display };
  });

  const localHeader = await page2.evaluate(() => {
    const el = document.querySelector('header');
    if (!el) return null;
    const styles = window.getComputedStyle(el);
    return { height: styles.height, bg: styles.backgroundColor, display: styles.display };
  });

  console.log('--- HEADER ---');
  console.log('Original:', origHeader);
  console.log('Local:', localHeader);

  // Extract Breadcrumbs / Path
  const origBread = await page1.evaluate(() => {
    // Find something that looks like breadcrumbs
    const el = Array.from(document.querySelectorAll('div, span, a')).find(e => e.innerText && e.innerText.includes('Home') && e.innerText.includes('Bangalore'));
    return el ? el.innerText.replace(/\n/g, ' ') : null;
  });

  const localBread = await page2.evaluate(() => {
    const el = Array.from(document.querySelectorAll('div, span, a')).find(e => e.innerText && e.innerText.includes('Home') && e.innerText.includes('Bangalore'));
    return el ? el.innerText.replace(/\n/g, ' ') : null;
  });

  console.log('--- BREADCRUMBS ---');
  console.log('Original text snippet:', origBread ? origBread.substring(0, 50) : null);
  console.log('Local text snippet:', localBread ? localBread.substring(0, 50) : null);

  await browser.close();
}

compare().catch(console.error);
