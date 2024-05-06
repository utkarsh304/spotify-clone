import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read",
    "user-library-read",
    "user-top-read",
    // "user-library-modify",
    "playlist-read-private",
    "playlist-read-collaborative",
    "streaming"
].join(', ');                               // Putting all of the array values in one string next to each other seperated by comma-space.

const params = {
    scope: scopes
}

const queryParamsString = new URLSearchParams(params);

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString.toString()}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    // redirectUri:
});

export default spotifyApi;
