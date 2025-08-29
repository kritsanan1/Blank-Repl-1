
import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { theme, lightColors, darkColors, Theme } from './theme';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme,
  isDark: false,
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const currentTheme = {
    ...theme,
    colors: isDark ? darkColors : lightColors,
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export * from './theme';
