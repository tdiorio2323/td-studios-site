const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
const OUTPUT_FILE = 'public/TD-Studios-Full-Site.pdf';

const routes = [
  '/',
  '/services',
  '/services/websites',
  '/services/branding-design',
  '/services/social-media',
  '/services/cannabis',
  '/work',
  '/process',
  '/library',
  '/brand-bible',
  '/contact'
];

(async () => {
  console.log('🚀 Starting PDF generation...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const mergedPdf = await PDFDocument.create();

  for (const route of routes) {
    const page = await browser.newPage();
    
    // Set a wide viewport to ensure desktop layout
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    
    const url = `${BASE_URL}${route}`;
    console.log(`📸 Capturing: ${route}`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
      
      // Add a bit of delay to ensure animations settle
      await new Promise(r => setTimeout(r, 2000));

      // Generate PDF for this page
      // We use a large height to ensure full page capture if needed, 
      // but 'fullPage: true' in screenshot is different from pdf.
      // For PDF, we rely on the browser's print capability.
      // To get a "full top to bottom" look without page breaks cutting things off awkwardly,
      // we can try to calculate the body height and set the pdf page height to match.
      
      const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
      
      const pdfBuffer = await page.pdf({
        printBackground: true,
        width: '1440px',
        height: `${bodyHeight + 100}px`, // Add a little buffer
        pageRanges: '1'
      });

      const pagePdf = await PDFDocument.load(pdfBuffer);
      const copiedPages = await mergedPdf.copyPages(pagePdf, pagePdf.getPageIndices());
      
      copiedPages.forEach((page) => mergedPdf.addPage(page));
      
    } catch (error) {
      console.error(`❌ Failed to capture ${route}:`, error.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  const pdfBytes = await mergedPdf.save();
  fs.writeFileSync(OUTPUT_FILE, pdfBytes);
  
  console.log(`✅ PDF generated successfully: ${OUTPUT_FILE}`);
})();
