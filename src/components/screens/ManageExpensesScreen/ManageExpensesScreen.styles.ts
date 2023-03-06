import { StyleSheet } from "react-native";
import { STYLES } from "../../../styles/variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: STYLES.COLORS.primary800,
  },
  btns: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: STYLES.COLORS.primary500,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  delete_container: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: STYLES.COLORS.primary200,
    alignItems: "center",
  },
});

export default styles;
