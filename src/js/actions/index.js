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
  return function(dispatch) {
    return dispatch({
      type: "SAVE_ACCESS_TOKEN",
      payload: accessToken
    });
  };
}

export function saveRefreshToken(refreshToken) {
  return function(dispatch) {
    return dispatch({
      type: "SAVE_REFRESH_TOKEN",
      payload: refreshToken
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
  return function(dispatch) {
    console.log(userID, formData);
    return fetch("https://api.spotify.com/v1/users/" + userID + "/playlists", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(myJSON => {
        dispatch({ type: "CREATE_PLAYLIST", payload: myJSON });
      })
      .catch(error =>
        // eslint-disable-next-line
        console.error(error)
      );
  };
}

// export function fetchQueryResults(accessToken, searchObject) {
//   return function(dispatch) {
//     let text = searchObject.name.replace(/\s/g, "+");
//     let typesArray = Object.keys(searchObject.filter);
//     let typesQuery = () => {
//       let userFilter = [];
//       typesArray.forEach(type => {
//         if (searchObject.filter[type]) {
//           userFilter.push(type);
//         }
//       });
//       return userFilter.join(",");
//     };
//     let query = "q=" + text + "&type=" + typesQuery();
//     // eslint-disable-next-line
//     let url = "https://api.spotify.com/v1/search?market=from_token&" + query;
//     async function fetchAync() {
//       let response = await fetch(
//         "https://api.spotify.com/v1/search?market=from_token&q=roadhouse%20blue&type=track",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + accessToken
//           }
//         }
//       );
//       let data = await response.json();
//       return data;
//     }
//     fetchAync()
//       .then(data => {
//         console.log("anything");
//         dispatch({ type: "SAVE_RESULTS", payload: data });
//       })
//       .catch(error => console.log(error));

//     console.log("dispatch");
//   };
// }
