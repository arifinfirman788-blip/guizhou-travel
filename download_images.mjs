
import fs from 'fs';
import https from 'https';
import path from 'path';

const images = [
  { name: 'changwangmian.jpg', url: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=400' },
  { name: 'suantangyu.jpg', url: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400' },
  { name: 'siwawa.jpg', url: 'https://images.unsplash.com/photo-1512413316925-fd47914c9c22?auto=format&fit=crop&q=80&w=400' },
  { name: 'qingyandoufu.jpg', url: 'https://images.unsplash.com/photo-1563805042-7684c849a158?auto=format&fit=crop&q=80&w=400' },
  { name: 'guiyang_banner.jpg', url: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800' },
  { name: 'jiaxiulou.jpg', url: 'https://picsum.photos/seed/gy-land1/800/500' },
  { name: 'qianlingshan.jpg', url: 'https://picsum.photos/seed/gy-land2/400/500' },
  { name: 'qingyanguzhen.jpg', url: 'https://picsum.photos/seed/gy-land3/400/500' },
  { name: 'yinshanyuejing.jpg', url: 'https://picsum.photos/seed/gy-stay1/500/350' },
  { name: 'guzhentingfeng.jpg', url: 'https://picsum.photos/seed/gy-stay2/500/350' }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      const stream = fs.createWriteStream(filepath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`Downloaded ${filepath}`);
        resolve();
      });
      stream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file async. (But we don't check the result)
        reject(err);
      });
    }).on('error', (err) => {
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
        try {
            await downloadImage(img.url, path.join(dir, img.name));
        } catch (error) {
            console.error(`Error downloading ${img.name}:`, error.message);
            // create a placeholder if failed
            // Not implemented here, just logging
        }
    }
}

main();
