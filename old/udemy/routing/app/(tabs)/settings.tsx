import { View, Button, Text } from "react-native";
import { router } from "expo-router";

export default function settings() {
  return (
    <View>
        <Text> Setting  page</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
 