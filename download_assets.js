const fs = require('fs');
const path = require('path');
const https = require('http'); // The URLs are http://localhost:3845

const images = [
  { url: "http://localhost:3845/assets/ed344363f894175c709579fa99264dee4a3ecc04.png", name: "event_banner_bg.png" },
  { url: "http://localhost:3845/assets/8081e3812ca94c7f53e2f3dcd17979a55a39e6e4.png", name: "moments_main.png" },
  { url: "http://localhost:3845/assets/b97bf5b2303f2c61c8e14a1c1e59a2c603f05ebe.png", name: "community_hands.png" },
  { url: "http://localhost:3845/assets/f6b269e9af6d49d873732ef8e72f8bc4e7884b5d.png", name: "community_gathering.png" },
  { url: "http://localhost:3845/assets/addc67390678e4938c9fa53c018ddf8083173320.png", name: "event_organic_farming.png" },
  { url: "http://localhost:3845/assets/30987097dd11f0719999ad6c47b3e879e255c813.png", name: "event_health_culture.png" },
  { url: "http://localhost:3845/assets/9c939aab82be2b841459f1655e6ca148ff3f16bc.png", name: "testimonials_bg.png" },
  { url: "http://localhost:3845/assets/f0c3630fba33e7b9b6cbd4f3c29eda746fa59050.png", name: "past_event_1.png" },
  { url: "http://localhost:3845/assets/bfe060656d01ffcfacc8f6099fca379fa5c73d36.png", name: "past_event_2.png" },
  { url: "http://localhost:3845/assets/068855bd15cdcdbf9f9290bc9f58b47ab6bd3f4f.svg", name: "quote_mark.svg" }
];

const dir = path.join(__dirname, 'public', 'event');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

images.forEach((img) => {
  const dest = path.join(dir, img.name);
  const file = fs.createWriteStream(dest);
  https.get(img.url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();  // close() is async, call cb after close completes.
      console.log('Downloaded ' + img.name);
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest, () => {}); // Delete the file async. (But we don't check the result)
    console.error('Error downloading ' + img.name + ': ' + err.message);
  });
});
