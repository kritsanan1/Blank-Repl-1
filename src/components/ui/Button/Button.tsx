
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from '@/theme';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  disabled,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const buttonStyle = [
    styles.base,
    styles[variant],
    styles[`size_${size}`],
    (disabled || loading) && styles.disabled,
    style,
  ];

  const textStyle = [
    styles.text,
    styles[`text_${variant}`],
    styles[`textSize_${size}`],
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? '#ffffff' : theme.colors.primary[500]}
        />
      ) : (
        <Text style={textStyle}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    base: {
      borderRadius: theme.borderRadius.base,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    primary: {
      backgroundColor: theme.colors.primary[500],
    },
    secondary: {
      backgroundColor: theme.colors.gray[200],
      borderWidth: 1,
      borderColor: theme.colors.gray[300],
    },
    ghost: {
      backgroundColor: 'transparent',
    },
    danger: {
      backgroundColor: theme.colors.error[500],
    },
    disabled: {
      opacity: 0.6,
    },
    size_sm: {
      paddingVertical: theme.spacing[2],
      paddingHorizontal: theme.spacing[3],
    },
    size_md: {
      paddingVertical: theme.spacing[3],
      paddingHorizontal: theme.spacing[4],
    },
    size_lg: {
      paddingVertical: theme.spacing[4],
      paddingHorizontal: theme.spacing[6],
    },
    text: {
      fontWeight: theme.typography.fontWeight.medium,
      textAlign: 'center',
    },
    text_primary: {
      color: '#ffffff',
    },
    text_secondary: {
      color: theme.colors.text,
    },
    text_ghost: {
      color: theme.colors.primary[500],
    },
    text_danger: {
      color: '#ffffff',
    },
    textSize_sm: {
      fontSize: theme.typography.fontSize.sm,
    },
    textSize_md: {
      fontSize: theme.typography.fontSize.base,
    },
    textSize_lg: {
      fontSize: theme.typography.fontSize.lg,
    },
  });
