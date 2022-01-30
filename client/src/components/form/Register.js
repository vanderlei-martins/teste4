import React, {useState} from "react";
import axios from 'axios';
import './Form.css';

function Register() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

    // se tiver sucesso ja salvar o token e direcionar pra pagina de listar personagens
    // const [jwttoken, setJwttoken] = useState("");

    function onSubmit(ev) {
      ev.preventDefault();

      axios
        .post("/users", {
            name: name,
            mail: mail,
            password: pass,
        })
        .then((response) => {
            console.log(response);

        })
        .catch((response) => {
          alert("Login inválido");
        });
    }

    return (
        <div>
          <h1>Registrar</h1>
    
          <form onSubmit={onSubmit}>
            <div className="form__group">
              <label htmlFor="login">Nome</label>
              <input 
                id="name" 
                name="name" 
                type="text"
                value={name} 
                onChange={(event) => setName(event.target.value)} required/>
            </div>
            
            <div className="form__group">
              <label htmlFor="mail">E-mail</label>
              <input 
                id="mail" 
                name="mail" 
                type="text"
                value={mail} 
                onChange={(event) => setMail(event.target.value)} required/>
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

export default Register;
