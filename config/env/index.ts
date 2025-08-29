
interface AppConfig {
  apiUrl: string;
  analyticsKey: string;
  debugMode: boolean;
  environment: 'development' | 'staging' | 'production';
}

const configs: Record<string, AppConfig> = {
  development: {
    apiUrl: 'https://api-dev.company.com/v1',
    analyticsKey: 'dev-analytics-key',
    debugMode: true,
    environment: 'development',
  },
  staging: {
    apiUrl: 'https://api-staging.company.com/v1',
    analyticsKey: 'staging-analytics-key',
    debugMode: false,
    environment: 'staging',
  },
  production: {
    apiUrl: 'https://api.company.com/v1',
    analyticsKey: 'prod-analytics-key',
    debugMode: false,
    environment: 'production',
  },
};

export const getConfig = (): AppConfig => {
  const env = process.env.NODE_ENV || 'development';
  return configs[env] || configs.development;
};

export default getConfig;
