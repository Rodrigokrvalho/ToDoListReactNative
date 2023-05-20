import { View, FlatList } from "react-native";
import { Input } from "../components/atoms/Input";
import { useState } from "react";
import { colors } from "../globalstyles";
import { ButtonAdd } from "../components/atoms/ButtonAdd";
import { Task } from "../components/molecules/Task";
import { AddTask } from "../components/molecules/AddTask";

const tasks = [
  {
    id: '1',
    completed: false,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quo, quod quisquam at ex quidem.'
  },
  {
    id: '2',
    completed: false,
    description: 'Ullam odio, veritatis cumque amet placeat laudantium id ipsam aut atque quasi similique quibusdam voluptates.'
  },
  {
    id: '3',
    completed: true,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusantium atque aliquam quasi iste animi reiciendis magnam?'
  },
  {
    id: '4',
    completed: false,
    description: 'Repudiandae culpa asperiores aut nulla doloremque repellendus sint ad, in veniam? Velit, porro.'
  },
];

export function Main() {
  const [task, setTask] = useState('');

  return (
    <>
      <AddTask
        taskDescription={task}
        setTaskDescription={setTask}
      />
      <FlatList
        data={tasks}
        keyExtractor={task => task.id}
        renderItem={({ item }) => (
          <Task
            description={item.description}
            completed={item.completed}
          />
        )}
      />
    </>
  );
}