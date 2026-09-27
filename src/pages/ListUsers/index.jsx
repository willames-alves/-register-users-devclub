import api from "../../services/api";

import { Button } from "../../components/Button";
import { TopBackground } from "../../components/TopBackground";
import { Container, Title } from "./styles";
import { useEffect } from "react";

function ListUsers() {
  async function handleGetUsers() {
    try {
      const response = await api.get("/users", {});

      console.log("Lista de usuários:", response.data);
      // Limpa os inputs após o sucesso
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      const errorMessage =
        error.response?.data?.message || "Erro ao conectar com o servidor.";
      alert(`Erro: ${errorMessage}`);
    }
  }

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <Container>
      <TopBackground />
      <Title>List Usuários</Title>
      <Button theme="primary" onClick={() => window.history.back()}>
        voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
