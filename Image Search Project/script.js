const genMemeBtn = document.querySelector(".gen-meme .gen-btn");
const memeImg = document.querySelector(".gen-meme img");
const memeTitle = document.querySelector(".gen-meme .meme-title");
const memeAuthor = document.querySelector(".gen-meme .author");

const updateDeets = (url, title, author) => {
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML= `Meme by: ${author}`;
}

// const subreddit= documen.querySelector(".gen-meme .subreddit");
const genMeme = () => {
    fetch("https://meme-api.com/gimme").then((response) => response.json().then(data => updateDeets(data.url, data.title, data.author)));
};

genMemeBtn.addEventListener("click", genMeme);


genMeme();