import { ActivityIndicator, View } from "react-native";
import styles from "./Loading.styles";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"#fff"} />
    </View>
  );
}
