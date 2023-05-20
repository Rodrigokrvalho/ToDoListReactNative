import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import ReactIcons from '@expo/vector-icons/AntDesign';
import { colors } from "../../../globalstyles";

interface Props extends TouchableOpacityProps {}

export function ButtonAdd({ ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.65}
      {...rest}
    >
      <ReactIcons name="pluscircleo" size={18} color={colors.gray100} />
    </TouchableOpacity>
  );
}