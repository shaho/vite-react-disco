import { AlertBox } from "./styles";

type Props = {
  children: any;
};

export default function Alert({ children }: Props) {
  return <AlertBox>{children}</AlertBox>;
}
