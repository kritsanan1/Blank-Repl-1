
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Add custom resolver for path mapping
config.resolver.alias = {
  '@': './src',
  '@/components': './src/components',
  '@/features': './src/features',
  '@/shared': './src/shared',
  '@/theme': './src/theme',
  '@/store': './src/store',
  '@/navigation': './src/navigation',
  '@/services': './src/services',
};

module.exports = config;
