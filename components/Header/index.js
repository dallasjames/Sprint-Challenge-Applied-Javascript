// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    let top = document.querySelector('.header-container');
    
    let header = document.createElement('div');
    header.classList.add('header');
    top.appendChild(header);
    
    let date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019';
    header.appendChild(date);

    let Lambda = document.createElement('h1');
    Lambda.textContent = 'Lambda Times';
    header.appendChild(Lambda);

    let temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';
    header.appendChild(temp);
}

Header();