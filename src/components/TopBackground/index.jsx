import { Background } from "./styles";
import USERSIMG from "../../assets/users.png";
export function TopBackground() {
  return (
    <Background>
      <img src={USERSIMG} alt="imagem-usuarios" />
    </Background>
  );
}
