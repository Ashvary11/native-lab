import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const About = () => {
  return (
    <View>
      <Text>About Page</Text>
      <Link href="/">Go to Home Page</Link>
    </View>
  );
};

export default About;
