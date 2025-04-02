import styled from "styled-components/native";
import { colors } from "../../themes/tokens";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 25%;
  background-color: ${colors.primary};
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
  flex-direction: row;
`;
export const Content =  styled.View`
  width: 80%;
  height: 60px;

`;