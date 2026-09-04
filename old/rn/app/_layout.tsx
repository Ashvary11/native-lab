import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "Ashvary App",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="contact" options={{ title: "Contact" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
      <Stack.Screen
        name="(auth)"
        options={{ title: "Auth", headerShown: false }}
      />
    </Stack>
  );
}
