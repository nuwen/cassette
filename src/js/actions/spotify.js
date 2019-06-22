export async function sendQuery(accessToken, searchObject) {
  let text = searchObject.name.replace(/\s/g, "+");
  let typesArray = Object.keys(searchObject.filter);
  let typesQuery = () => {
    let userFilter = [];
    typesArray.forEach(type => {
      if (searchObject.filter[type]) {
        userFilter.push(type);
      }
    });
    return userFilter.join(",");
  };
  let query = "q=" + text + "&type=" + typesQuery();
  // eslint-disable-next-line
  let url = "https://api.spotify.com/v1/search?market=from_token&" + query;
  async function fetchAync() {
    let response = await fetch(
      "https://api.spotify.com/v1/search?market=from_token&q=roadhouse%20blue&type=track",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken
        }
      }
    );
    let data = await response.json();
    console.log(data);
    return data;
  }
  let results = fetchAync()
    .then(data => console.log(data))
    .catch(error => console.log(error));
  return dispatch => {
    console.log("test", results);
    return dispatch({ type: "SAVE_RESULTS", payload: results });
  };
}
