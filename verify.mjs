import { chromium } from 'playwright';
import fs from 'fs';

const targets = [
    ['https://sharepal.in/bangalore/gaming-gadgets-on-rent', 'orig'],
    ['https://sharepal-six.vercel.app/', 'mine'],
];

const browser = await chromium.launch();
for (const [url, tag] of targets) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    fs.writeFileSync(`${tag}.html`, await page.content());
    await page.screenshot({ path: `${tag}-full.png`, fullPage: true });

    // Section map
    const sections = await page.$$eval('section, header, footer', els =>
        els.map(e => ({
            tag: e.tagName,
            cls: e.className.slice(0, 80),
            h: e.querySelector('h1,h2,h3')?.innerText?.slice(0, 80) || '',
            text: e.innerText.slice(0, 120).replace(/\n/g, ' ')
        }))
    );
    fs.writeFileSync(`${tag}-sections.json`, JSON.stringify(sections, null, 2));
}
await browser.close();