import { DefaultButton } from "./styles";

export function Button({ children, theme, ...rest }) {
  return (
    <DefaultButton {...rest} theme={theme}>
      {children}
    </DefaultButton>
  );
}
