const pauseBtn = document.querySelector('#pauseBtn');
const animationContainer = document.querySelector('.animation-container')
const man = document.querySelector('.man')

pauseBtn.addEventListener('click', () => {
  animationContainer.classList.toggle('running');
  animationContainer.classList.toggle('paused');
  man.classList.toggle('running');
  man.classList.toggle('paused');
  pauseBtn.classList.toggle('running');
  pauseBtn.classList.toggle('paused');
  if (pauseBtn.classList.contains('running')) {
    pauseBtn.textContent = 'Pause The Animation';
  } else if (pauseBtn.classList.contains('paused')) {
    pauseBtn.textContent = 'Run The Animation';
  }
})

