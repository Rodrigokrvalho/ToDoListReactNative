import { StyleSheet } from "react-native";
import { colors } from "../../../globalstyles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  counter: {
    backgroundColor: colors.gray400,
    color: colors.gray100,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 1,
    fontWeight: "500"
  }
});