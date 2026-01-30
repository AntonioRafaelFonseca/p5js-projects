const stopButton = document.getElementById("playB")
const slider = document.getElementById("nRange")
const copyButton = document.getElementById('copyB')
const fC = document.getElementById('fCode')
const checkBox = document.querySelector('#check');

document.addEventListener('keydown', e => {
  const arrows = [37, 38, 39, 40];
  let turnS = max((PI/foll.speed)/25, 0.01)
  if (arrows.includes(e.keyCode)) {
    e.preventDefault(); 
  }

  switch (e.keyCode) {
    
    case 37: // esquerda
      foll.angle -= turnS;
      break;

    case 39: // direita
      foll.angle += turnS;
      break;
  }if (e.key === 'p'){
    pause()
  }

});

function switchControls(){
  foll = new Follower(arms[0].vectA.x, arms[0].vectA.y, arms[0]);
  if (keyBoardC){
    keyBoardC = false;
  }else{
    keyBoardC = true;
  }

}

fetch('text.txt')
  .then(response => response.text())

  .then(data => {
    texto = data;
    fC.textContent = texto
  })

  .catch(err => console.error('Erro ao carregar o arquivo:', err));



copyButton.onclick = () => {
  navigator.clipboard.writeText(texto)
}
stopButton.onclick = () => {
  var v = slider.value
  pause()
}
slider.oninput = () => {
  refresh(slider.value)
}




