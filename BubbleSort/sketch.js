let numberOfBars = 100;           //set this to whateaver you want
let RandomArray = [];
let substeps = numberOfBars/5;    //decrease the number to increase the number of substeps
let lastCorrectIndex;
let RedBarIndex;
let ItemsToRandomlyAddInMainArray = []
let finishedAnimation = false
let j = 0;

let run = false;

function setup() {
  createCanvas(max(400, numberOfBars), 400);    //limits the canvas width to 400 
  for(let i = 0;i< numberOfBars;i++){
    RandomArray.push(map(i, 0, numberOfBars, 1, height));                 // adds in the numbers
  }
  shuffle(RandomArray, true)
  
  RedBarIndex = 0;
  lastCorrectIndex = RandomArray.length -1;
}

function rebuild(n) {
  run = false;
  numberOfBars = constrain(n, 10, 150);

  RandomArray = [];
  for (let i = 0; i < numberOfBars; i++) {
    RandomArray.push(map(i, 0, numberOfBars, 1, height));
  }

  shuffle(RandomArray, true);

  substeps = numberOfBars / 5;
  RedBarIndex = 0;
  lastCorrectIndex = RandomArray.length - 1;
  finishedAnimation = false;
  j = 0;

  resizeCanvas(max(400, numberOfBars), 400);
}


function getBlockDimensions(list, i){

  var blockWidth = width/list.length;
  var x = i*blockWidth;
  var blockHeight = map(list[i], 1, max(...list), 1, height);
  var y = height - blockHeight;

  var values = [x, y, blockWidth, blockHeight]
  return values
}

function SolveSorting(list, i){

  fill(255, 0, 0);
  var [x, y, w, h] = getBlockDimensions(RandomArray, i);
  rect(x, y, w, h);

  if (list[i] >= list[i+1]){
    [list[i], list[i+1]]=[list[i+1], list[i]]
  }
}

function CountCorrect(list){                        //counts the correct items
  var correct = 0;

  for (var i = 0;i < list.length-1; i++){
    if (list[i] <= list[i+1]){
      correct++;
    }
  }
  return correct;
}

function goAndDraw(l){                                //iterate over all the items in a list and draw them

  for (let j = 0;j < l.length;j++){                 

    fill(255);
    
    var [x, y, w, h] = getBlockDimensions(l, j);
    rect(x, y, w, h);
  }
}

function draw() {                         //main loop
  if (run){
    frameRate(60)
    if(CountCorrect(RandomArray) !== RandomArray.length - 1){
      for (var current=0;current<substeps;current++){
        background(0);
        
        goAndDraw(RandomArray);
        
        //substeps = map(mouseX, 0, 200, 1, numberOfBars)      You can add this here to be able to control with the mouse X position the substeps
        
        noStroke()
        RedBarIndex++;
        
        if (RedBarIndex > lastCorrectIndex){
          RedBarIndex = 0;
          lastCorrectIndex -= 1;
        }
        

        if (CountCorrect(RandomArray) !== RandomArray.length - 1) {
          SolveSorting(RandomArray, RedBarIndex);
          }
          goAndDraw(RandomArray)
      }
    }
    else{
      playAnimation()
    }
  }
  else {
    background(0)
    fill(255)
    textAlign(CENTER, CENTER);               //|
    textFont('Courier New');                 //|
    textStyle(BOLD)                          //|-- Text Settings
    textSize(24);                            //|
    text('Press Restart to Start', width / 2, height / 6);  //|
  }
}
function playAnimation(){
  if (finishedAnimation){
    goAndDraw(RandomArray)
    //noLoop()
    fill(255)
    textAlign(CENTER, CENTER);               //|
    textFont('Courier New');                 //|
    textStyle(BOLD)                          //|-- Text Settings
    textSize(64);                            //|
    text('DONE!!!', width / 2, height / 6);  //|
  }

  else{
    if(j > RandomArray.length - 1){
        finishedAnimation = true
      }
    j++;
    fill(0, 255, 0);
    var [x, y, w, h] = getBlockDimensions(RandomArray, j);
    rect(x, y, w, h);
  }
}