import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({ userNumber, guessRounds }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Game Over!</Text>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600",
        }}
        style={styles.winnerImage}
      />

      <View style={styles.card}>
        <Text style={styles.label}>The number was</Text>
        <Text style={styles.number}>{userNumber}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>You guessed it in</Text>
        <Text style={styles.number}>{guessRounds.length}</Text>
        <Text style={styles.label}>guesses</Text>

        <FlatList
          data={[...guessRounds].reverse()}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.guessContainer}
          renderItem={({ item, index }) => (
            <View style={styles.guessItem}>
              <Text style={styles.guessText}>
                #{guessRounds.length - index}: {item}
              </Text>
            </View>
          )}
        />
      </View>

      <View style={styles.buttons}>
        <PrimaryButton onPress={() => router.replace("/")}>
          🏠 Play Again
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
    paddingHorizontal: 24,
    backgroundColor: "#F5F5F5",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#72063C",
    marginBottom: 30,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 10,

    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 8,
  },

  label: {
    fontSize: 17,
    color: "#666",
  },

  number: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#D81B60",
    marginVertical: 8,
  },

  guessContainer: {
    marginTop: 18,
    paddingRight: 10,
  },

  guessItem: {
    backgroundColor: "#72063C",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
  },

  guessText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },

  buttons: {
    width: "100%",
    marginTop: 10,
  },
  winnerImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: "#FFD700",
  },
});
