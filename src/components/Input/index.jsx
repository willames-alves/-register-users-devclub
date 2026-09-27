import { InputButton } from "./styles";

export function Input({ type, placeholder, ref }) {
  return <InputButton type={type} placeholder={placeholder} ref={ref} />;
}
