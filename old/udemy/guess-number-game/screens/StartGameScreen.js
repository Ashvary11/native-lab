import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen({ onPickNumber }) {
  const [input, setInput] = useState("");

  function confirmInputHandler() {
    const chosenNumber = parseInt(input);

    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number should be between 1 and 99", [
        { text: "Okay", onPress: resetInput },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  function resetInput() {
    setInput("");
  }

  return (
    <View>
      <Text style={styles.title}>🎯 Guess My Number</Text>

      <Text style={styles.subtitle}>
        Think of a number between 1 and 99 and let the app guess it!
      </Text>

      <View style={styles.instructions}>
        <Text style={styles.instructionTitle}>How to Play</Text>
        <Text style={styles.instructionText}>
          • Enter a number from 1 to 99.
        </Text>
        <Text style={styles.instructionText}>• Tap Confirm.</Text>
        <Text style={styles.instructionText}>
          • Tell the app Higher (+) or Lower (−).
        </Text>
        <Text style={styles.instructionText}>
          • The app will guess your number!
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter Your Number</Text>

        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={input}
          onChangeText={setInput}
        />

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
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
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#d20101ff",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#d3354fff",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    fontWeight: "500",
  },

  instructions: {
    backgroundColor: "rgba(59, 53, 53, 0.77)",
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 24,
    marginBottom: 20,
  },

  instructionTitle: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  instructionText: {
    color: "#fff",
    fontSize: 15,
    marginVertical: 2,
  },

  inputLabel: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
  },
});
