import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../globalstyles';
import { styles } from './styes';

interface Props {
  title: string;
  subtitle?: string;
}

export function EmptyListMessage({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="md-clipboard-outline" size={48} color={colors.gray400} />
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

    </View>
  );
}