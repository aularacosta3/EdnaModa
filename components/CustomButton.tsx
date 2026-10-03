import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet, ActivityIndicator } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
}

export const CustomButton = ({
  title,
  variant = 'primary',
  isLoading,
  style,
  ...restProps
}: CustomButtonProps) => {
  const buttonStyle = [styles.baseButton, styles[variant], style];

  return (
    <TouchableOpacity style={buttonStyle} {...restProps}>
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: 'blue',
    color: 'white',
  },
  secondary: {
    backgroundColor: 'gray',
    color: 'white',
  },
  danger: {
    backgroundColor: 'red',
    color: 'white',
  },
});