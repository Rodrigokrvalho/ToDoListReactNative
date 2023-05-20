import { View } from 'react-native';
import { Input } from '../../atoms/Input';
import { ButtonAdd } from '../../atoms/ButtonAdd';
import { colors } from '../../../globalstyles';
import { styles } from './styles';
import { Dispatch, SetStateAction } from 'react';
interface Props {
  taskDescription: string;
  setTaskDescription: Dispatch<SetStateAction<string>>;
}

export function AddTask({ setTaskDescription, taskDescription }: Props) {
  return (
    <View style={styles.container}>
      <Input
        onChangeText={setTaskDescription}
        value={taskDescription}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray300}
      />
      <ButtonAdd />
    </View>
  );
}