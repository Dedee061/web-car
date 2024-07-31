import logoImg from "../../assets/logo.svg";
import Container from "../../components/container";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

export function Login() {
  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link to={'/'} className="mb-6 max-w-sm w-full">
          <img src={logoImg} alt="logo do site" className="w-full"/>
        </Link>

        <form className="bg-white max-w-xl w-full rounded-lg">
        <Input type="email" placeholder= "Digite seu email" name="email"/>
        <Input type="password" placeholder="Digite sua senha" name="password"/>
        </form>
      </div>
    </Container>
  );
}
