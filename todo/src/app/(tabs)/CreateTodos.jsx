import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateTodos() {
  const [todo, setTodo] = useState("");

  const addTodo = async () => {
    if (!todo.trim()) return;

    const storedTodos = await AsyncStorage.getItem("todos");
    const todos = storedTodos ? JSON.parse(storedTodos) : [];

    todos.push({
      id: Date.now().toString(),
      todo: todo.trim(),
      completed: false,
    });

    await AsyncStorage.setItem("todos", JSON.stringify(todos));

    Alert.alert("Todo added: " + todo);
    setTodo("");
  };
  return (
    <View>
      <Text>Start adding your Todos</Text>

      <View>
        <TextInput
          placeholder="Write your todos"
          value={todo}
          onChangeText={(e) => setTodo(e)}
          onSubmitEditing={addTodo}
          submitBehavior="submit"
          returnKeyType="done"
        />
        <Button title="Add Todo" onPress={addTodo} />
      </View>
    </View>
  );
}
