const fs = require('fs');

// Synchronous file copy
function copyFileSync(source, target) {
    let content = fs.readFileSync(source);
    fs.writeFileSync(target, content);
}

// Asynchronous file copy
function copyFileAsync(source, target, callback) {
    fs.copyFile(source, target, (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}

// Example usage
const sourceFilePath = 'dist/index.html';
const targetFilePath = 'dist/404.html';

copyFileSync(sourceFilePath, targetFilePath);

