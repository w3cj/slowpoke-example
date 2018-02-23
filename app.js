const list = document.querySelector('#posts');
const url = 'https://www.reddit.com/r/Awww/.json';

fetch(url)
  .then(parseJson)
  .then(logResult);

function parseJson(response) {
  return response.json();
}

function logResult(result) {
  const children = result.data.children;

  children.forEach((child) => {
    const li = document.createElement('li');
    li.textContent = child.data.title;
    list.appendChild(li);
  });
}
