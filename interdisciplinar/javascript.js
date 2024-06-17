document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const carouselContent = document.querySelector(".carousel-content");

    let currentIndex = 0;
    const totalImages = carouselContent.children.length;
    const imageWidth = carouselContent.children[0].offsetWidth;

    carouselContent.style.width = `${totalImages * imageWidth}px`;

    function showImage(index) {
        const offset = -index * imageWidth;
        carouselContent.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + totalImages) % (totalImages -5);
        showImage(currentIndex);
    });

    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % (totalImages - 5);
        showImage(currentIndex);
    });
});


