import { Button, Text, View } from "react-native";
import styles from "./ErrorOverlay.styles";
import { IErrorOverlayProps } from "./ErrorOverlay.props";

export default function ErrorOverlay({
  message,
  onConfirm,
}: IErrorOverlayProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>An error occured!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm} title='Ok' />
    </View>
  );
}
