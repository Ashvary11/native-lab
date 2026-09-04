import { View, Text } from "react-native";
 
import ExpensesSummary from "./ExpensesSummary";
import { FlatList } from "react-native-web";

export default function ExpensesOutput() {
  return (
    <View>
      <ExpensesSummary />
      <FlatList />
    </View>
  );
}
