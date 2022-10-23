// Source: https://github.com/alexdevero/bookshelf-react-express-sqlite-app/blob/master/buildScript.js
const fs = require('fs');
const fse = require('fs-extra');
const childProcess = require('child_process');

if (fs.existsSync('./build')) {
  fse.removeSync('./build');
}

childProcess.execSync('react-scripts build', { stdio: 'inherit' });

fse.moveSync('./build', './server/build', { overwrite: true });
