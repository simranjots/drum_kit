
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    music(this.innerHTML);
    buttonAnimation(this.innerHTML);

  });
}

document.addEventListener("keypress", function(event) {
  music(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
});


function music(keystrokes) {
  switch (keystrokes) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    default:

  }
}

function buttonAnimation(keystrokes){
  var activebutton = document.querySelector("." + keystrokes);
  activebutton.classList.add("pressed");
  setTimeout(function () {
    activebutton.classList.remove("pressed");
  },100);

}
