import { useRef } from "react";
import api from "../../services/api";

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

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function handleRegisterUser() {
    const data = await api.post("/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });

    console.log(data);
    // event.preventDefault();
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
