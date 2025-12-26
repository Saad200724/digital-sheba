# DigitalSeba - Digital Marketplace

## Overview

DigitalSeba is a digital marketplace web application targeting Bangladesh, offering premium digital subscriptions, domains, hosting, and software products. The platform provides a modern e-commerce experience for selling digital products like streaming subscriptions (Netflix, Spotify), AI tools (ChatGPT, Midjourney), design software (Canva, Figma), professional tools (LinkedIn Premium), and web hosting services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router DOM for client-side navigation with category-based pages (Streaming, AI Tools, Design, Software, Hosting, etc.)
- **State Management**: React Context API for cart functionality, TanStack React Query for server state
- **Styling**: Tailwind CSS with custom design system, using CSS custom properties for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Animations**: Framer Motion for smooth transitions and micro-interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Development**: Vite middleware integration for HMR during development
- **Production**: Static file serving from built assets
- **API Pattern**: RESTful endpoints under `/api` prefix

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL schema definitions
- **Schema Validation**: Zod with drizzle-zod for type-safe schema validation
- **Current Storage**: In-memory storage implementation (MemStorage class) - ready for database migration

### Project Structure
```
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Data storage abstraction
│   └── vite.ts      # Vite dev server integration
├── src/             # React frontend
│   ├── components/  # Reusable UI components
│   ├── pages/       # Route-based page components
│   ├── contexts/    # React Context providers (Cart)
│   ├── hooks/       # Custom React hooks
│   └── lib/         # Utility functions
├── shared/          # Shared code between frontend/backend
│   └── schema.ts    # Drizzle database schema
```

### Key Design Patterns
- **Component Composition**: Product cards, sections, and layouts are composable
- **Context Pattern**: Cart state managed globally via CartContext
- **Storage Abstraction**: IStorage interface allows swapping between in-memory and database implementations
- **Responsive Design**: Mobile-first approach with sidebar navigation

## External Dependencies

### UI Framework
- Radix UI (full primitive set for dialogs, dropdowns, tooltips, etc.)
- shadcn/ui component library built on Radix
- Lucide React for icons
- Embla Carousel for product carousels

### Data & Forms
- TanStack React Query for async state management
- React Hook Form with Zod resolvers for form validation
- Drizzle ORM for database operations (PostgreSQL ready)

### External APIs
- RDAP domain availability checking (`rdap.org/domain/`)
- Social integrations: WhatsApp, Telegram contact links

### Payment Methods (UI Ready)
- bKash, Nagad, Rocket (Bangladesh mobile payments)
- Bank transfers, card payments (integration pending)

### Third-Party Services Referenced
- Domain registrars: Hostinger, Namecheap, GoDaddy, Name.com
- Hosting providers: Hostinger, Namecheap, Bluehost, SiteGround, Cloudflare
- Product images served from Wikimedia Commons