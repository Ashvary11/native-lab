import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children ,onPress}) {
  // const pressHandler = () => {
  //   console.log("pressHandler",number);
  // };
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        // onPress={pressHandler} 
          onPress={onPress}
        android_disableSound = {true}
        style={({ pressed }) => [
          styles.pressable,
          { opacity: pressed ? 0.6 : 1 },
        ]}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={[styles.buttonText]}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,

    overflow: "hidden",
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressable: {
    backgroundColor: "#e9107cff",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
