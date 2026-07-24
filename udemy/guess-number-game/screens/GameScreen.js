import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

const generateRandomNumber = (min, max, exclude) => {
  if (max - min <= 1) {
    return min;
  }

  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return randomNum;
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(() =>
    generateRandomNumber(1, 100, userNumber),
  );

  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds);
    }
  }, [currentGuess, userNumber, onGameOver, guessRounds]);

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
    setGuessRounds((prevGuessRounds) => [...prevGuessRounds, newGuess]);
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponents Guess</Text>

      <Text style={styles.guess}>{currentGuess}</Text>

      <View style={styles.controls}>
        <Text style={styles.question}>Higher or Lower?</Text>

        <View style={styles.buttons}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>

          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>

      {/* <View style={styles.logContainer}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Round Log</Text>
        {guessRounds?.map((guess, index) => (
          <Text key={index}>
            #{index + 1} - {guess}
          </Text>
        ))}
      </View> */}

      <FlatList
        data={guessRounds}
        inverted
        renderItem={({ item, index }) => (
          <View style={styles.logItem}>
            <Text style={styles.question}># {index + 1} </Text>
            <Text style={styles.gNum}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
  gNum: {
    color: "#ffffffaf",
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },

  buttons: {
    flexDirection: "row",
    gap: 20,
  },

  logContainer: {
    marginTop: 40,
  },
  logItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    flex: 1,
    backgroundColor: "#e62b89dd",

    textAlign: "center",
  },
});
