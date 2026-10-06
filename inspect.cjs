const { chromium } = require('playwright');

async function inspect() {
  const browser = await chromium.launch();
  const orig = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const local = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await orig.goto('https://sharepal.in/bangalore/gaming-gadgets-on-rent', { waitUntil: 'networkidle' });
  await local.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

  const getMetrics = async (page) => {
    return await page.evaluate(() => {
      const getStyles = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const s = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return { w: rect.width, h: rect.height, bg: s.backgroundColor, color: s.color, font: s.fontSize };
      };
      
      // We look for specific structures to match SharePal's DOM
      return {
        header: getStyles('header'),
        categoryNav: getStyles('header + div, nav'),
        heroContainer: getStyles('img[src*="gaming-left"]')?.parentElement?.parentElement ? {
            h: document.querySelector('img[src*="gaming-left"]').parentElement.parentElement.getBoundingClientRect().height,
            bg: window.getComputedStyle(document.querySelector('img[src*="gaming-left"]').parentElement.parentElement).backgroundImage
        } : null,
        mainContentWidth: null,
        productGrid: getStyles('.grid, [style*="grid"]')
      };
    });
  };

  const origMetrics = await getMetrics(orig);
  const localMetrics = await getMetrics(local);

  console.log('--- ORIGINAL METRICS ---');
  console.log(JSON.stringify(origMetrics, null, 2));

  console.log('\n--- LOCAL METRICS ---');
  console.log(JSON.stringify(localMetrics, null, 2));

  await browser.close();
}

inspect().catch(console.error);
