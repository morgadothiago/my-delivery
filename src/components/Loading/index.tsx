import { ActivityIndicator, View } from "react-native";
import { Container } from "./styles";
import { colors } from "../../themes/tokens";

export default function Loading() {
  return (
    <Container>
      <ActivityIndicator size={50} color={colors.secondary} />
    </Container>
  );
}
