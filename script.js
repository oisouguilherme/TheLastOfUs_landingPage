const buttons = document.querySelectorAll('.button');
const images = document.querySelectorAll('.image')

buttons.forEach((button, indice)=>{
  button.addEventListener('click', ()=>{
    desativarbuttonselected();

    button.classList.add('selected');

    hiddenImageAticve();

    images[indice].classList.add('ativa');
  })
})

function hiddenImageAticve() {
  const imageAtive = document.querySelector('.ativa');
  imageAtive.classList.remove('ativa');
}

function desativarbuttonselected() {
  const buttonSelected = document.querySelector('.selected');
  buttonSelected.classList.remove('selected');
}
