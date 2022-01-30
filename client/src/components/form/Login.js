import React, {useState} from "react";
import axios from 'axios';
import './Form.css';



function Login() {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    // usar redux pra salvar esse carinha
    const [jwttoken, setJwttoken] = useState("");

    function onSubmit(ev) {
      ev.preventDefault();
      console.log(login);
      console.log(pass);

      axios
        .post("/users/auth", {
          mail: login,
          password: pass,
        })
        .then((response) => {
          const token = response.data.token;
          if (!token) {
            // pegar do response o status code e msg
            alert("Login inválido");
          }
          console.log(token);
        })
        .catch((response) => {
          alert("Login inválido");
        });
    }

    return (
        <div>
          <h1>Login</h1>
    
          <form onSubmit={onSubmit}>
            <div className="form__group">
              <label htmlFor="login">Usuario</label>
              <input 
                id="login" 
                name="login" 
                type="text"
                value={login} 
                onChange={(event) => setLogin(event.target.value)} required/>
            </div>

            <div className="form__group">
              <label htmlFor="senha">Senha</label>
              <input 
                id="password" 
                name="pasword" 
                type="password" 
                onChange={(event) => setPass(event.target.value)} required/>
            </div>
            <div>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
    )
}

export default Login;
