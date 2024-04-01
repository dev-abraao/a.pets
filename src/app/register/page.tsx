import "./register.css";

export default function Register() {
  return (
    <div className="register-background">
      <div className="register-container">
        <h1 className="h1reg">Crie sua conta</h1>
        <form className="register-form">
            <div className="column1">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Digite seu email"/>
                <label htmlFor="nome">Nome e Sobrenome</label>
                <input type="text" name="nome" id="nome" placeholder="Digite seu nome e sobrenome"/>
                <label htmlFor="cpf">CPF</label>
                <input type="text" name="cpf" id="cpf" placeholder="Digite seu CPF"/>
                <label htmlFor="birth">Data de Nascimento</label>
                <input type="date" name="birth" id="birth" />
            </div>
          <div className="column2">
            <label htmlFor="telephone">Telefone</label>
            <input type="tel" name="telephone" id="telephone" placeholder="Digite seu telefone"/>
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" placeholder="Digite sua senha"/>
            <div>
                <input type="checkbox" name="check" id="check" />
                <label htmlFor="">Concordo com os termos e condições</label>
            </div>
          </div>
        </form>
        <div className="btn-div">
          <button className="btn-reg">Cadastrar</button>
        </div>
      </div>
    </div>
  );
}
