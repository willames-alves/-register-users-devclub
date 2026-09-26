import {
  Container,
  Title,
  TopBackground,
  Form,
  ContainerInput,
  Input,
  Button,
  InputLabel,
} from "./styles";

import USERSIMG from "../../assets/users.png";
import { useRef } from "react";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  function handleRegisterUser() {
    // event.preventDefault();
    console.log(inputName.current.value);
  }

  return (
    <Container>
      <TopBackground>
        <img src={USERSIMG} alt="Usuários" />
      </TopBackground>
      <Form>
        <Title>Cadastro de Usuário</Title>
        <ContainerInput>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>

            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>

            <Input type="number" placeholder="Idade" ref={inputAge} />
          </div>
        </ContainerInput>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail" ref={inputEmail} />
        </div>
        <Button type="button" onClick={handleRegisterUser}>
          Cadastrar usuário
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
