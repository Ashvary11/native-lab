import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Register() {
  return (
    <View>
      <Text>Register</Text>
      <Link href="/login"> Login-Instead </Link>
    </View>
  );
}
