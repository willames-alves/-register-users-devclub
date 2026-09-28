import api from "../../services/api";
import { useEffect, useState } from "react";

import { TopBackground } from "../../components/TopBackground";
import { Button } from "../../components/Button";

import Trash from "../../assets/trash.svg";

import {
  Container,
  Title,
  ContainerUsers,
  CardUser,
  AvatarIcon,
  TrashIcon,
} from "./styles";

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

      <ContainerUsers>
        {users.map((user) => (
          <CardUser key={user.id}>
            <AvatarIcon
              src={`https://api.dicebear.com/10.x/adventurer-neutral/svg?seed=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="Excluir" />
          </CardUser>
        ))}
      </ContainerUsers>

      <Button theme="primary" onClick={() => window.history.back()}>
        voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
