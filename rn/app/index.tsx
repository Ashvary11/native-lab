import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();

  console.log("Color Scheme:", colorScheme);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colorScheme === "light" ? "#fff" : "#222",
        },
      ]}
    >
      <Text
        style={[
          styles.heading,
          {
            color: colorScheme === "light" ? "#000" : "#fff",
          },
        ]}
      >
        {colorScheme === "light"
          ? "I am Light Screen Color"
          : "I am Dark Screen Color"}
      </Text>

      <Pressable
        onPress={() => console.log("Pressed")}
        android_ripple={{ color: "#ef0101", borderless: false }}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>Buy Car</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  heading: {
    fontSize: 22,
    marginBottom: 30,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 12,

    // Required for ripple to stay inside rounded corners
    overflow: "hidden",
  },

  pressed: {
    opacity: 0.7, // iOS + Android fallback
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
