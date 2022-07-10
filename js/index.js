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

// function care adauga si scoate clasa animate
const animate = () => {
  for (let i = 0; i <= pies.length; i++) {
    $(pies[i]).toggleClass("animate");
  }
};

let canAnimate = true;

// Scroll eveniment care invoca function de mai sus atunci cand userul ajunge la valoarea scroll peste 540
$(window).scroll(() => {
  const topNow = document.documentElement.scrollTop;
  if (topNow >= 520 && canAnimate) {
    animate();

    canAnimate = false;

    setTimeout(() => {
      canAnimate = true;
      animate();
    }, 2000);
  }
});
