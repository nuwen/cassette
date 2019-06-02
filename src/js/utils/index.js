export function applyAccessTokenURL(url, accessToken) {
  if (url && accessToken) {
    return url + "?access_token=" + accessToken;
  }
}
