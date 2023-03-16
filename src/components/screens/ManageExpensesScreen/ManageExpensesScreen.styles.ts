import { StyleSheet } from "react-native";
import { STYLES } from "../../../styles/variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: STYLES.COLORS.primary800,
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
