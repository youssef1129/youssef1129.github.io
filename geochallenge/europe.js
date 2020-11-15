var c = document.getElementById("c");
var bu = document.getElementById("bu");
var score = document.getElementById("score");
var img = document.getElementById("img");
var restart = document.getElementById("restart");
var hg = document.getElementById("hg");
var timer = document.getElementById("timer");
var cities = ["paris","madrid","london","berlin","dublin","turin","lisbon","warsaw","vienna","zagreb","kiev","oslo"];
var it;
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  var i = 0;

start();

restart.addEventListener("click",function(){
    restart.style.display="none";
    i=0;
    score.innerHTML = 0;
    start();
   
})

bu.addEventListener("click",function(){
    if(i<cities.length+1){
    c.innerHTML = cities[i];
    locate();
    i++;
    score.innerHTML = parseInt(score.innerHTML)+100;
    clearInterval(it);
    timerdown();
    }
    if(i==cities.length+1){
        c.innerHTML = "finish";
        clearInterval(it);
        restart.style.display ="inherit";
        
    }
});
img.addEventListener("click",function(){
    if(i<cities.length+1){
    c.innerHTML = cities[i];
    locate();
    i++;
    score.innerHTML = parseInt(score.innerHTML)-50;
    clearInterval(it);
    timerdown();
    }
    if(i==cities.length+1){
        c.innerHTML = "finish";
        clearInterval(it);
        restart.style.display ="inherit";
    }
})
function start(){
   i=0;
    shuffle(cities);
    c.innerHTML = cities[i];
    locate();
 i++;
 timerdown();
}
function timerdown(){
   timer.innerHTML = "5";
  it = setInterval(function(){timer.innerHTML = parseInt(timer.innerHTML)-1;},1000);
  setTimeout(function(){
     if(timer.innerHTML == "-1"){
            clearInterval(it);
            alert("you lose");
            timer.innerHTML ="0";
            score.innerHTML="0";
            start();
   }},6000);
}



function locate(){
    
    if(c.innerHTML=="paris"){
        bu.style.top ="470px";
        bu.style.left ="480px";
     }
     if(c.innerHTML=="madrid"){
         bu.style.top ="570px";
         bu.style.left ="420px";
      }
      if(c.innerHTML=="london"){
         bu.style.top ="420px";
         bu.style.left ="450px";
      }
      if(c.innerHTML=="berlin"){
         bu.style.top ="410px";
         bu.style.left ="570px";
      }
      if(c.innerHTML=="dublin"){
         bu.style.top ="400px";
         bu.style.left ="385px";
      }
      if(c.innerHTML=="turin"){
         bu.style.top ="517px";
         bu.style.left ="535px";
      }
      if(c.innerHTML=="lisbon"){
        bu.style.top ="575px";
        bu.style.left ="380px";
     }
     if(c.innerHTML=="warsaw"){
        bu.style.top ="400px";
        bu.style.left ="655px";
     }
     if(c.innerHTML=="vienna"){
        bu.style.top ="450px";
        bu.style.left ="625px";
     }
     if(c.innerHTML=="zagreb"){
        bu.style.top ="500px";
        bu.style.left ="618px";
     }
     if(c.innerHTML=="kiev"){
        bu.style.top ="440px";
        bu.style.left ="750px";
     }
     if(c.innerHTML=="oslo"){
        bu.style.top ="280px";
        bu.style.left ="555px";
     }
     

  }