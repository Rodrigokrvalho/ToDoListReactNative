import { View, Text } from 'react-native';
import { CheckBox } from '../../atoms/CheckBox';
import { ButtonDelete } from '../../atoms/ButtonDelete';
import { styles } from './styles';

interface Props {
  description: string;
  completed: boolean;
}

export function Task({ description, completed }: Props) {

  return (
    <View style={styles.container}>
      <CheckBox status={completed ? 'active' : 'inactive'} />
      <Text style={[styles.text, completed && styles.completed]}>
        {description}
      </Text>
      <ButtonDelete />
    </View>
  );
}