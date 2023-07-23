const button = document.getElementById('hero-cta');
button.addEventListener('click', () => {
  button.style.animation = "scale-card 1s alternate-reverse ease-out";
    setTimeout( ()=> {
      button.style.animation = "";
  }, 500);
})