import { useCallback, useState } from "react";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

export default function MyTodos() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const storedTodos = await AsyncStorage.getItem("todos");
    const todos = storedTodos ? JSON.parse(storedTodos) : [];
    setTodos(todos);
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
            <Text>{item.todo}</Text>
          </View>
        )}
      />
    </View>
  );
}

{
  /* {todos?.map((item, index) => (
        <View
          key={item.id}
          style={{ display: "flex", flexDirection: "row", gap: 10 }}
        >
          <Text>{index + 1}</Text>
          <Text>{item.todo}</Text>
        </View>
      ))} */
}
