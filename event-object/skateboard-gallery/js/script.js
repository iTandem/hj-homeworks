const allBoard = document.querySelectorAll('.gallery-nav a');
const imgActive = document.querySelector('.gallery-view');
const allBoardTitle = document.querySelectorAll('.gallery-nav a img');
const h2 = document.getElementsByTagName('h2');

for (var i = 0; i < allBoard.length; i++) {
  allBoard[i].addEventListener('click', function (element) {
    select(element);  
  });  
  allBoard[i].title = allBoardTitle[i].title;
}

function select(element) {
  element.preventDefault();
  for (let i = 0; i < allBoard.length; i++) {
    allBoard[i].classList.remove('gallery-current');
  }
  
  element.currentTarget.classList.add('gallery-current');  
  h2[0].innerHTML = element.currentTarget.title;  
  imgActive.src = element.currentTarget.href;    
}