const startWorkingTogether = () => {
  console.log("Get in touch and let's start working together!");
};

startWorkingTogether();

/* Demo purposes only */
/* Demo purposes only */
$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});

//Capturam toate elementele cu clasa pie din document
let pies = $(".pie");
let offsetPoint = 1250;

// function care adauga si scoate clasa animate
const anmiate = () => {
  for (let i = 0; i <= pies.length; i++) {
    $(pies[i]).toggleClass("animate");
  }
};

let canAnimate = true;

// Scroll eveniment care invoca function de mai sus atunci cand userul ajunge la valoarea scroll peste 540
$(window).scroll(() => {
  const topNow = document.documentElement.scrollTop;
  if (topNow >= 520 && canAnimate) {
    anmiate();

    canAnimate = false;

    setTimeout(() => {
      canAnimate = true;
      anmiate();
    }, 2000);
  }
});
