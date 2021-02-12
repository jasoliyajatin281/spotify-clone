import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import spotifyWebApi from "spotify-web-api-js";

// Connect spotify to react
const spotify = new spotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // To  hide token from url in security perpose
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("👨", user);
      });
    }
  }, []);

  return (
    <div className="app">{token ? <h1>I am logged in </h1> : <Login />}</div>
  );
}

export default App;
