// Add subtle 3D tilt effect based on mouse movement
const container = document.querySelector(".portfolio-container");

document.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset tilt on mouse leave
document.addEventListener("mouseleave", () => {
  container.style.transform = "rotateY(0deg) rotateX(0deg)";
});
