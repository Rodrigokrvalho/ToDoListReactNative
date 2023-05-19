import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import ReactIcons from '@expo/vector-icons/Feather';
import { colors } from "../../globalstyles";

interface Props extends TouchableOpacityProps {}

export function ButtonDelete({ ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.65}
      {...rest}
    >
      <ReactIcons
        name="trash-2"
        size={18}
        color={colors.gray100}
      />
    </TouchableOpacity>
  );
}