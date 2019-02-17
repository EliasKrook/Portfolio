document.querySelector(".test").onclick= changebackground;

function changebackground(){
    console.log("I'm working");
    document.querySelector("body").style.background = random_rgba();
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }


  setInterval(changebackground,2000);