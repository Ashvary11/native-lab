import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
      <Link href="/register"> Go to Register </Link>

       
    </View>
  );
}
