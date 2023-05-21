import { useState } from "react";
import { Task } from "../components/molecules/Task";
import { AddTask } from "../components/molecules/AddTask";
import { MainCounters } from "../components/molecules/MainCounters";
import { MainHeader } from "../components/atoms/MainHeader";
import { TasksList } from "../components/molecules/TasksList";


export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

const tasks: Task[] = [
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
      <MainHeader />

      <AddTask
        taskDescription={task}
        setTaskDescription={setTask}
      />

      <MainCounters
        completedTasksValue={1}
        createdTasksValue={4}
      />

      <TasksList tasks={tasks} />
    </>
  );
}