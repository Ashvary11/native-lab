import { Link } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Test Screen</Text>
      <Text>Reading this Page</Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1783870083950-dea32c0a2071?q=80&w=866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D",
        }}
        style={styles.image}
      />

      <br />
      <Link href="/about"> Go to About Page</Link>
      <Link href="/contact"> Go to Contact Page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
