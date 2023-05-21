import { View } from 'react-native';
import { Counter } from '../../atoms/Counter';
import { colors } from '../../../globalstyles';
import { styles } from './styles';

interface Props {
  completedTasksValue: number;
  createdTasksValue: number;
}

export function MainCounters({ completedTasksValue, createdTasksValue }: Props) {
  return (
    <View style={styles.container}>
      <Counter
        counterValue={createdTasksValue}
        label="Criadas"
        labelColor={colors.blue400}
      />

      <Counter
        counterValue={completedTasksValue}
        label="Concluídas"
        labelColor={colors.purple500}
      />
    </View>
  );
}