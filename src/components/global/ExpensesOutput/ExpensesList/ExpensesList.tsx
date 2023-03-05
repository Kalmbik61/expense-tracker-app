import { FlatList, Text, View } from "react-native";
import styles from "./ExpensesList.styles";
import { IExpensesListProps } from "./ExpensesList.props";

export default function ExpensesList({ expenses }: IExpensesListProps) {
  return (
    <View>
      <FlatList
        data={expenses}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
