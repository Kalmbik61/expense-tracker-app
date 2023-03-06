import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SCREEN_NAMES } from "./src/utils/screenNames";
import AllExpensesScreen from "./src/components/screens/AllExpensesScreen/AllExpensesScreen";
import ManageExpensesScreen from "./src/components/screens/ManageExpensesScreen/ManageExpensesScreen";
import RecentExpensesScreen from "./src/components/screens/RecentExpensesScreen/RecentExpensesScreen";
import { STYLES } from "./src/styles/variables";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./src/components/global/IconButton/IconButton";
import ExpensesContextProvider from "./src/Context/ExpensesContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: STYLES.COLORS.primary500,
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: STYLES.COLORS.primary500,
        },
        tabBarActiveTintColor: STYLES.COLORS.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon={"add"}
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate(SCREEN_NAMES.MANAGE_EXPENSES)}
          />
        ),
      })}
    >
      <Tab.Screen
        name={SCREEN_NAMES.RECENT_EXPENSES}
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.ALL_EXPENSES}
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: STYLES.COLORS.primary500,
              },
              headerTintColor: "#fff",
            }}
          >
            <Stack.Screen
              name={SCREEN_NAMES.EXPENSES_OVERVIEW}
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={SCREEN_NAMES.MANAGE_EXPENSES}
              component={ManageExpensesScreen}
              options={{ presentation: "modal", title: "Manage Expense" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
