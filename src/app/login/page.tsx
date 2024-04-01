import "./login.css";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="login-background">
      <div className="login-box">
        <h2>Entre na sua conta</h2>
        <div className="login-container">
          <label htmlFor="emaillog">
            <Image src="/email.svg" alt="email" width={30} height={30} />
            &nbsp;Email
          </label>
          <input type="email" name="emaillog" id="emaillog" placeholder="Digite seu Email" className="loginput email"/>
          <label htmlFor="passwordlog">
            <Image src="/pass.svg" alt="password" width={30} height={30} />
            &nbsp;Senha
          </label>
          <input type="password" name="passwordlog" id="passwordlog" placeholder="Digite sua Senha" className="loginput pass"/>
        </div>
        <div className="log-btn-div">
          <button className="log-btn">Entrar</button>
        </div>
      </div>
      <div className="container-registerlog">
        <div className="reg-textlog">
          <p className="registerlog">
            Cadastre-se <br />
            <span className="aquilog">AQUI!</span>
          </p>
        </div>
        <div className="btn-wrapperlog">
          <Link href="/register">
            <button className="register-btnlog">Cadastrar</button>
          </Link>
          <p className="smalltextlog">
            * Você será redirecionado para uma nova
            <br /> página para completar seu cadastro.
          </p>
        </div>
      </div>
    </div>
  );
}
