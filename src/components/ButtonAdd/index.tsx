import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {}

export function ButtonAdd({ ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      {...rest}
    >
      <Text>+</Text>
    </TouchableOpacity>
  );
}