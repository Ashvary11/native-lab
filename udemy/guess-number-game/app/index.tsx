import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet } from "react-native";

import StartGameScreen from "@/screens/StartGameScreen.js";
import GameScreen from "@/screens/GameScreen.js";
import GameOverScreen from "@/screens/GameOverScreen.js";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const bgImg = {
    uri: "https://images.pexels.com/photos/17149618/pexels-photo-17149618.jpeg",
  };
  const [number, setNumber] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);

  let numberhandler = (pickedNumber: number) => {
    setNumber(pickedNumber);
    setGameIsOver(false);
  };
  let gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={numberhandler} />;
  if (number) {
    screen = <GameScreen userNumber={number} onGameOver={gameOverHandler} />;
  }
  if (gameIsOver && number) {
    screen = <GameOverScreen userNumber={number} />;
  }
  return (
    <LinearGradient
      colors={["rgba(192, 15, 59, 0.88)", "transparent"]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // backgroundColor: "rgba(210, 129, 37, 1)",
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  image: {
    opacity: 0.8,
  },
});
