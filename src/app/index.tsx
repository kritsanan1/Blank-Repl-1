
import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from '@/features/authentication/hooks';

export default function IndexScreen() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to Enterprise Expo App</Text>
        <Link href="/auth/login">Go to Login</Link>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome back, {user.name}!</Text>
      <Link href="/(tabs)">Go to Dashboard</Link>
    </View>
  );
}
