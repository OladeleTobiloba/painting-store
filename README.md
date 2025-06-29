# Paint Store Website

A modern, mobile-first website for a local paint retailer built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Customer Features
- **Home Page**: Hero banner, featured categories, popular colors, about section, and clear CTAs
- **Products Page**: Filterable product listing with color swatches, finish types, and sizes
- **Order System**: Single-product order form with customer details and delivery information
- **About Page**: Company information, business hours, contact details, and Google Maps integration
- **Responsive Design**: Mobile-first design that works on all devices

### Admin Features
- **Product Management**: CRUD operations for paint products
- **Order Management**: View and update order status (New, Processing, Completed)
- **Dashboard**: Overview of products, orders, and recent activity
- **No Authentication Required**: Simple single-admin setup

## Tech Stack

- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes with Node.js
- **Database**: MySQL with Prisma ORM
- **Styling**: Tailwind CSS for responsive design
- **Deployment**: Vercel/Netlify ready

## Prerequisites

- Node.js 18+ 
- MySQL database
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd painting-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="mysql://username:password@localhost:3306/painting_store"
   
   # Email configuration (optional)
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT=587
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   
   # Admin email for notifications
   ADMIN_EMAIL="admin@paintingstore.com"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   
   # (Optional) Seed the database with sample data
   npx prisma db seed
   ```

5. **Start the development server**
```bash
npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Schema

### Products Table
- `product_id` (Primary Key)
- `name` - Product name
- `description` - Product description
- `hex_code` - Color hex code
- `finish` - Paint finish (Emulsion, Gloss, Satin)
- `size` - Container size (1L, 4L, 20L)
- `price` - Product price
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

### Orders Table
- `order_id` (Primary Key)
- `product_id` (Foreign Key to Products)
- `size` - Ordered size
- `quantity` - Number of units
- `customer_name` - Customer's name
- `phone` - Customer's phone number
- `address` - Delivery address
- `comment` - Optional order notes
- `status` - Order status (New, Processing, Completed)
- `created_at` - Order timestamp

## API Endpoints

### Products
- `GET /api/products` - Get all products (with optional filters)
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/[id]` - Update product (admin)
- `DELETE /api/products/[id]` - Delete product (admin)

### Orders
- `GET /api/orders` - Get all orders (with optional status filter)
- `POST /api/orders` - Create new order
- `PUT /api/orders/[id]` - Update order status (admin)

## Pages Structure

```
src/app/
├── page.tsx                 # Home page
├── products/
│   └── page.tsx            # Products listing
├── order/
│   └── [productId]/
│       └── page.tsx        # Order form
├── about/
│   └── page.tsx            # About/Contact page
├── admin/
│   ├── page.tsx            # Admin dashboard
│   ├── products/
│   │   └── page.tsx        # Product management
│   └── orders/
│       └── page.tsx        # Order management
└── api/                    # API routes
    ├── products/
    │   ├── route.ts
    │   └── [id]/
    │       └── route.ts
    └── orders/
        ├── route.ts
        └── [id]/
            └── route.ts
```

## Customization

### Adding New Paint Finishes
1. Update the `Finish` enum in `prisma/schema.prisma`
2. Run `npx prisma migrate dev`
3. Update the frontend components to include the new finish

### Adding New Sizes
1. Update the `Size` enum in `prisma/schema.prisma`
2. Run `npx prisma migrate dev`
3. Update the frontend components to include the new size

### Styling
The website uses Tailwind CSS. You can customize the design by:
- Modifying the color scheme in `tailwind.config.js`
- Updating component styles in the respective `.tsx` files
- Adding custom CSS in `src/app/globals.css`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy

### Environment Variables for Production
Make sure to set these in your hosting platform:
- `DATABASE_URL` - Your production MySQL database URL
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` - Email configuration
- `ADMIN_EMAIL` - Admin notification email

## Sample Data

You can add sample products to test the website:

```sql
INSERT INTO Products (name, description, hex_code, finish, size, price) VALUES
('Sky Blue', 'Perfect for bedrooms and bathrooms', '#87CEEB', 'Emulsion', 'OneL', 25.99),
('Warm White', 'Classic white for any room', '#F5F5DC', 'Emulsion', 'OneL', 22.99),
('Forest Green', 'Rich green for accent walls', '#228B22', 'Satin', 'OneL', 28.99),
('Sunset Orange', 'Vibrant orange for creative spaces', '#FF7F50', 'Gloss', 'OneL', 32.99);
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact [your-email@example.com](mailto:your-email@example.com)

---

**Note**: This is a single-admin system designed for small businesses. For multi-user environments, additional authentication and authorization should be implemented.
