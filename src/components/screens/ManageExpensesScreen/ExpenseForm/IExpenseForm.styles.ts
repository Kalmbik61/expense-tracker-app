import { StyleSheet } from "react-native";
import { STYLES } from "../../../../styles/variables";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  error: {
    color: "red",
    paddingVertical: 10,
    textAlign: "center",
  },
  btns: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: STYLES.COLORS.primary500,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
