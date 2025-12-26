# DigitalSeba - Digital Marketplace

## Overview

DigitalSeba is a digital marketplace web application targeting Bangladesh, selling premium digital subscriptions, domains, hosting, and software products. The platform offers various product categories including streaming services (Netflix, Spotify), AI tools (ChatGPT, Claude), design software (Canva, Figma), professional tools (LinkedIn Premium), and more.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and animations
- **State Management**: React Context API for cart functionality, TanStack Query for server state
- **Routing**: React Router DOM for client-side navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Development Mode**: Vite middleware integration for HMR (Hot Module Replacement)
- **Production Mode**: Static file serving from compiled dist folder
- **API Pattern**: RESTful endpoints under `/api` prefix

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL schema definitions
- **Schema Validation**: Zod with drizzle-zod integration
- **Current Storage**: In-memory storage class (MemStorage) - designed to be swapped with database implementation

### Project Structure
```
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle database schemas
├── src/              # React frontend
│   ├── components/   # UI components
│   ├── contexts/     # React contexts (CartContext)
│   ├── hooks/        # Custom hooks
│   ├── pages/        # Route page components
│   └── lib/          # Utility functions
```

### Key Design Patterns
- **Component-based architecture**: Reusable UI components with consistent styling
- **Category-based routing**: Separate pages for each product category (streaming, AI tools, design, etc.)
- **Shopping cart**: Context-based cart management with sidebar drawer
- **Responsive design**: Mobile-first approach with responsive breakpoints

## External Dependencies

### Core Libraries
- **@tanstack/react-query**: Server state management and data fetching
- **react-router-dom**: Client-side routing
- **framer-motion**: Animation library
- **drizzle-orm**: TypeScript ORM for database operations
- **zod**: Runtime type validation

### UI Framework
- **@radix-ui/***: Accessible UI primitives (dialog, dropdown, tabs, etc.)
- **class-variance-authority**: Component variant management
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type safety
- **tsx**: TypeScript execution for Node.js

### External APIs
- **RDAP (rdap.org)**: Domain availability checking API used in the hero banner

### Database
- PostgreSQL schema defined but currently using in-memory storage - ready for Postgres integration when database is provisioned