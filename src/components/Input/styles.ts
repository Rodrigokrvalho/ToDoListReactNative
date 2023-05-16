import { StyleSheet } from "react-native";
import { colors } from '../../globalstyles';

export const styles = StyleSheet.create({
  input: {
    width: 300,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 18,
    backgroundColor: colors.gray500,
    color: colors.gray100,
    borderRadius: 8
  },
  inputActive: {
    borderColor: colors.purple700,
    borderStyle: "solid",
    borderWidth: 2,
  }

});