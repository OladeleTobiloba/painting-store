import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Comprehensive color palette with different finishes and sizes
  const colorPalette = [
    { name: 'Absolute Zero', hex_code: '#0048BA', description: 'Deep blue with a professional finish' },
    { name: 'Acid Green', hex_code: '#B0BF1A', description: 'Vibrant acid green for bold statements' },
    { name: 'Aero', hex_code: '#7CB9E8', description: 'Light blue with a fresh, airy feel' },
    { name: 'Aero Blue', hex_code: '#C9FFE5', description: 'Soft mint blue for calming spaces' },
    { name: 'African Violet', hex_code: '#B284BE', description: 'Rich purple with elegant undertones' },
    { name: 'Air Superiority Blue', hex_code: '#72A0C1', description: 'Military-inspired blue-gray' },
    { name: 'Alabama Crimson', hex_code: '#AF002A', description: 'Deep crimson red for dramatic accents' },
    { name: 'Alabaster', hex_code: '#F2F0E6', description: 'Pure white with subtle warmth' },
    { name: 'Alice Blue', hex_code: '#F0F8FF', description: 'Very light blue with a hint of warmth' },
    { name: 'Alloy Orange', hex_code: '#C46210', description: 'Rich orange with metallic undertones' },
    { name: 'Almond', hex_code: '#EFDECD', description: 'Warm beige with natural appeal' },
    { name: 'Aloeswood Brown', hex_code: '#5A6457', description: 'Deep brown with green undertones' },
    { name: 'Aloewood Color', hex_code: '#6A432D', description: 'Rich brown with red undertones' },
    { name: 'Amaranth', hex_code: '#E52B50', description: 'Bright pink-red for bold statements' },
    { name: 'Amaranth Deep Purple', hex_code: '#9F2B68', description: 'Deep purple with pink undertones' },
    { name: 'Amaranth Pink', hex_code: '#F19CBB', description: 'Soft pink with romantic appeal' },
    { name: 'Amaranth Purple', hex_code: '#AB274F', description: 'Purple-red for sophisticated spaces' },
    { name: 'Amaranth Red', hex_code: '#D3212D', description: 'Classic red with modern appeal' },
    { name: 'Amazon', hex_code: '#3B7A57', description: 'Deep green inspired by rainforest' },
    { name: 'Amber', hex_code: '#FFBF00', description: 'Golden amber for warm, inviting spaces' },
    { name: 'Amber Kohaku', hex_code: '#CA6924', description: 'Traditional Japanese amber' },
    { name: 'Amber SAE', hex_code: '#FF7E00', description: 'Bright amber for safety and visibility' },
    { name: 'Amethyst', hex_code: '#9966CC', description: 'Purple with crystal-like clarity' },
    { name: 'Amur Cork Tree', hex_code: '#F3C13A', description: 'Golden yellow with natural warmth' },
    { name: 'Anti-Flash White', hex_code: '#F2F3F4', description: 'Pure white with blue undertones' },
    { name: 'Antique Brass', hex_code: '#CD9575', description: 'Warm brass with vintage appeal' },
    { name: 'Antique Bronze', hex_code: '#665D1E', description: 'Deep bronze with antique character' },
    { name: 'Antique Fuchsia', hex_code: '#915C83', description: 'Muted pink with vintage charm' },
    { name: 'Antique Ruby', hex_code: '#841B2D', description: 'Deep red with antique character' },
    { name: 'Antique White', hex_code: '#FAEBD7', description: 'Warm white with vintage appeal' },
    { name: 'Apple', hex_code: '#66B447', description: 'Fresh green inspired by Granny Smith apples' },
    { name: 'Apple Green', hex_code: '#8DB600', description: 'Bright green with natural vibrancy' },
    { name: 'Apricot', hex_code: '#FBCEB1', description: 'Soft peach with warm undertones' },
    { name: 'Aqua', hex_code: '#00FFFF', description: 'Bright cyan for modern, clean spaces' },
    { name: 'Aqua Blue Mizu', hex_code: '#86ABA5', description: 'Japanese-inspired water blue' },
    { name: 'Aquamarine', hex_code: '#7FFFD4', description: 'Ocean-inspired blue-green' },
    { name: 'Arctic Lime', hex_code: '#D0FF14', description: 'Bright lime for energetic spaces' },
    { name: 'Army Green', hex_code: '#4B5320', description: 'Military green with natural appeal' },
    { name: 'Artichoke', hex_code: '#8F9779', description: 'Muted green with sophisticated appeal' },
    { name: 'Arylide Yellow', hex_code: '#E9D66B', description: 'Warm yellow with artistic appeal' },
    { name: 'Ash Gray', hex_code: '#B2BEB5', description: 'Cool gray with natural undertones' },
    { name: 'Asparagus', hex_code: '#87A96B', description: 'Fresh green inspired by spring vegetables' },
    { name: 'Auburn', hex_code: '#6D351A', description: 'Rich brown-red for warm, inviting spaces' },
    { name: 'Aureolin', hex_code: '#FDEE00', description: 'Bright yellow with golden undertones' },
    { name: 'AuroMetalSaurus', hex_code: '#6E7F80', description: 'Metallic gray with blue undertones' },
    { name: 'Avocado', hex_code: '#568203', description: 'Deep green inspired by ripe avocados' },
    { name: 'Awesome', hex_code: '#FF2052', description: 'Bright pink-red for bold statements' },
    { name: 'Axolotl', hex_code: '#63775B', description: 'Muted green with natural character' },
    { name: 'Azure', hex_code: '#007FFF', description: 'Bright blue with sky-like clarity' },
    { name: 'B\'dazzled Blue', hex_code: '#2E5894', description: 'Deep blue with sophisticated appeal' },
    { name: 'Baby Blue', hex_code: '#89CFF0', description: 'Soft blue perfect for nurseries' },
    { name: 'Baby Blue Eyes', hex_code: '#A1CAF1', description: 'Light blue with gentle appeal' },
    { name: 'Baby Pink', hex_code: '#F4C2C2', description: 'Soft pink perfect for gentle spaces' },
    { name: 'Baby Powder', hex_code: '#FEFEFA', description: 'Ultra-light white with subtle warmth' },
    { name: 'Baiko Brown', hex_code: '#857C55', description: 'Traditional Japanese brown' },
    { name: 'Baker-Miller Pink', hex_code: '#FF91AF', description: 'Soft pink with calming properties' },
    { name: 'Ball Blue', hex_code: '#21ABCD', description: 'Bright blue with energetic appeal' },
    { name: 'Banana Mania', hex_code: '#FAE7B5', description: 'Warm yellow with playful character' },
    { name: 'Banana Yellow', hex_code: '#FFE135', description: 'Bright yellow inspired by ripe bananas' },
    { name: 'Bangladesh Green', hex_code: '#006A4E', description: 'Deep green with cultural significance' },
    { name: 'Barbie Pink', hex_code: '#E94196', description: 'Bright pink with playful appeal' },
    { name: 'Barbie Pink Pantone', hex_code: '#E0218A', description: 'Official Barbie pink color' },
    { name: 'Barn Red', hex_code: '#7C0A02', description: 'Deep red inspired by traditional barns' },
    { name: 'Battleship Grey', hex_code: '#848482', description: 'Neutral gray with industrial appeal' },
    { name: 'Bayside', hex_code: '#5FC9BF', description: 'Fresh teal inspired by coastal waters' },
    { name: 'Bazaar', hex_code: '#98777B', description: 'Muted rose with sophisticated appeal' },
    { name: 'Beau Blue', hex_code: '#BCD4E6', description: 'Soft blue with gentle character' },
    { name: 'Beaver', hex_code: '#9F8170', description: 'Warm brown with natural appeal' },
    { name: 'Beer', hex_code: '#F28E1C', description: 'Golden amber inspired by craft beer' },
    { name: 'Begonia', hex_code: '#FA6E79', description: 'Soft coral with romantic appeal' },
    { name: 'Beige', hex_code: '#F5F5DC', description: 'Classic beige for timeless appeal' },
    { name: 'Bellflower Color', hex_code: '#5D3F6A', description: 'Traditional Japanese purple' },
    { name: 'Betel Nut Dye', hex_code: '#352925', description: 'Deep brown with traditional appeal' },
    { name: 'Big Foot Feet', hex_code: '#E88E5A', description: 'Warm orange with playful character' },
    { name: 'Big Dip O\'Ruby', hex_code: '#9C2542', description: 'Deep ruby red for dramatic spaces' },
    { name: 'Birch Brown', hex_code: '#B14A30', description: 'Warm brown inspired by birch bark' },
    { name: 'Bisque', hex_code: '#FFE4C4', description: 'Soft cream with warm undertones' },
    { name: 'Bistre', hex_code: '#3D2B1F', description: 'Deep brown with artistic appeal' },
    { name: 'Bistre Brown', hex_code: '#967117', description: 'Rich brown with golden undertones' },
    { name: 'Bitcoin Grey', hex_code: '#4D4D4E', description: 'Modern gray with tech appeal' },
    { name: 'Bitcoin Orange', hex_code: '#F2A900', description: 'Bright orange inspired by cryptocurrency' },
    { name: 'Bitter Lemon', hex_code: '#CAE00D', description: 'Bright yellow-green with citrus appeal' },
    { name: 'Bitter Lime', hex_code: '#BFFF00', description: 'Neon lime for bold statements' },
    { name: 'Bittersweet', hex_code: '#FE6F5E', description: 'Warm coral with energetic appeal' },
    { name: 'Bittersweet Shimmer', hex_code: '#BF4F51', description: 'Muted coral with sophisticated appeal' },
    { name: 'Black', hex_code: '#171412', description: 'Pure black for dramatic contrast' },
    { name: 'Black Shadows', hex_code: '#BFAFB2', description: 'Soft gray with subtle warmth' },
    { name: 'Black Bean', hex_code: '#3D0C02', description: 'Deep brown-black with rich character' },
    { name: 'Black Chestnut Oak', hex_code: '#252321', description: 'Deep brown with natural appeal' },
    { name: 'Black Chocolate', hex_code: '#1B1811', description: 'Rich brown-black with chocolate undertones' },
    { name: 'Black Coffee', hex_code: '#3B2F2F', description: 'Deep brown inspired by strong coffee' },
    { name: 'Black Coral', hex_code: '#54626F', description: 'Cool gray with blue undertones' },
    { name: 'Black Kite', hex_code: '#351E1C', description: 'Deep brown with traditional appeal' },
    { name: 'Black Leather Jacket', hex_code: '#253529', description: 'Deep green-black with sophisticated appeal' },
    { name: 'Black Olive', hex_code: '#3B3C36', description: 'Muted green with olive undertones' },
    { name: 'Blanched Almond', hex_code: '#FFEBCD', description: 'Soft cream with almond undertones' },
    { name: 'Blast-Off Bronze', hex_code: '#A57164', description: 'Warm bronze with metallic appeal' },
    { name: 'Bleu de France', hex_code: '#318CE7', description: 'Classic French blue with cultural significance' },
    { name: 'Blizzard Blue', hex_code: '#ACE5EE', description: 'Light blue with icy undertones' },
    { name: 'Blond', hex_code: '#FAF0BE', description: 'Soft yellow with natural warmth' },
    { name: 'Blood', hex_code: '#8A0303', description: 'Deep red with dramatic appeal' },
    { name: 'Blue', hex_code: '#0000FF', description: 'Classic blue for timeless appeal' },
    { name: 'Blue Crayola', hex_code: '#1F75FE', description: 'Bright blue inspired by Crayola crayons' },
    { name: 'Blue Munsell', hex_code: '#0093AF', description: 'Sophisticated blue with green undertones' }
  ]

  const finishes = ['Emulsion', 'Satin', 'Gloss'] as const
  const sizes = ['OneL', 'FourL', 'TwentyL'] as const
  
  // Base prices for different sizes
  const basePrices = {
    'OneL': 25,
    'FourL': 85,
    'TwentyL': 350
  }

  // Finish multipliers
  const finishMultipliers = {
    'Emulsion': 1.0,
    'Satin': 1.2,
    'Gloss': 1.4
  }

  let productCount = 0

  for (const color of colorPalette) {
    for (const finish of finishes) {
      for (const size of sizes) {
        const basePrice = basePrices[size]
        const finishMultiplier = finishMultipliers[finish]
        const price = basePrice * finishMultiplier

        await prisma.product.create({
          data: {
            name: color.name,
            description: color.description,
            hex_code: color.hex_code,
            finish: finish,
            size: size,
            price: Math.round(price * 100) / 100 // Round to 2 decimal places
          }
        })
        productCount++
      }
    }
  }

  console.log('Database seeded successfully!')
  console.log(`Created ${productCount} products from ${colorPalette.length} colors`)
}

// Clean up products with missing or invalid hex_code
async function cleanInvalidHexCodes() {
  const allProducts = await prisma.product.findMany();
  const invalidProducts = allProducts.filter(p => !p.hex_code || !/^#([0-9A-Fa-f]{3}){1,2}$/.test(p.hex_code));
  for (const prod of invalidProducts) {
    await prisma.product.delete({ where: { product_id: prod.product_id } });
    console.log(`Deleted product with id ${prod.product_id} due to invalid hex_code: ${prod.hex_code}`);
  }
  if (invalidProducts.length === 0) {
    console.log('No products with missing or invalid hex_code found.');
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await cleanInvalidHexCodes();
    await prisma.$disconnect()
  }) 