
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    REGISTER: '/auth/register',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
  },
} as const;

export const APP_CONSTANTS = {
  APP_NAME: 'Enterprise Expo App',
  VERSION: '1.0.0',
  SUPPORT_EMAIL: 'support@company.com',
} as const;

export const NAVIGATION_CONSTANTS = {
  SCREENS: {
    LOGIN: 'login',
    DASHBOARD: 'dashboard',
    PROFILE: 'profile',
    SETTINGS: 'settings',
  },
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: '@auth_token',
  REFRESH_TOKEN: '@refresh_token',
  USER_PREFERENCES: '@user_preferences',
} as const;
