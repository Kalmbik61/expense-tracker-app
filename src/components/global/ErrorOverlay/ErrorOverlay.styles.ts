import { StyleSheet } from "react-native";
import { STYLES } from "../../../styles/variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 24,
    backgroundColor: STYLES.COLORS.primary700,
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 16,
    color: "#fff",
  },
});

export default styles;
