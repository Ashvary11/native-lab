import { router } from "expo-router";
import { Button, StatusBar, View } from "react-native";

export default function Index() {
  return (
    <View>
      <StatusBar barStyle={"dark-content"}  />
      <Button title="Go to about" onPress={() => router.push("/about")} />
      <Button title="Go to profile" onPress={() => router.push("/profile")} />
    </View>
  );
}
