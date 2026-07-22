import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { router } from "expo-router";

const GameOverScreen = ({ userNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Game Over!</Text>

      <View style={styles.card}>
        <Text style={styles.label}>The number was</Text>
        <Text style={styles.number}>{userNumber}</Text>
      </View>

      <View style={styles.buttons}>
        <PrimaryButton onPress={() => router.replace("/")}>
          🏠 Go Home
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f8f8f8",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#72063c",
    marginBottom: 30,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },

  label: {
    fontSize: 18,
    color: "#666",
    marginTop: 10,
  },

  number: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#e9107c",
    marginVertical: 10,
  },

  buttons: {
    width: "100%",
    marginTop: 40,
    gap: 16,
  },
});
