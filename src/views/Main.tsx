import { Text, View } from "react-native";
import { Input } from "../components/Input";
import { useState } from "react";
import { colors } from "../globalstyles";
import { ButtonAdd } from "../components/ButtonAdd";
import { ButtonDelete } from "../components/ButtonDelete";
import { CheckBox } from "../components/CheckBox";


export function Main() {
  const [task, setTask] = useState('');

  return (
    <>
      <Text>Main</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Input
          onChangeText={setTask}
          value={task}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
        />
        <ButtonAdd />
      </View>
      <CheckBox status="active" />
    </>
  );
}