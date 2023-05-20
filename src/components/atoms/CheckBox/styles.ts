import { StyleSheet } from "react-native";
import { colors } from "../../../globalstyles";
export const styles = StyleSheet.create({
  checkbox: {
    margin: 8
  },
  inactive: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.blue400,
    height: 20,
    width: 20,
    borderRadius: 50,
  }
});