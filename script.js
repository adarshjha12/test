document.addEventListener('DOMContentLoaded', function() {
  const frontWheel = document.querySelector('.front-wheel');
  const backWheel = document.querySelector('.back-wheel');

  let angle = 0;

  function rotateWheel(wheel) {
      wheel.style.transform = `rotate(${angle}deg)`;
  }

  function animate() {
      angle += 2; // Adjust the increment for speed
      rotateWheel(frontWheel);
      rotateWheel(backWheel);
      requestAnimationFrame(animate);
  }

  animate(); // Start the animation
});
