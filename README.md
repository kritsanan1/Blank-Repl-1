# Blank App

This is a blank app. See our [app configuration docs](https://docs.replit.com/replit-app/configuration#replit-app-configuration) for more information on how to configure it. Or visit the Dependencies pane to add languages, language packages, and system packages.
# Enterprise Expo React Native Application

A comprehensive, enterprise-grade React Native application built with Expo, featuring a scalable architecture designed for large-scale production applications.

## 🏗️ Architecture Overview

This application follows a **feature-based architecture** with clear separation of concerns:

- **Features**: Self-contained modules (authentication, dashboard, profile)
- **Components**: Reusable UI components with design system
- **Shared**: Common utilities, types, constants, and API clients
- **Store**: Global state management with Redux Toolkit
- **Theme**: Comprehensive design system with light/dark mode

## 📁 Project Structure

```
src/
├── app/                    # Expo Router file-based routing
├── components/            # Reusable UI components
│   ├── ui/               # Design system components
│   ├── forms/            # Form components
│   ├── navigation/       # Navigation components
│   └── feedback/         # Loading, error components
├── features/             # Feature modules
│   ├── authentication/
│   ├── dashboard/
│   └── profile/
├── shared/               # Shared utilities
│   ├── api/             # API clients and configuration
│   ├── constants/       # Application constants
│   ├── hooks/           # Shared custom hooks
│   ├── types/           # TypeScript definitions
│   └── utils/           # Utility functions
├── store/                # Redux store configuration
├── theme/                # Design system and theming
└── services/             # External service integrations
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## 🎯 Key Features

### 🔐 Authentication
- Secure login/logout with JWT tokens
- Token refresh handling
- Protected routes
- Biometric authentication support

### 🎨 Design System
- Comprehensive theme system
- Light/dark mode support
- Consistent spacing and typography
- Reusable UI components

### 📱 Navigation
- File-based routing with Expo Router
- Tab navigation
- Stack navigation
- Deep linking support

### 🔄 State Management
- Redux Toolkit for global state
- Feature-based slices
- Persistent storage
- Type-safe selectors and actions

### 🌐 API Integration
- Centralized HTTP client
- Request/response interceptors
- Error handling
- Loading states

### 🧪 Testing
- Unit tests with Jest
- Component testing with React Native Testing Library
- Test utilities and mocks
- CI/CD integration

## 📚 Development Guidelines

### Component Structure
Each component follows this structure:
```
Component/
├── Component.tsx         # Main component
├── Component.test.tsx    # Unit tests
├── Component.stories.tsx # Storybook stories
└── index.ts             # Exports
```

### Feature Module Structure
Each feature is self-contained:
```
feature/
├── components/          # Feature-specific components
├── hooks/              # Feature hooks
├── services/           # API calls
├── store/              # Redux slice
├── types/              # TypeScript types
├── utils/              # Feature utilities
└── index.ts            # Exports
```

### Naming Conventions
- **Components**: PascalCase (`UserProfile.tsx`)
- **Hooks**: camelCase with `use` prefix (`useUserProfile.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_ENDPOINTS`)
- **Types**: PascalCase with type suffix (`User.types.ts`)

## 🔧 Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run type-check` - TypeScript type checking
- `npm run build:dev` - Build for development
- `npm run build:prod` - Build for production

## 🚀 Deployment

This app supports deployment to:
- **Replit** - Direct deployment from this environment
- **Expo Application Services (EAS)** - Build and submit to app stores
- **Web** - Deploy as PWA

### Build Profiles
- **Development**: Development builds with debugging
- **Staging**: Internal testing builds
- **Production**: App store releases

## 📦 Dependencies

### Core
- **Expo** - Development platform
- **React Native** - Mobile framework
- **Expo Router** - File-based routing
- **TypeScript** - Type safety

### State Management
- **Redux Toolkit** - State management
- **Redux Persist** - State persistence

### UI & Styling
- **React Native Safe Area Context** - Safe area handling
- **Expo Vector Icons** - Icon library

### API & Data
- **Axios** - HTTP client
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Testing
- **Jest** - Testing framework
- **React Native Testing Library** - Component testing

## 🤝 Contributing

1. Follow the established architecture patterns
2. Write tests for new features
3. Use TypeScript for type safety
4. Follow the naming conventions
5. Document complex logic

## 📄 License

This project is licensed under the MIT License.
