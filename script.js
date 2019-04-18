function fetchMemes() {
  fetch('https://api.imgflip.com/get_memes').then(response => response.json()).then(memes => {
    console.log('memes', memes);
    const img = document.querySelector('img');
    const imgTitle = document.querySelector('.card-title');
    const imgDesc = document.querySelector('.card-description');
    const randomMeme = memes.data.memes[Math.floor(Math.random() * 100)];
    img.src = randomMeme.url;
    imgTitle.innerText = randomMeme.name
  }).catch(error => console.log('error happened!!!', error));
}

const button = document.querySelector('button');

button.addEventListener('click', fetchMemes); 