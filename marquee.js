document.addEventListener("DOMContentLoaded", function () {
  const marquees = document.querySelectorAll(".marquee-text"); // Збираємо всі блоки marquee

  marquees.forEach((marquee) => {
    const marqueeContent = marquee.querySelectorAll(".marquee-track");
    const p = marqueeContent[0].querySelector("p");
    const screenWidth = window.innerWidth; // Ширина екрану
    const imageWidth = p.offsetWidth; // Ширина одного зображення

    // Розрахунок кількості зображень для заповнення ширини екрана
    const numImages = Math.ceil(screenWidth / imageWidth) *2; // +1 для перекриття

    // Дублювання зображень
    for (let i = 1; i < numImages; i++) {
      marqueeContent.forEach(content => content.appendChild(content.querySelector('p').cloneNode(true)))
    }
  });
});
