import { KeyboardType, TextInputProps } from "react-native/types";

export interface IInputProps {
  readonly label: string;
  readonly textInputOptions?: TextInputProps;
}
