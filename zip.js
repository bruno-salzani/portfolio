
import AdmZip from 'adm-zip';
import fs from 'fs';
import path from 'path';

const zip = new AdmZip();
const files = [
  'App.tsx',
  'constants.tsx',
  'index.html',
  'index.tsx',
  'metadata.json',
  'package.json',
  'tsconfig.json',
  'types.ts',
  'vite.config.ts'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    zip.addLocalFile(file);
  }
});

if (fs.existsSync('components')) {
  zip.addLocalFolder('components', 'components');
}

zip.writeZip('project.zip');
console.log('project.zip created successfully');
