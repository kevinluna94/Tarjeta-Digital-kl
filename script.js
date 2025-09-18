document.addEventListener("DOMContentLoaded", () => {
  const profile = document.querySelector(".profile-img");
  const buttons = document.querySelectorAll(".btn-circle");

  profile.style.transform = "translate(-50%, -50%) scale(1)";

  const radius = 110;
  const angleStep = (2 * Math.PI) / buttons.length;

  buttons.forEach((btn, i) => {
    const angle = i * angleStep - Math.PI/2;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    setTimeout(() => {
      btn.style.left = `calc(50% + ${x}px)`;
      btn.style.top = `calc(50% + ${y}px)`;
      btn.style.opacity = 1;
      btn.style.transform = "translate(-50%, -50%) scale(1)";
    }, 600 + i * 150);
  });
});
