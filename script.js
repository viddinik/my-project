function getRandomPosition(circle) {
    const rect = circle.getBoundingClientRect();
    const radius = rect.width / 2; // Mavi dairenin yarıçapı
    const eyeSize = 40; // Kırmızı gözlerin boyutu

    // Rastgele açısal konum (polar koordinatlar)
    const angle = Math.random() * Math.PI * 2;
    const distance = (radius - eyeSize / 2) * Math.sqrt(Math.random());

    const randomX = distance * Math.cos(angle);
    const randomY = distance * Math.sin(angle);

    return { x: randomX, y: randomY };
}

function bounceAnimation(eye, circle) {
    const rect = circle.getBoundingClientRect();
    const radius = rect.width / 2;
    const eyeSize = 40;

    let x = 0;
    let y = radius - eyeSize / 2; // Başlangıçta en alt noktaya koy
    let speedX = (Math.random() - 0.5) * 4; // Rastgele sağa sola hız
    let speedY = -2; // Yukarı çıkarken başlangıç hızı

    function animate() {
        x += speedX;
        y += speedY;

        // Duvarlara çarpınca yön değiştir
        if (Math.abs(x) > radius - eyeSize / 2) {
            speedX *= -1;
        }
        if (y <= -radius + eyeSize / 2) {
            speedY *= -1;
        }
        if (y >= radius - eyeSize / 2) {
            speedY *= -1;
        }

        eye.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animate);
    }
    animate();
}

function startBouncing() {
    const eye1 = document.querySelector('.eye1');
    const circle1 = eye1.parentElement;
    bounceAnimation(eye1, circle1);

    const eye2 = document.querySelector('.eye2');
    const circle2 = eye2.parentElement;
    bounceAnimation(eye2, circle2);
}

startBouncing();
