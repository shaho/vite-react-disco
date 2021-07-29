import { AlertBox } from "./styles";

type Props = {
  children: any;
};
function Alert({ children }: Props) {
  return <AlertBox>{children}</AlertBox>;
}
export default Alert;
