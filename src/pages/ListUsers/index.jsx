import api from "../../services/api";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
import { Toast } from "../../components/Toast";

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

  async function handleDeleteUser(id) {
    Toast({
      title: "Tem certeza que deseja excluir este usuário?",
      confirmText: "Sim, deletar",
      cancelText: "Cancelar",
      onConfirm: () => {
        deleteUser(id);
        toast.success("Excluído com sucesso!");
      },
    });
  }

  async function deleteUser(id) {
    try {
      const response = await api.delete(`/users/${id}`);
      console.log(response);

      const updateUsers = users.filter((user) => user.id !== id);
      setUsers(updateUsers);

      return response;
    } catch (error) {
      console.error("Erro ao obter usuários:", error);
      const errorMessage =
        error.response?.data?.message || "Erro ao conectar com o servidor.";
      alert(`Erro: ${errorMessage}`);
      return errorMessage;
    }
  }

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
            <TrashIcon
              src={Trash}
              alt="Excluir"
              onClick={() => handleDeleteUser(user.id)}
            />
          </CardUser>
        ))}
      </ContainerUsers>
      <Button theme="primary" onClick={() => window.history.back()}>
        voltar
      </Button>
      <Toaster
        // toast={t}
        style={{}} // Overwrite styles
        position="top-center"
      />
    </Container>
  );
}

export default ListUsers;
