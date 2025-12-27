
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'image');
const destDir = path.join(__dirname, 'public', 'image');

if (!fs.existsSync(srcDir)) {
    console.log('Source directory "image" does not exist. It might have been moved already.');
} else {
    if (!fs.existsSync(destDir)) {
        // If public/image doesn't exist, we can rename the whole folder
        try {
            fs.renameSync(srcDir, destDir);
            console.log('Successfully moved "image" to "public/image"');
        } catch (err) {
            console.error('Error moving directory:', err);
            // Fallback: copy and delete?
        }
    } else {
        // If public/image exists, move files individually
        const files = fs.readdirSync(srcDir);
        files.forEach(file => {
            const srcFile = path.join(srcDir, file);
            const destFile = path.join(destDir, file);
            fs.renameSync(srcFile, destFile);
            console.log(`Moved ${file}`);
        });
        fs.rmdirSync(srcDir); // Remove empty dir
        console.log('Moved all files and removed source directory');
    }
}
