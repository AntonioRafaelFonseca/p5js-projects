const rButton = document.getElementById('Restart');
const nBars = document.getElementById('nBars');

rButton.onclick = () => {
  rebuild(numberOfBars);
};

nBars.oninput = () => {
  let nb = parseInt(nBars.value);
  rebuild(nb);
};
