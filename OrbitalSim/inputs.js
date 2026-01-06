function resetBodies() {
    bodies = [];
    for (let i = 0; i < NumberOFBodies; i++) {
        bodies.push(
            new ObjectWithG(
                random(50, width),
                random(50, height),
                6,
                random(-1, 1),
                random(-1, 1)
            )
        );
    }
    bT = 255
    bT = 10
}

document.getElementById("hello").onclick = () => {
    resetBodies();
}

const numInput = document.getElementById("numBodies");
const numValueSpan = document.getElementById("numValue");

numInput.oninput = () => {
    const n = parseInt(numInput.value);
    numValueSpan.textContent = n;
    NumberOFBodies = n;
    //resetBodies(); // recria os corpos com o novo número
}
const backgroundT = document.getElementById('border')

backgroundT.oninput = () => {
    if (backgroundT.checked){
        bT = 10
    }else{
        bT = 255
    }
}