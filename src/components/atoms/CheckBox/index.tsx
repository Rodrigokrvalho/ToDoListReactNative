import { TouchableOpacity, View } from 'react-native';
import ReactIcons from '@expo/vector-icons/Ionicons';
import { colors } from '../../../globalstyles';
import { styles } from './styles';

interface Props {
  status: 'active' | 'inactive';
}

export function CheckBox({ status = 'inactive' }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={[styles.checkbox, status === 'inactive' && styles.inactive]}>
        {status === 'active' &&
          <ReactIcons
            name="checkmark-circle"
            size={24}
            color={colors.purple700}
          />
        }
      </View>
    </TouchableOpacity>
  );
}