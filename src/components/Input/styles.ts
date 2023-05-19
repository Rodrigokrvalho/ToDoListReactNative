import { StyleSheet } from "react-native";
import { colors } from '../../globalstyles';

export const styles = StyleSheet.create({
  input: {
    width: 300,
    padding: 12,
    fontSize: 18,
    borderRadius: 6,
    backgroundColor: colors.gray500,
    color: colors.gray100,
  },
  inputActive: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.purple700,
  }
});