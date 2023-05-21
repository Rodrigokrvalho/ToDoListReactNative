import { StyleSheet } from 'react-native';
import { colors } from '../../../globalstyles';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.gray300,
    fontWeight: '500',
    marginTop: 16
  },
  subtitle: {
    color: colors.gray300,
    fontWeight: '300'
  }
});