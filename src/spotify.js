// Spotify Doc
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#authenticating-with-spotify

// Spotify Login Url
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "d1055e96924d4724a02c1adf1a9b082b";

// This allow us to correct permission to do things
// View your Spotify account data, Take actions in Spotify on your behalf, View your activity on Spotify

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// When click on login link and get back access token
//http://localhost:3000/#access_token=mysupersecretkey&name=jatin

// Pull out token from url
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #access_token=mysupersecretkey&name=jatin
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// Main login URL
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
