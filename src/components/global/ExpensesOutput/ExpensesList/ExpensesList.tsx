import { FlatList, Pressable, Text, View } from "react-native";
import styles from "./ExpensesList.styles";
import { IExpensesListProps } from "./ExpensesList.props";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SCREEN_NAMES } from "../../../../utils/screenNames";

export default function ExpensesList({ expenses }: IExpensesListProps) {
  const navigation = useNavigation<any>();
  const onExpensePressHandler = (id: string) => {
    navigation.navigate(SCREEN_NAMES.MANAGE_EXPENSES, {
      expenseId: id,
    });
  };

  return (
    <View style={styles.main_container}>
      <FlatList
        data={expenses}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onExpensePressHandler(item.id)}
            style={({ pressed }) => [
              pressed && styles.pressed,
              styles.container,
            ]}
          >
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date.toLocaleString()}</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
