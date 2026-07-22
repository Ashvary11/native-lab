import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState<string[]>([
    "Learn React Native basics",
    "Build a Todo App",
    "Understand Flexbox layout",
    "Master React Hooks",
    "Learn React Navigation",
    "Build a Weather App",
    "Work with REST APIs",
    "Learn AsyncStorage",
    "Implement Authentication",
    "Build a Chat Application",
    "Learn Expo Router",
    "Use TypeScript with React Native",
    "Create Reusable Components",
    "Learn State Management",
    "Build an Expense Tracker",
    "Implement Push Notifications",
    "Use Camera and Image Picker",
    "Learn Firebase Integration",
    "Optimize App Performance",
    "Publish an App to Google Play",
    "Implement Authentication",
    "Build a Chat Application",
    "Learn Expo Router",
    "Use TypeScript with React Native",
    "Create Reusable Components",
    "Learn State Management",
    "Build an Expense Tracker",
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const addGoalFn = (input: string) => {
    console.log(":clicked", input);
    setGoals((currentGoals) => [...currentGoals, input]);
    // setInput("");
  };
  const handleDelete = (item: string) => {
    console.log(":handleDelete", item);
    setGoals((currentGoals) => currentGoals.filter((goal) => goal !== item));
  };
  const handleEdit = (item: string, index: number) => {
    setEditValue(item);
    setSelectedIndex(index);
    setModalVisible(true);
  };
  const updateGoal = () => {
    if (selectedIndex === null) return;

    const updatedGoals = [...goals];
    updatedGoals[selectedIndex] = editValue;

    setGoals(updatedGoals);
    setModalVisible(false);
    setEditValue("");
    setSelectedIndex(null);
  };
  return (
    <>
    <StatusBar barStyle={"dark-content"} />
      <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Course Goal"
            value={input}
            onChangeText={(text) => setInput(text)}
          />
          <Button title="Add  Goal" onPress={() => addGoalFn(input)} />
        </View>

        <View style={styles.goalContainer}>
          <Text>List of Goals</Text>

          {/* <View style={{ width: "100%",   }}>
          <ScrollView alwaysBounceVertical={false }>
            {goals?.map((elem, i) => (
              <View key={i} style={styles.goalItem}>
                <Text>{i + 1 + ". "}</Text>
                <Text>{elem}</Text>
              </View>
            ))}
          </ScrollView>
        </View> */}
          <FlatList
            data={goals}
            keyExtractor={(item, i) => String(i)}
            renderItem={({ item, index }) => (
              <View style={styles.goalItem}>
                <Text>{item}</Text>
                <Button
                  title="Edit"
                  onPress={() => handleEdit(item, index)}
                  color={"green"}
                />
                <Pressable
                  android_ripple={{ color: "#33e26ddd" }}
                  onPress={() => handleDelete(item)}
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    borderRadius: 6,
                    overflow: "hidden",
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(255, 33, 3, 0.88)",
                    }}
                  >
                    Delete
                  </Text>
                </Pressable>
              </View>
            )}
          />
        </View>

        <Modal visible={modalVisible} animationType="slide" transparent>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <View
              style={{
                width: "85%",
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 15,
                }}
              >
                Edit Goal
              </Text>

              <TextInput
                value={editValue}
                onChangeText={setEditValue}
                style={{
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 10,
                  marginBottom: 20,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  title="Cancel"
                  color="red"
                  onPress={() => setModalVisible(false)}
                />

                <Button title="Save" onPress={updateGoal} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    // borderWidth: 1,
    // borderColor: "red",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalContainer: {
    flexDirection: "column",
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 20,
    width: "80%",
    borderRadius: 8,
    // borderColor: "red",
  },
  goalItem: {
    flexDirection: "row",
    gap: 5,
    padding: 5,
    marginBottom: 5,
    backgroundColor: "#700bf3e0",
    color: "white",
    borderRadius: 5,
  },
});
