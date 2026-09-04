import { View, Button, Text } from "react-native";
import { router } from "expo-router";

export default function profile() {
  return (
    <View>
      <Text> profile tab page</Text>
      <Button title="Go Back" 
      // onPress={() => router.back()} />
      onPress={() =>router.push("/")} />
    </View>
  );
}
