const stopButton = document.getElementById("playB")
const slider = document.getElementById("nRange")
const copyButton = document.getElementById('copyB')
const fC = document.getElementById('fCode')



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
document.addEventListener("keydown", (event) => {
  if (event.key === "p") {
    pause()
  }
}
);




