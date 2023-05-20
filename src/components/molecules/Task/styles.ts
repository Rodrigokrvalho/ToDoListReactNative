import { StyleSheet } from 'react-native';
import { colors } from '../../../globalstyles';
export const styles = StyleSheet.create({
  container: {
    width: 360,
    margin: 6,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: colors.gray500,
    borderWidth: 1,
    borderColor: colors.gray400
  },
  text: {
    color: colors.gray100,
    width: 240,
    marginHorizontal: 12,
  },
  completed: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
    color: colors.gray300
  }
});