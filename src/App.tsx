import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

    const [film, setFilm] = useState("");

    useEffect(() => {
        async function getFirstFilm()
        {
            try
            {
                const response = await fetch('https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe');
                if (500 === response.status)
                {
                    setFilm("Oops… something went wrong, try again 🤕")
                }
                else if (418 === response.status)
                {
                    setFilm("" +
                        "")
                }
                let result=await response.json();
                setFilm(result.title);
            }
            catch(error)
            {
                setFilm("error")
            }
        }
        getFirstFilm();
    }, []);



      return (
        <div className="App">
            <h2>
              Studio Ghibli Api
            </h2>
            <h4>
                <a href="https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe">https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe</a>
            </h4>
            <h4>Display fetched film title only</h4>
            <p>
                {film}
            </p>
        </div>
        );
}

export default App;
