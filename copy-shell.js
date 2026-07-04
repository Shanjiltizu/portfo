const fs = require('fs');
const path = require('path');

const shellFile = path.resolve('.output/public/_shell.html');
const indexFile = path.resolve('.output/public/index.html');
const errFile = path.resolve('.output/public/404.html');

if (fs.existsSync(shellFile)) {
  fs.copyFileSync(shellFile, indexFile);
  fs.copyFileSync(shellFile, errFile);
  console.log('[post-build] Successfully copied _shell.html to index.html and 404.html');
} else {
  console.error('[post-build] Error: _shell.html not found!');
  process.exit(1);
}
