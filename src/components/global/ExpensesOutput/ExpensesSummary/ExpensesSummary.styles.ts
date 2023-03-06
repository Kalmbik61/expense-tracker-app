import { StyleSheet } from "react-native";
import { STYLES } from "../../../../styles/variables";

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: STYLES.COLORS.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  period: {
    fontSize: 12,
    color: STYLES.COLORS.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: STYLES.COLORS.primary500,
  },
});

export default styles;
