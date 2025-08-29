
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '@/theme';
import { LoginCredentials } from '@/shared/types';

export const LoginScreen: React.FC = () => {
  const { theme } = useTheme();
  const { login, isLoading, error } = useAuth();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    if (!credentials.email || !credentials.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const result = await login(credentials);
    if (result.meta.requestStatus === 'fulfilled') {
      router.replace('/(tabs)/dashboard');
    }
  };

  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>

        {error && <Text style={styles.error}>{error}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={theme.colors.textSecondary}
          value={credentials.email}
          onChangeText={(email) => setCredentials({ ...credentials, email })}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={theme.colors.textSecondary}
          value={credentials.password}
          onChangeText={(password) => setCredentials({ ...credentials, password })}
          secureTextEntry
        />

        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      paddingHorizontal: theme.spacing[6],
    },
    form: {
      backgroundColor: theme.colors.surface,
      padding: theme.spacing[6],
      borderRadius: theme.borderRadius.lg,
      ...theme.shadows.base,
    },
    title: {
      fontSize: theme.typography.fontSize['2xl'],
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: theme.spacing[2],
    },
    subtitle: {
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginBottom: theme.spacing[6],
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.gray[300],
      borderRadius: theme.borderRadius.base,
      padding: theme.spacing[3],
      fontSize: theme.typography.fontSize.base,
      color: theme.colors.text,
      marginBottom: theme.spacing[4],
      backgroundColor: theme.colors.background,
    },
    button: {
      backgroundColor: theme.colors.primary[500],
      padding: theme.spacing[4],
      borderRadius: theme.borderRadius.base,
      alignItems: 'center',
    },
    buttonDisabled: {
      opacity: 0.6,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: theme.typography.fontSize.base,
      fontWeight: theme.typography.fontWeight.semibold,
    },
    error: {
      color: theme.colors.error[500],
      textAlign: 'center',
      marginBottom: theme.spacing[4],
    },
  });
