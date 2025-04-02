import { View } from "react-native";
import {
  AreaButtons,
  Container,
  Header,
  Main,
  ProfileButton,
  VisibleButton,
} from "./styles";
import IconUserSVG from "../../../assets/svg/icon-user";

import IconQUestionSVG from "../../../assets/svg/question";
import IconOcultSVG from "../../../assets/svg/ocult";

export default function HomeScreen() {
  return (
    <Container>
      <Header>
        <ProfileButton>
          <IconUserSVG />
        </ProfileButton>

        <AreaButtons>
          <VisibleButton>
            <IconOcultSVG />
          </VisibleButton>
          <VisibleButton>
            <IconQUestionSVG />
          </VisibleButton>

          <VisibleButton>
            <IconQUestionSVG />
          </VisibleButton>
        </AreaButtons>
      </Header>

      <Main></Main>
    </Container>
  );
}
