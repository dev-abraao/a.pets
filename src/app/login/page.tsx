import RegBox from "@/components/register-box"
import './login.css'

export default function Login(){
    return (
        <div className="login-background">
            <div className="login-box">
                <h2>Entre na sua conta</h2>
                <label htmlFor="emaillog">Email</label>
                <input type="email" name="emaillog" id="emaillog"/>
                <label htmlFor="passwordlog">Senha</label>
                <input type="password" name="passwordlog" id="passwordlog"/>
            </div>
            <div className="register-box">
                <RegBox/>
            </div>
        </div>
    )
}