import { StyleSheet } from "react-native";
import { STYLES } from "../../../../styles/variables";

const styles = StyleSheet.create({
  main_container: {
    marginVertical: 14,
    marginBottom: 0,
    flex: 1,
    backgroundColor: STYLES.COLORS.primary700,
  },
  pressed: {
    opacity: 0.75,
  },
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: STYLES.COLORS.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 4,
    shadowColor: STYLES.COLORS.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: STYLES.COLORS.primary50,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
    color: STYLES.COLORS.primary50,
  },
  date: {
    color: STYLES.COLORS.primary100,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 4,
    minWidth: 90,
  },
  amount: {
    color: STYLES.COLORS.primary500,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
