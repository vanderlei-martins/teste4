import React, { useEffect, useState } from "react";
import axios from 'axios';

function Starwars() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    // temporario
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQzNTgzMjA2LCJleHAiOjE2NDM2NDMyMDZ9.C3IQlB8jsLe1b2oln2jl2vcMIK9S8pezz6qsoupi3Uk';

    useEffect(() => {
        let callApi = async () => {
            const response = await axios.get("/starwars/index", {
                params: { page },
                headers: { Authorization: `Bearer ${token}` },
            });
            setCharacters(response.data.data);
        };
        
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
