import { View, Button, Text } from "react-native";
import { router } from "expo-router";

export default function about() {
  return (
    <View>
        <Text> About page</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
