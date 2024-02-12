const CLIENT_ID = 'YOUR_CLIENT_ID';
const API_KEY = 'YOUR_API_KEY';
const SCOPES = 'https://www.googleapis.com/auth/webmasters';

function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/webmasters/v3/rest"],
    scope: SCOPES
  }).then(function () {
    // Mengamankan bahwa pengguna sudah masuk
    if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
      gapi.auth2.getAuthInstance().signIn();
    }
  });
}

function deleteSitemaps() {
  const domain = document.getElementById('domain').value.trim();
  const sitemapPaths = document.getElementById('sitemapPaths').value.trim().split('\n').filter(Boolean);

  const accessToken = gapi.auth.getToken().access_token;

  let output = '';
  if (domain && sitemapPaths.length > 0) {
    for (const path of sitemapPaths) {
      const xhr = new XMLHttpRequest();
      xhr.open('DELETE', `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(domain)}/sitemaps/${encodeURIComponent(path)}`);
      xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 204) {
            output += `Sitemap ${path} deleted successfully.\n`;
          } else {
            output += `Error deleting sitemap ${path}: ${xhr.status}\n`;
          }
          document.getElementById('output').textContent = output;
        }
      };
      xhr.send();
    }
  } else {
    output = 'Please provide domain and sitemap paths.';
    document.getElementById('output').textContent = output;
  }
}
