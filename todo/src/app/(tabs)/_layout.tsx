import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="CreateTodos"
        options={{
          title: "Create Todos",
          tabBarLabel: "Create Todos",
        }}
      />
      <Tabs.Screen
        name="MyTodos"
        options={{
          title: "My Todos",
          tabBarLabel: "My Todos",
        }}
      />
    </Tabs>
  );
}
