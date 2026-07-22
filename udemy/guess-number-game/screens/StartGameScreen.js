import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function StartGameScreen({ onPickNumber }) {
  const [input, setInput] = useState("0");
  // console.log("input--", input);

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(input);

    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number should be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
        // { text: "Cancel", style: "destructive", onPress: () => {} },
      ]);
      return;
    }

    console.log(chosenNumber);
    onPickNumber(chosenNumber);
  };

  const resetInput = () => {
    console.log("reset input--", input);
    setInput("0");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 24,
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#72063c",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    gap: 10,
  },
  numberInput: {
    height: 55,
    width: 55,
    fontSize: 32,
    borderBottomColor: "rgba(203, 184, 13, 1)",
    borderBottomWidth: 2,
    color: "rgba(243, 231, 5, 0.84)",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
  },
});
