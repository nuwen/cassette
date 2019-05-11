export function fetchUserData(accessToken) {
  return function(dispatch) {
    return fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + accessToken
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        dispatch({ type: "FETCH_USER_DATA", payload: myJson });
      });
  };
}

export function saveAccessToken(accessToken) {
  return function(dispatch) {
    return dispatch({
      type: "SAVE_ACCESS_TOKEN",
      payload: accessToken
    });
  };
}

export function fetchPlaylistsData(accessToken) {
  return function(dispatch) {
    return fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: "Bearer " + accessToken
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        dispatch({ type: "FETCH_USER_PLAYLISTS", payload: myJson });
      });
  };
}

export function fetchPlaylistData(accessToken, playlistID) {
  return function(dispatch) {
    return fetch("https://api.spotify.com/v1/playlists/" + playlistID, {
      headers: {
        Authorization: "Bearer " + accessToken
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        dispatch({ type: "FETCH_PLAYLIST_SONGS", payload: myJson });
      });
  };
}
