
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@/components': './src/components',
            '@/features': './src/features',
            '@/shared': './src/shared',
            '@/theme': './src/theme',
            '@/store': './src/store',
            '@/navigation': './src/navigation',
            '@/services': './src/services',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
