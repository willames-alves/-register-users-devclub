import { useRef } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";
import toast, { Toaster } from "react-hot-toast";

import {
  Container,
  Title,
  Form,
  ContainerInput,
  Input,
  InputLabel,
} from "./styles";

import { Button } from "../../components/Button";
import { TopBackground } from "../../components/TopBackground";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function handleRegisterUser(event) {
    // Previne o recarregamento padrão da página caso use um <form onSubmit>
    event.preventDefault();

    const name = inputName.current.value.trim();
    const age = inputAge.current.value.trim();
    const email = inputEmail.current.value.trim();

    // Validação simples no front-end
    if (!name || !age || !email) {
      toast("Por favor, preencha todos os campos obrigatórios.", {
        duration: 2000,
        position: "top-center",
        icon: "⚠️",
      });
      return;
    }

    try {
      const response = await api.post("/users", {
        name,
        age: Number(age), // Garante que a idade vai como número
        email,
      });

      console.log("Usuário criado:", response.data);
      toast.success("Usuário cadastrado com sucesso!", {
        duration: 2000,
      });

      // Limpa os inputs após o sucesso
      inputName.current.value = "";
      inputAge.current.value = "";
      inputEmail.current.value = "";
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      const errorMessage =
        error.response?.data?.message || "Erro ao conectar com o servidor.";
      toast.error(`Erro: ${errorMessage}`);
    }
  }

  const navigate = useNavigate();

  return (
    <Container>
      <TopBackground />

      <Form onSubmit={handleRegisterUser}>
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

        <Button type="submit" theme="primary">
          Cadastrar usuário
        </Button>
      </Form>

      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
        Lista de usuários
      </Button>

      <Toaster />
    </Container>
  );
}

export default Home;
