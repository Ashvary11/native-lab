import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const generateRandomNumber = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return randomNum;
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newGuess = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess,
    );

    setCurrentGuess(newGuess);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponents Guess</Text>

      <Text style={styles.guess}>{currentGuess}</Text>

      <View style={styles.controls}>
        <Text style={styles.question}>Higher or Lower?</Text>

        <View style={styles.buttons}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>

          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
        </View>
      </View>

      <View style={styles.logContainer}>
        <Text>Round Log</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
  },

  guess: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#72063c",
    marginVertical: 30,
  },

  controls: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#72063c",
    alignItems: "center",
  },

  question: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
  },

  buttons: {
    flexDirection: "row",
    gap: 20,
  },

  logContainer: {
    marginTop: 40,
  },
});
