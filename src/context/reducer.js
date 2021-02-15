export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after developing
  // token:
  //   "BQDzKKa1W0XIJPN5syKYSgdSuzmqlRPgd32jWqQut6vaOhzCH0sxhVUakByiz8e6YVIECuu8dyMeXzg2aKfxU4gc1Xjsv9XFI01yRgNCnmnwepabWkx3sXEZC5d3VemgeQ79Qw9IhBMi9-Y7Wa4V1PJwGczfFkRykVnSJaKZF6vGXcVm",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
