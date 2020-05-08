// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
function myCards(data){
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const author = document.createElement('div');
    const img = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    author.classList.add('author');
    img.classList.add('img-container');
    
    cardHeadline.textContent = data.headline;
    authorImg.src = data.authorPhoto;
    authorName.textContent = data.authorName;


    card.appendChild(cardHeadline);
    card.appendChild(author);
    author.appendChild(img);
    img.appendChild(authorImg);
    author.appendChild(authorName);
    
    return card;
};  


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    
    const javascript = response.data.articles.javascript;
javascript.forEach(moreData => {
    const newCard = myCards(moreData);
    const cardContainer = document.querySelector('.cards-container');
    cardContainer.appendChild(newCard);
});
const bootstrap = response.data.articles.bootstrap;
bootstrap.forEach(moreData => {
    const newCard = myCards(moreData);
    const cardContainer = document.querySelector('.cards-container');
    cardContainer.appendChild(newCard);
})
const technology = response.data.articles.technology;
technology.forEach(moreData => {
    const newCard = myCards(moreData);
    const cardContainer = document.querySelector('.cards-container');
    cardContainer.appendChild(newCard);
})
const jquery = response.data.articles.jquery;
jquery.forEach(moreData => {
    const newCard = myCards(moreData);
    const cardContainer = document.querySelector('.cards-container');
    cardContainer.appendChild(newCard);
})
const nodeJs = response.data.articles.nodeJs;
nodeJs.forEach(moreData => {
    const newCard = myCards(moreData);
const cardContainer = document.querySelector('.cards-container');
cardContainer.appendChild(newCard);
})
} )
.catch(error => {
    console.log(error);
})
