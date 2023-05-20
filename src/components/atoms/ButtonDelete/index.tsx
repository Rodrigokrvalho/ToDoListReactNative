import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import ReactIcons from '@expo/vector-icons/Feather';
import { colors } from "../../../globalstyles";
import { useState } from "react";

interface Props extends TouchableOpacityProps {}

export function ButtonDelete({ ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      {...rest}
    >
      <ReactIcons
        name="trash-2"
        size={18}
        color={isPressed ? colors.red600 : colors.gray300}
      />
    </TouchableOpacity>
  );
}