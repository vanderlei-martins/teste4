import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";

function Login() {
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    // usar redux pra salvar esse carinha
    const [jwttoken, setJwttoken] = useState("");

    const navigate = useNavigate();

    function onSubmit(ev) {
        ev.preventDefault();

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
                setJwttoken(token);
                alert("Login efetuado com sucesso!!");
                navigate("/characters", {
                    state: {
                        token: token,// temporario
                    },
                }); 
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
                        onChange={(event) => setLogin(event.target.value)}
                        required
                    />
                </div>

                <div className="form__group">
                    <label htmlFor="senha">Senha</label>
                    <input
                        id="password"
                        name="pasword"
                        type="password"
                        onChange={(event) => setPass(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Entrar</button>
                    <Link to="/register">
                        <button type="submit">Registar</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
