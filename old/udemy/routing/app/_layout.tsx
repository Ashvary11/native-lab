import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        // Header
        headerShown: true,
        // headerTitle: "My App",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#224389ff",
        },
        headerTintColor: "#d18d8dff",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        headerShadowVisible: false,

        // Screen
        contentStyle: {
          backgroundColor: "#a0a36ebf",
        },

        // Animation
        animation: "slide_from_right",
        animationDuration: 300,

        // Gesture
        gestureEnabled: true,

        // Status Bar
        statusBarStyle: "light",

        // Presentation
        presentation: "card",
      }}
    >
      {/* Tabs */}
      {/* <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      /> */}

        {/* // drawer  */}
       {/* <Stack.Screen
        name="(drawer)"
        options={{ headerShown: false }}
      /> */}
      {/* Home */}
      <Stack.Screen
        name="index"
        options={{
          title: "Home",

          headerRight: () => (
            <Pressable onPress={() => console.log("Search")}>
              <Ionicons name="search" size={24} color="white" />
            </Pressable>
          ),
        }}
      />

      {/* About */}
      <Stack.Screen
        name="about"
        options={{
          title: "About Us",

          headerLeft: () => (
            <Text style={{ color: "white", fontWeight: "bold" }}>📖</Text>
          ),

          headerRight: () => (
            <Ionicons name="information-circle" size={24} color="white" />
          ),
        }}
      />

      {/* Profile */}
      <Stack.Screen
        name="profile"
        options={{
          title: "My Profile",

          headerTransparent: false,

          headerRight: () => (
            <Pressable onPress={() => console.log("Settings")}>
              <Ionicons name="settings-outline" size={24} color="white" />
            </Pressable>
          ),

          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
