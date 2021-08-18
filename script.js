document.querySelector('.ryaz').style.display="none";

anime ({
  targets: '.green-gradient',
  opacity: [0, 1],
  rotate: 360,
  translateX: -70,
  duration: 8000
});

anime ({
  targets: '.blue-gradient',
  delay: 500,
  opacity: [0, 1],
  rotate: 360,
  translateX: 70,
  duration: 8000
});

anime ({
  targets: '.logo',
  keyframes: [
    { delay: 500 , scale: 0.5, duration: 800 },
    { delay: 100 , duration: 1000 },
  ],
  easing: 'easeInSine'
});

var textWrapper = document.querySelector('.ryaz .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

setTimeout(() => {
  document.querySelector('.ryaz').style.display="block";
}, 3000);

anime.timeline()
.add({
  targets: '.ryaz',
  scaleY: [0,1],
  opacity: [0.5,1],
  easing: "easeOutExpo",
  duration: 100
})
.add({
  targets: '.ryaz',
  translateX: [0, document.querySelector('.ryaz .letters').getBoundingClientRect().width + 10],
  easing: "easeOutExpo",
  duration: 700,
  delay: 2000
}).add({
  targets: '.ryaz .letter',
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 2000,
  offset: '-=775',
  delay: (el, i) => 100 * (i+1)
});

var textWrapper = document.querySelector('.tagline');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.tagline .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 5000,
    delay: (el, i) => 4000 + 30 * i
    // delay: 5000
  });