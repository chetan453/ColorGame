var t1 = document.getElementById("1");
var t2 = document.getElementById("2");
var t3 = document.getElementById("3");
var t4 = document.getElementById("4");
var t5 = document.getElementById("5");
var t6 = document.getElementById("6");
var count=0;
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


  document.getElementById("header-clue").innerHTML = correctColor;
}
function gamestart(){
  t1.addEventListener("click", function () {
    gameplay(t1,"1"); 
    setTimeout(function(){gameover(t1);},1000)  
  });

  t2.addEventListener("click", function () {
    gameplay(t2,"2");
    setTimeout(function(){gameover(t2);},1000)
  });

  t3.addEventListener("click", function () {
    gameplay(t3,"3");
    setTimeout(function(){gameover(t3);},1000);
  });

  t4.addEventListener("click", function () {
    gameplay(t4,"4");
    setTimeout(function(){gameover(t4);},1000);
  });

  t5.addEventListener("click", function () {
    gameplay(t5,"5");
    setTimeout(function(){gameover(t5);},1000);
  });

  t6.addEventListener("click", function () {
    gameplay(t6,"6");
    setTimeout(function(){gameover(t6);},1000);
  });
}
gamestart();
function gameplay(t,id){
  count++; 
  console.log(count);
  if (t.style.background == correctColor) {
    document.getElementById(id).innerHTML="Correct";
    document.getElementById("header").style.background = correctColor;
    document.getElementById("rules").style.background = correctColor;
    document.getElementsByTagName("h2")[0].style.background = correctColor;
    document.getElementsByTagName("h2")[1].style.background = correctColor;
    setTimeout(function(){document.getElementById(id).innerHTML="";},1000);
  } else {
     document.getElementById(id).innerHTML="Incorrect";
    setTimeout(function(){document.getElementById(id).innerHTML="";},1000);
     t.style.background = "black";
   }
}
function gameover(t){
  if((count==2)||(count==1 &&t.style.background == correctColor)){
    alert("GAMEOVER");
    count=0;
    newGame();
    document.getElementById("1").innerHTML="";
    document.getElementById("2").innerHTML="";
    document.getElementById("3").innerHTML="";
    document.getElementById("4").innerHTML="";
    document.getElementById("5").innerHTML="";
    document.getElementById("6").innerHTML="";
  }
}