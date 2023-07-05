
document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
  });
  var character = document.getElementById("character");



//   =================================moveLeft=======================



  function moveLeft(){
      let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      left -= 100;
      if(left>=0){
          character.style.left = left + "px";
      }
  }

//   ==============moveRight====================


  function moveRight(){
      let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      left += 100;
      if(left<300){
          character.style.left = left + "px";
      }
  }


//   =================== block game ========================= 
  var block = document.getElementById("block");
  var counter = 0;
  block.addEventListener('animationiteration',  function () {
      var random = Math.floor(Math.random() * 3);
      left = random * 100;
      block.style.left = left + "px";
      counter++;
  });


//   ==============Game Over =========================
  setInterval(function(){
      var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
      if(characterLeft==blockLeft && blockTop<500 && blockTop>300){
          alert("Game over. Score: " + counter);
          block.style.animation = "none";
          counter = 0
      }
      document.getElementById("score").innerHTML = `${counter}`
     
  },1);
  
  
  
  
  document.getElementById("right").addEventListener("touchstart", moveRight);
  document.getElementById("left").addEventListener("touchstart", moveLeft);
  
// =============================play=========================

function play(){
    block.style.animation = ' slide 1s infinite linear'
}
