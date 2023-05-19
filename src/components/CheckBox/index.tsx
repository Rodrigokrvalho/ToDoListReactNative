import { TouchableOpacity, View } from 'react-native';
import ReactIcons from '@expo/vector-icons/Ionicons';
import { colors } from '../../globalstyles';

interface Props {
  status: 'active' | 'inactive';
}

export function CheckBox({ status = 'inactive' }: Props) {
  return (
    <TouchableOpacity>
      <View>
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