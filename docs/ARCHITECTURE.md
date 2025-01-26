# Architecture Overview

## Tech Stack

- **Frontend**: Next.js 13+ with App Router
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **UI**: Tailwind CSS with shadcn/ui components
- **Form Handling**: React Hook Form with Zod validation
- **Email**: Resend for transactional emails

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   └── auth/              # Authentication pages
├── components/            # React components
│   ├── providers/         # Context providers
│   └── ui/               # UI components
├── lib/                   # Core business logic
│   ├── auth.ts           # Authentication configuration
│   ├── constants.ts      # Application constants
│   ├── prisma.ts         # Database client
│   ├── utils.ts          # Utility functions
│   └── validations.ts    # Zod schemas
├── types/                 # TypeScript types
└── utils/                # Utility functions
```

## Key Components

### Authentication

Authentication is handled by NextAuth.js with multiple providers:
- Google OAuth
- GitHub OAuth
- Email Magic Links

The configuration is in `src/lib/auth.ts`.

### Database

We use Prisma as our ORM with PostgreSQL. The schema is defined in `prisma/schema.prisma`.

### API Routes

API routes are organized under `src/app/api/` following the Next.js App Router convention.

### Frontend Components

UI components are built using shadcn/ui and styled with Tailwind CSS. They are organized in:
- `src/components/ui/`: Reusable UI components
- `src/components/providers/`: Context providers

## Development Workflow

1. **Database Changes**
   - Edit `prisma/schema.prisma`
   - Run `npm run db:generate`
   - Run `npm run db:push`

2. **New Features**
   - Add new routes in `src/app/`
   - Create components in `src/components/`
   - Add types in `src/types/`
   - Add business logic in `src/lib/`

3. **Testing**
   - Write tests alongside components
   - Run `npm run test`

## Deployment

The application is designed to be deployed on Vercel:
1. Push to GitHub
2. Connect to Vercel
3. Configure environment variables
4. Deploy

## Security Considerations

- Environment variables for sensitive data
- Authentication state management
- API route protection
- Database access control
- Input validation with Zod
- CORS configuration
- Rate limiting on API routes

## Performance Optimization

- Static page generation where possible
- Dynamic imports for large components
- Image optimization with Next.js Image
- API route caching
- Database query optimization
