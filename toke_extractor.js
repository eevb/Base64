// Get the token value from the URL
const urlParamss = new URLSearchParams(window.location.search);
const tokens = urlParamss.get('token');

// Hide the secret element if no token is present in the URL
if (!tokens) {
  const secretElement = document.getElementById('secret');
  secretElement.style.display = 'none';
}





// Get the token value from the URL
const urlParams = new URLSearchParams(window.location.search);
const tokenBase64 = urlParams.get('token');

// Decode the token from base64 to plaintext
const tokenBytes = Uint8Array.from(atob(tokenBase64), c => c.charCodeAt(0));
const decoder = new TextDecoder();
const token = decoder.decode(tokenBytes);

// Display the decoded token in an HTML element
const tokenElement = document.getElementById('token');
const typeDelay = 5; // milliseconds to wait between typing each letter
let i = 0; // current index of the letter being typed
function typeNextLetter() {
  if (i < token.length) {
    tokenElement.textContent += token[i];
    i++;
    setTimeout(typeNextLetter, typeDelay);
  }
}
typeNextLetter();

// Old code display message immediately
/*     
// Get the token value from the URL
const urlParams = new URLSearchParams(window.location.search);
const tokenBase64 = urlParams.get('token');

// Decode the token from base64 to plaintext
const tokenBytes = Uint8Array.from(atob(tokenBase64), c => c.charCodeAt(0));
const decoder = new TextDecoder();
const token = decoder.decode(tokenBytes);

// Display the decoded token in an HTML element
const tokenElement = document.getElementById('token');
tokenElement.textContent = token;


*/


// Get the current URL
const url = new URL(window.location.href);

// Remove the query string and everything after it
url.search = '';

// Replace the current URL with the new one without the query string
window.history.replaceState({}, '', url.toString());
