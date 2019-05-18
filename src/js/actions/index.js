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
        dispatch({ type: "FETCH_USER_DATA", payload: { ...myJson } });
      });
  };
}

export function saveAccessToken(accessToken) {
  // console.log("actions: " + accessToken);
  return function(dispatch) {
    return dispatch({
      type: "SAVE_ACCESS_TOKEN",
      payload: accessToken
    });
  };
}

export function updateLoadingState(boolean) {
  return function(dispatch) {
    return dispatch({
      type: "UPDATE_LOADING_STATE",
      payload: boolean
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
      .then(response => response.json())
      .then(function(myJson) {
        dispatch({ type: "FETCH_PLAYLIST_SONGS", payload: myJson });
      });
  };
}

export function createPlaylist(accessToken, userID, formData) {
  console.log(formData);
  return function(dispatch) {
    console.log(JSON.stringify(formData));
    return fetch("https://api.spotify.com/v1/users/" + userID + "/playlists", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(myJSON => {
        dispatch({ type: "CREATE_PLAYLIST", payload: myJSON });
      })
      .catch(error => console.error(error));
  };
}
