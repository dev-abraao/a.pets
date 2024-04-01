import Link from 'next/link'

export default function RegBox() {
  return (
    <div className="container-register">
      <div className="reg-text">
        <p className="register">
          Cadastre-se <br />
          <span className="aqui">AQUI!</span>
        </p>
      </div>
      <div className="btn-wrapper">
        <Link href="/register">
          <button className="register-btn">Cadastrar</button>
        </Link>
        <p className="smalltext">
          * Você será redirecionado para uma nova
          <br /> página para completar seu cadastro.
        </p>
      </div>
    </div>
  );
}
