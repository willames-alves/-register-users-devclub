import api from "../../services/api";

import { Button } from "../../components/Button";
import { TopBackground } from "../../components/TopBackground";
import { Container, Title } from "./styles";
import { useEffect, useState } from "react";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function handleGetUsers() {
      try {
        const { data } = await api.get("/users");
        console.log("Dados recebidos:", data);

        setUsers(data);
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
        const errorMessage =
          error.response?.data?.message || "Erro ao conectar com o servidor.";
        alert(`Erro: ${errorMessage}`);
      }
    }

    handleGetUsers();
  }, []);

  return (
    <Container>
      <TopBackground />
      <Title>List Usuários</Title>

      {users.map((user) => (
        <div key={user.id}>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Idade: {user.age}</p>
        </div>
      ))}
      <Button theme="primary" onClick={() => window.history.back()}>
        voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
