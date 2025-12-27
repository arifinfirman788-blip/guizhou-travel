
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'image');
const destDir = path.join(__dirname, 'public', 'image');

console.log(`Moving from ${srcDir} to ${destDir}`);

if (!fs.existsSync(srcDir)) {
    console.log('Source directory "image" does not exist.');
} else {
    // Ensure parent dir exists
    if (!fs.existsSync(path.join(__dirname, 'public'))) {
        fs.mkdirSync(path.join(__dirname, 'public'));
    }

    if (!fs.existsSync(destDir)) {
        try {
            fs.renameSync(srcDir, destDir);
            console.log('Successfully moved "image" to "public/image"');
        } catch (err) {
            console.error('Error moving directory:', err);
        }
    } else {
        const files = fs.readdirSync(srcDir);
        files.forEach(file => {
            const srcFile = path.join(srcDir, file);
            const destFile = path.join(destDir, file);
            try {
                fs.renameSync(srcFile, destFile);
                console.log(`Moved ${file}`);
            } catch (e) {
                console.error(`Failed to move ${file}: ${e.message}`);
            }
        });
        try {
            fs.rmdirSync(srcDir);
            console.log('Removed source directory');
        } catch (e) {
             console.error(`Failed to remove source dir: ${e.message}`);
        }
    }
}
