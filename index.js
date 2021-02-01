var t1 = document.getElementById("1");
var t2 = document.getElementById("2");
var t3 = document.getElementById("3");
var t4 = document.getElementById("4");
var t5 = document.getElementById("5");
var t6 = document.getElementById("6");
var x;
var correctColor;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function newGame() {
  t1.style.background = getRandomColor();
  t2.style.background = getRandomColor();
  t3.style.background = getRandomColor();
  t4.style.background = getRandomColor();
  t5.style.background = getRandomColor();
  t6.style.background = getRandomColor();
  
  x = Math.floor(Math.random() * 6 + 1);

  switch(x){
    case 1: correctColor=t1.style.background;break;
    case 2: correctColor=t2.style.background;break;
    case 3: correctColor=t3.style.background;break;
    case 4: correctColor=t4.style.background;break;
    case 5: correctColor=t5.style.background;break;
    case 6: correctColor=t6.style.background;break;
  }
 console.log(x);
  console.log(correctColor); 

  document.getElementById("header-clue").innerHTML = correctColor;
}
function gameplay(t,id){
  if (t.style.background == correctColor) {
     document.getElementById(id).innerHTML="Correct";
     document.getElementById("header").style.background = correctColor;
   } else {
    document.getElementById(id).innerHTML="Incorrect";
     t.style.background = "black";
   }
}
t1.addEventListener("click", function () {
  gameplay(t1,"1");   
},{once:true});

t2.addEventListener("click", function () {
  gameplay(t2,"2");
  
},{once:true});
t3.addEventListener("click", function () {
  gameplay(t3,"3");
  
},{once:true});
t4.addEventListener("click", function () {
  gameplay(t4,"4");
  
},{once:true});
t5.addEventListener("click", function () {
  gameplay(t5,"5");
  
},{once:true});
t6.addEventListener("click", function () {
  gameplay(t6,"6");
  
},{once:true});