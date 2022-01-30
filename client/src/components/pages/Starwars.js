import React, { useEffect, useState } from "react";
import axios from 'axios';

function Starwars() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        let callApi = async () => {
            const response = await axios.get("/starwars/index", 
                {params: {page}},
                // enviar o token jwt para autenticar na pagina
            );
            setCharacters(response.data.data);
        };

        console.log(page);
        callApi();
    }, [page]);

    return (
        // criar layout com cards pra ficar legalzin
        <div className="App">
            <p>Pagina: {page}</p>
            {characters.map((character) => {
                console.log(character);
                return (
                    <>
                        <p>Nome: {character.name}</p>
                    </>
                );
            })}

            <button type="submit" onClick={() => setPage(page - 1)}>Anterior</button>
            <button type="submit" onClick={() => setPage(page + 1)}>Proxima</button>
        </div>
    );
}

export default Starwars;
