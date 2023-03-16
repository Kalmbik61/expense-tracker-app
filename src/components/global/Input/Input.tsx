import React from "react";
import { Text, TextInput, View } from "react-native";
import { IInputProps } from "./Input.props";
import styles from "./Input.styles";

export default function Input({ label, textInputOptions }: IInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          textInputOptions && textInputOptions.multiline && styles.inputMulti,
        ]}
        {...textInputOptions}
      />
    </View>
  );
}
