
import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  { name: 'cat_stay.jpg', url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=200&h=200&fit=crop' },
  { name: 'fallback.jpg', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&fit=crop' },
  { name: 'top_banner_assistant.jpg', url: 'https://images.unsplash.com/photo-1599549591443-410a568b6939?auto=format&fit=crop&q=80&w=800' },
  { name: 'amap_favicon.ico', url: 'https://www.amap.com/favicon.ico' },
  { name: 'huangxiaoxi_icon.png', url: 'https://img.lenyiin.com/app/hide.php?key=YmlZb2x1cjNrRWRrRXlLK3RFT21vN1FvY0ZZOFVZK1VGcWl0bGw0PQ==' },
  { name: 'huangguoshu.jpg', url: 'https://images.unsplash.com/photo-1627845347209-f80e0370498b?w=300&h=400&fit=crop' },
  { name: 'dongxiang.jpg', url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&h=400&fit=crop' },
  { name: 'map_bg.jpg', url: 'https://picsum.photos/seed/guizhou-map/600/1000' }
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
    const dir = path.join(process.cwd(), 'public', 'images');
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
