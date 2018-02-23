const form = document.querySelector('form');

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
  event.preventDefault();

  const formData = new FormData(form); // must be in here!
  const message = formData.get('message');

  // this will vary depending on the API
  // this is the data we are sending to the API
  const data = {
    message
  };

  sendMessage(data);
}

function sendMessage(data) {
  const url = 'https://slowpoke-api.now.sh/say';
  const body = JSON.stringify(data);
  fetch(url, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/json'
    }
  }).then(parseJson).then(showResponse);
}

function parseJson(response) {
  return response.json();
}

function showResponse(result) {
  document.querySelector('#server-message').textContent = result.message;
  document.querySelector('#server-waited').textContent = result.waited;
}
