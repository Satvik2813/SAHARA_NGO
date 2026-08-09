import fs from 'fs';
import path from 'path';

const urls = {
  'union.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Union_Bank_of_India_Logo.svg/512px-Union_Bank_of_India_Logo.svg.png',
  'sbi.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/512px-SBI-logo.svg.png'
};

const dir = 'c:/Users/Praveen/Documents/SAHARANGO/public/assets/banks';

async function run() {
  fs.mkdirSync(dir, { recursive: true });
  for (const [name, url] of Object.entries(urls)) {
    console.log(`Downloading ${name}...`);
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Node Script (saharango)' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(path.join(dir, name), buffer);
      console.log(`Saved ${name}`);
    } catch (e) {
      console.error(`Failed ${name}:`, e.message);
    }
  }
}

run();
