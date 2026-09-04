import { useCallback, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { Checkbox } from "expo-checkbox";

export default function MyTodos() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const storedTodos = await AsyncStorage.getItem("todos");
    const todos = storedTodos ? JSON.parse(storedTodos) : [];
    setTodos(todos);
  };
  const deleteTodo = async (todoId) => {
    console.log("todo deleted : ", todoId);
    const updatedTodos = todos.filter((item) => item.id !== todoId);
    setTodos(updatedTodos);
    await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleComplete = (todoId) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todoId) {
        item.completed = !item.completed;
      }

      return item;
    });
    // const updatedTodos = todos.map((item) => {
    //   if (item.id === todoId) {
    //     return {
    //       ...item,
    //       completed: !item.completed,
    //     };
    //   }

    //   return item;
    // });

    setTodos(updatedTodos);
    AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  useFocusEffect(
    useCallback(() => {
      loadTodos();
    }, []),
  );

  return (
    <View>
      <Text>MyTodos</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View
            style={{
              padding: 10,
              flexDirection: "row",
              gap: 10,
              backgroundColor: index % 2 == 0 ? "gray" : "orange",
            }}
          >
            <Text>{index + 1}</Text>
            <Checkbox
              value={item.completed}
              onValueChange={() => toggleComplete(item.id)}
            />
            <Text
              style={{
                flex: 1,
                color: item.completed ? "gray" : "blue",
                textDecorationLine: item.completed ? "line-through" : "none",
              }}
            >
              {item.todo}
            </Text>
            <Button
              color="red"
              title="Delete"
              onPress={() => deleteTodo(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}

// {
/* {todos?.map((item, index) => (
        <View
          key={item.id}
          style={{ display: "flex", flexDirection: "row", gap: 10 }}
        >
          <Text>{index + 1}</Text>
          <Text>{item.todo}</Text>
        </View>
      ))} */
// }
