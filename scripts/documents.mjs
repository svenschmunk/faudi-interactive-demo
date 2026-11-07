import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { readFile, writeFile } from 'node:fs/promises';
// Source data is shared with the UI to keep quotes and page references consistent.
const { samples } = await import('../src/data.ts').catch(async () => {
 const { transform } = await import('esbuild');
 const result = await transform(await readFile('src/data.ts','utf8'), {loader:'ts',format:'esm'});
 return import('data:text/javascript;base64,'+Buffer.from(result.code).toString('base64'));
});
for (const sample of samples) { const pdf=await PDFDocument.create(); const font=await pdf.embedFont(StandardFonts.Helvetica); pdf.setTitle(sample.code+' - Synthetic specification'); for(const lines of sample.pages) { const page=pdf.addPage([595,842]); lines.forEach((line,i)=>page.drawText(line,{x:48,y:790-i*34,size:i===0?11:12,font,color:i===0?rgb(.0,.4,.4):rgb(.08,.14,.2)})); } await writeFile('public/documents/'+sample.file,await pdf.save()); }
