// alert("Press The Keys From Key Board Or Click On Instrument Shown");
for (var i = 0; i < document.querySelectorAll(".inst").length; i++) {
  document.querySelectorAll(".inst")[i].addEventListener("click", function() {
    var press = this.innerHTML;

    playing(press);
    animate(press);
  });
}
document.addEventListener("keypress", function(event) {
  var press = event.key;

  press = press.toLowerCase();
  playing(press);
  animate(press);
});


function playing(press) {
  switch (press) {
    case "a": {
      var tom = new Audio("tones/tom-1.mp3");
      tom.play();
      break;
    }
    case "s": {
      var song = new Audio("tones/tom-3.mp3");
      song.play();
      break;
    }
    case "o": {
      var song = new Audio("tones/crash.mp3");
      song.play();
      break;
    }
    case "p": {
      var song = new Audio("tones/snare.mp3");
      song.play();
      break;
    }
    default: {
      var wrong = document.querySelector("h1");
      wrong.innerHTML = "Press Right Key";
      wrong.classList.add("bad");

      setTimeout(function() {
        wrong.innerHTML = "Make Your Own Beat";
        wrong.classList.remove("bad");
      }, 500);
      break;
    }
  }
}

function animate(press) {
  var ret = press;
  var pass = document.querySelector('.' + press);
  pass.classList.add("pressed");
  document.querySelector("h1").classList.add("neon");

  setTimeout(function() {
    pass.classList.remove("pressed");
    document.querySelector("h1").classList.remove("neon");
  }, 100);
}

// const smw = window.matchMedia('(max-width: 1250px)')
// if (smw.matches) {
//   alert('Please Open Site in Desktop Version. Site is Under Development For Mobile View Port.')
// }
