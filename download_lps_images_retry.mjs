
import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  // Existing ones that worked (commented out to skip or kept if I want to re-verify)
  // { name: 'liupanshui_hero.jpg', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&fit=crop' },
  // { name: 'laoguo.jpg', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&fit=crop' },
  // { name: 'ski_resort.jpg', url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&fit=crop' },
  // { name: 'tuole_ginkgo.jpg', url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&fit=crop' },

  // Replacements for failed ones
  { name: 'yangroufen.jpg', url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&fit=crop' }, // Noodle soup
  { name: 'ham.jpg', url: 'https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?w=400&fit=crop' }, // Sliced meat/ham
  { name: 'nuomiji.jpg', url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&fit=crop' }, // Fried chicken/rice style
  { name: 'wumeng_grassland.jpg', url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&fit=crop' }, // Grassland
  { name: 'museum.jpg', url: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&fit=crop' } // Architecture
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
    const dir = path.join(process.cwd(), 'public', 'image'); 
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    for (const img of images) {
        const filepath = path.join(dir, img.name);
        // Force download if it was 0 bytes or just overwrite to be safe since previous attempts failed
        // But for simplicity, we just download.
        try {
            await downloadImage(img.url, filepath);
        } catch (error) {
            console.error(`Error downloading ${img.name}:`, error.message);
        }
    }
}

main();
