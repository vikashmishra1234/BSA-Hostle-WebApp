import React, { useEffect, useState } from "react";
import axios from "axios";

const Jokes = () => {
  const [Jokes, setJokes] = useState([]);
  
  useEffect(() => {
    const getJokes = async () => {
      try {
        const response = await axios.get(
          "https://v2.jokeapi.dev/joke/Any?amount=5"
        );
        if (!response.data.error) {
          setJokes(response.data.jokes);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getJokes();
  }, []);

  return (
    <div className="jokes-container">
        {
            Jokes&&Jokes.length>0&& <h1>
            sometimes it's okay to smile</h1>
        }
       
      {Jokes.map((joke, index) => (
        <div key={index} className="joke">
          <span id="someone">SomeOne: {joke.setup}</span> <br />
          <span id="me">Me: {joke.delivery}</span>
          
        </div>
      ))}
    </div>
  );
};

export default Jokes;
