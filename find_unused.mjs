import fs from 'fs';
import path from 'path';

function getAllFiles(dir, extFilter = null) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, extFilter));
    } else {
      if (!extFilter || extFilter.some(ext => filePath.endsWith(ext))) {
        results.push(filePath);
      }
    }
  });
  return results;
}

// 1. Gather all source files
const srcFiles = getAllFiles(path.join(process.cwd(), 'src'), ['.ts', '.tsx', '.css']);
srcFiles.push(path.join(process.cwd(), 'index.html'));

// 2. Read all text from source files
let allContent = '';
srcFiles.forEach(file => {
  allContent += fs.readFileSync(file, 'utf8') + '\n';
});

// 3. Gather all assets in public/assets
const publicAssetsDir = path.join(process.cwd(), 'public', 'assets');
const allAssets = getAllFiles(publicAssetsDir);

console.log('--- Unused Assets in public/assets ---');
allAssets.forEach(assetPath => {
  const baseName = path.basename(assetPath);
  // Remove the extension to check for basename references (like for WebP logic)
  const nameWithoutExt = path.parse(baseName).name;
  
  // If neither the exact filename nor the basename is in the source text, it's likely unused
  if (!allContent.includes(baseName) && !allContent.includes(nameWithoutExt)) {
    console.log(assetPath.substring(process.cwd().length + 1));
  }
});
