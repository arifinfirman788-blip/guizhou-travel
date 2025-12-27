
import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  { name: 'liupanshui_hero.jpg', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&fit=crop' }, // Scenic mountain/lake
  { name: 'yangroufen.jpg', url: 'https://images.unsplash.com/photo-1626805828362-d99616d27150?w=400&fit=crop' }, // Food bowl
  { name: 'laoguo.jpg', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&fit=crop' }, // Grilled food
  { name: 'ham.jpg', url: 'https://images.unsplash.com/photo-1596556391113-64e320573e86?w=400&fit=crop' }, // Ham/Meat
  { name: 'nuomiji.jpg', url: 'https://images.unsplash.com/photo-1606346850819-389f46401037?w=400&fit=crop' }, // Rice food
  { name: 'ski_resort.jpg', url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&fit=crop' }, // Skiing
  { name: 'wumeng_grassland.jpg', url: 'https://images.unsplash.com/photo-1611029238691-88151b7c13a0?w=400&fit=crop' }, // Grassland/Nature
  { name: 'tuole_ginkgo.jpg', url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&fit=crop' }, // Autumn leaves
  { name: 'museum.jpg', url: 'https://images.unsplash.com/photo-1596825205489-a2c9f759600a?w=400&fit=crop' } // Museum/History
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filepath}`);
        resolve();
      });
      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
};

async function main() {
    // Correct path for Next.js public directory
    const dir = path.join(process.cwd(), 'public', 'image'); 
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    for (const img of images) {
        const filepath = path.join(dir, img.name);
        if (fs.existsSync(filepath)) {
            console.log(`Skipping ${img.name}, already exists.`);
            continue;
        }
        try {
            await downloadImage(img.url, filepath);
        } catch (error) {
            console.error(`Error downloading ${img.name}:`, error.message);
        }
    }
}

main();
