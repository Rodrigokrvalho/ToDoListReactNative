import { FlatList } from 'react-native';
import { Task as ITask } from '../../../views/Main';
import { Task } from '../Task';
import { EmptyListMessage } from '../../atoms/EmptyListMessage';

interface Props {
  tasks: ITask[];
}

export function TasksList({ tasks }: Props) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={task => task.id}
      renderItem={({ item }) => (
        <Task
          description={item.description}
          completed={item.completed}
        />
      )}
      ListEmptyComponent={() => (
        <EmptyListMessage
          title="Você ainda não tem tarefas cadastradas"
          subtitle="Crie tarefas e organize seus itens a fazer"
        />
      )}
    />
  );
}