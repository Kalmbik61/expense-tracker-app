import { StyleSheet } from "react-native";
import { STYLES } from "../../../styles/variables";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },

  label: {
    fontSize: 12,
    color: STYLES.COLORS.primary100,
    marginBottom: 4,
  },

  input: {
    backgroundColor: STYLES.COLORS.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: STYLES.COLORS.primary700,
  },
  inputMulti: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});

export default styles;
