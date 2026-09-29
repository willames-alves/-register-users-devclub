import toast from "react-hot-toast";
import {
  CancelButton,
  ConfirmButton,
  ToastButtons,
  ToastContainer,
  ToastTitle,
} from "./styles";

// --- FUNÇÃO DO TOAST ---

/**
 * Dispara um toast de confirmação customizado utilizando Styled Components.
 * @param {Object} options - Opções de configuração
 * @param {string} options.title - Texto da mensagem (ex: "Deseja excluir?")
 * @param {string} options.confirmText - Texto do botão de confirmação
 * @param {string} options.cancelText - Texto do botão de cancelar
 * @param {Function} options.onConfirm - Função executada ao clicar no botão de confirmação
 * @param {Function} [options.onCancel] - Função opcional executada ao cancelar
 */
export const Toast = ({
  title = "Tem certeza que deseja continuar?",
  confirmText = "Sim",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
}) => {
  toast.custom(
    (t) => (
      <ToastContainer $visible={t.visible}>
        <ToastTitle>{title}</ToastTitle>
        <ToastButtons>
          <ConfirmButton
            onClick={() => {
              if (onConfirm) onConfirm();
              toast.dismiss(t.id);
            }}
          >
            {confirmText}
          </ConfirmButton>
          <CancelButton
            onClick={() => {
              if (onCancel) onCancel();
              toast.dismiss(t.id);
            }}
          >
            {cancelText}
          </CancelButton>
        </ToastButtons>
      </ToastContainer>
    ),
    {
      duration: Infinity,
      position: "top-center",
    },
  );
};
