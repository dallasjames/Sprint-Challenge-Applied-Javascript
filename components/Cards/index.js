// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function cardMaker(obj) {
    let cards = document.querySelector('.cards-container')
    for (let i = 0; i < obj.javascript.length; i++) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        let headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = `${obj.javascript[i].headline}`;
        cardDiv.appendChild(headline);
        
        let authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        cardDiv.appendChild(authorDiv);
        
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container')
        authorDiv.appendChild(imgDiv);
        
        let img = document.createElement('img');
        img.setAttribute('src', `${obj.javascript[i].authorPhoto}`);
        imgDiv.appendChild(img);
        
        let authorName = document.createElement('span');
        authorName.textContet = `${obj.javascript[i].authorName}`;
        authorDiv.appendChild(authorName);
        
        cards.appendChild(cardDiv);    
    }
    for (let i = 0; i < obj.bootstrap.length; i++) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        let headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = `${obj.bootstrap[i].headline}`;
        cardDiv.appendChild(headline);
        
        let authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        cardDiv.appendChild(authorDiv);
        
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container')
        authorDiv.appendChild(imgDiv);
        
        let img = document.createElement('img');
        img.setAttribute('src', `${obj.bootstrap[i].authorPhoto}`);
        imgDiv.appendChild(img);
        
        let authorName = document.createElement('span');
        authorName.textContet = `${obj.bootstrap[i].authorName}`;
        authorDiv.appendChild(authorName);
        
        cards.appendChild(cardDiv);    
    }
    for (let i = 0; i < obj.technology.length; i++) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        let headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = `${obj.technology[i].headline}`;
        cardDiv.appendChild(headline);
        
        let authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        cardDiv.appendChild(authorDiv);
        
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container')
        authorDiv.appendChild(imgDiv);
        
        let img = document.createElement('img');
        img.setAttribute('src', `${obj.technology[i].authorPhoto}`);
        imgDiv.appendChild(img);
        
        let authorName = document.createElement('span');
        authorName.textContet = `${obj.technology[i].authorName}`;
        authorDiv.appendChild(authorName);
        
        cards.appendChild(cardDiv);    
    }
    for (let i = 0; i < obj.jquery.length; i++) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        let headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = `${obj.jquery[i].headline}`;
        cardDiv.appendChild(headline);
        
        let authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        cardDiv.appendChild(authorDiv);
        
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container')
        authorDiv.appendChild(imgDiv);
        
        let img = document.createElement('img');
        img.setAttribute('src', `${obj.jquery[i].authorPhoto}`);
        imgDiv.appendChild(img);
        
        let authorName = document.createElement('span');
        authorName.textContet = `${obj.jquery[i].authorName}`;
        authorDiv.appendChild(authorName);
        
        cards.appendChild(cardDiv);    
    }
    for (let i = 0; i < obj.node.length; i++) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        let headline = document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = `${obj.node[i].headline}`;
        cardDiv.appendChild(headline);
        
        let authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        cardDiv.appendChild(authorDiv);
        
        let imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container')
        authorDiv.appendChild(imgDiv);
        
        let img = document.createElement('img');
        img.setAttribute('src', `${obj.node[i].authorPhoto}`);
        imgDiv.appendChild(img);
        
        let authorName = document.createElement('span');
        authorName.textContet = `${obj.node[i].authorName}`;
        authorDiv.appendChild(authorName);
        
        cards.appendChild(cardDiv);    
    }
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response.data.articles);
        document.querySelector('.cards-container').append(cardMaker(response.data.articles));
    })
    .catch((error) => {
        console.log(error);
    })