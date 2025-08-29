
import React from 'react';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { store } from '@/store';
import { ThemeProvider } from '@/theme';
import { ErrorBoundary } from '@/components';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <ErrorBoundary>
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            />
            <StatusBar style="auto" />
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
