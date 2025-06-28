# Quick Setup Guide

## Prerequisites
- Node.js 18+ installed
- MySQL database running
- Git (optional)

## Step-by-Step Setup

### 1. Clone or Download
```bash
# If using git
git clone <repository-url>
cd painting-store

# Or download and extract the ZIP file
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Database
Create a `.env` file in the root directory with your database credentials:

```env
DATABASE_URL="mysql://username:password@localhost:3306/painting_store"
```

Replace `username`, `password`, and `localhost:3306` with your actual MySQL credentials.

### 4. Set Up Database
```bash
# Generate Prisma client
npx prisma generate

# Create database tables
npx prisma migrate dev --name init

# (Optional) Add sample data
npx prisma db seed
```

### 5. Start Development Server
```bash
npm run dev
```

### 6. Open Your Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## What's Included

### Customer Pages
- **Home** (`/`) - Hero banner, featured products, about section
- **Products** (`/products`) - Filterable product catalog
- **Order** (`/order/[productId]`) - Single-product order form
- **About** (`/about`) - Contact information and business hours

### Admin Pages
- **Dashboard** (`/admin`) - Overview and quick actions
- **Products** (`/admin/products`) - Manage paint products
- **Orders** (`/admin/orders`) - View and update order status

## Sample Data
The seed script includes 13 sample paint products in various colors, finishes, and sizes:
- Sky Blue, Warm White, Forest Green, Sunset Orange
- Lavender Mist, Charcoal Gray, Coral Pink, Navy Blue
- Available in 1L, 4L, and 20L sizes
- Emulsion, Gloss, and Satin finishes

## Next Steps
1. Customize the content in the pages
2. Add your actual business information
3. Replace placeholder contact details
4. Add your Google Maps embed code
5. Deploy to Vercel or Netlify

## Troubleshooting

### Database Connection Issues
- Verify your MySQL server is running
- Check your database credentials in `.env`
- Ensure the database exists: `CREATE DATABASE painting_store;`

### Prisma Issues
- Run `npx prisma generate` after schema changes
- Use `npx prisma studio` to view/edit data in browser

### Port Already in Use
- Change the port: `npm run dev -- -p 3001`
- Or kill the process using port 3000

## Support
For issues or questions, check the main README.md file or create an issue in the repository. 