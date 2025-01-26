# Cypher Compliance App

A Next.js-based compliance management application with authentication and dashboard features.

## Project Structure

```
cypher-compliance-app/
├── config/                  # Configuration files
│   ├── eslint/             # ESLint configuration
│   ├── next/               # Next.js configuration
│   ├── postcss/            # PostCSS configuration
│   └── typescript/         # TypeScript configuration
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   │   ├── providers/     # Context providers
│   │   └── ui/           # UI components
│   ├── lib/              # Core business logic
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── tests/                 # Test files
└── docs/                 # Documentation
```

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- PostgreSQL database (for Prisma)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/cypher_compliance"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Email (Resend)
RESEND_API_KEY="your-resend-api-key"
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Next.js 13+ App Router
- Authentication with NextAuth.js
- Prisma ORM for database management
- Modern UI with Tailwind CSS and shadcn/ui
- TypeScript support
- ESLint configuration
- Responsive dashboard layout

## Development

### File Structure Conventions

- Place new pages in `src/app/`
- Add new components in `src/components/`
- Define types in `src/types/`
- Add utility functions in `src/utils/`
- Place core business logic in `src/lib/`

### Best Practices

- Follow TypeScript strict mode guidelines
- Write tests for new features
- Use conventional commits
- Keep components small and focused
- Follow the Next.js App Router conventions

## Testing

```bash
npm run test
# or
yarn test
```

## Deployment

The app is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Set up environment variables
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.