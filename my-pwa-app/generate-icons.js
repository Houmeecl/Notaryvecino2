import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const iconSizes = [
  { size: 64, name: 'pwa-64x64.png' },
  { size: 192, name: 'pwa-192x192.png' },
  { size: 512, name: 'pwa-512x512.png' },
  { size: 512, name: 'maskable-icon-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 16, name: 'favicon-16x16.png' }
];

const svgPath = path.join(process.cwd(), 'public', 'app-icon.svg');
const publicDir = path.join(process.cwd(), 'public');

async function generateIcons() {
  console.log('🎨 Generando iconos PWA...');
  
  if (!fs.existsSync(svgPath)) {
    console.error('❌ No se encontró app-icon.svg');
    return;
  }
  
  for (const icon of iconSizes) {
    try {
      await sharp(svgPath)
        .resize(icon.size, icon.size)
        .png()
        .toFile(path.join(publicDir, icon.name));
      
      console.log(`✅ Generado: ${icon.name} (${icon.size}x${icon.size})`);
    } catch (error) {
      console.error(`❌ Error generando ${icon.name}:`, error.message);
    }
  }
  
  // Generar favicon.ico
  try {
    await sharp(svgPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
    
    console.log('✅ Generado: favicon.ico');
  } catch (error) {
    console.error('❌ Error generando favicon.ico:', error.message);
  }
  
  console.log('🎉 ¡Todos los iconos PWA generados correctamente!');
}

generateIcons().catch(console.error);