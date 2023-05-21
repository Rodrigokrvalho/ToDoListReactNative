import { View, Text } from "react-native";
import { styles } from "./styles";

interface Props {
  label: string;
  labelColor: string;
  counterValue: number;
}

export function Counter({ counterValue = 0, label, labelColor }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: labelColor }]}>
        {label}
      </Text>

      <Text style={styles.counter}>
        {counterValue}
      </Text>
    </View>
  );
}