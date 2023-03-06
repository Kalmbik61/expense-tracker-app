import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IIconButtonProps } from "./IconButton.props";
import styles from "./IconButton.styles";

export default function IconButton({
  icon,
  size,
  color,
  onPress,
}: IIconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}
