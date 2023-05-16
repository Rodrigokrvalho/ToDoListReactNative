import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

interface Props extends TextInputProps {
}

export function Input({ ...rest }: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <TextInput
      {...rest}
      style={[styles.input, isActive && styles.inputActive]}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    />
  );
}