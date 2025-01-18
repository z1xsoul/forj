document.addEventListener("DOMContentLoaded", () => {
    // Photo Carousel
    const images = ["https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/429673623_3723049974573620_8287411771494771838_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=bdeb5f&_nc_eui2=AeGQkApYS6sG3SNlbSx5ZiebeNWb-NDELi141Zv40MQuLah9mjj-gtUV39v6fekjJVcPJFvao-P4wImM98lFittb&_nc_ohc=S38Izfl_PDEQ7kNvgE3waLo&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=AJRG1ZGIGGmKDIb1Dvi7Tqd&oh=00_AYAIgM4pSlf9Xdlt53vkXB2FfUguQsybdRqx3Kofra8obA&oe=67916F7F", "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/429821999_3723052257906725_5167519387697430332_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=bdeb5f&_nc_eui2=AeG48lUcwa2krr8iaAM4WJjfUsVyDuot6PFSxXIO6i3o8XCRWO33FtM4E_l5yTFzyzusgnMtYPbxfiYg-o8mIEAc&_nc_ohc=FVg29l6GczYQ7kNvgFAByQ1&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=AJRG1ZGIGGmKDIb1Dvi7Tqd&oh=00_AYBc7_wRXpbH8KCorc6P5XDj1WzeoH_v1XI4oeYrlciMuw&oe=67917CDB", "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/429673623_3723049974573620_8287411771494771838_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=bdeb5f&_nc_eui2=AeGQkApYS6sG3SNlbSx5ZiebeNWb-NDELi141Zv40MQuLah9mjj-gtUV39v6fekjJVcPJFvao-P4wImM98lFittb&_nc_ohc=S38Izfl_PDEQ7kNvgE3waLo&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=AJRG1ZGIGGmKDIb1Dvi7Tqd&oh=00_AYAIgM4pSlf9Xdlt53vkXB2FfUguQsybdRqx3Kofra8obA&oe=67916F7Fimages/photo3.jpg"];
    let currentImageIndex = 0;
    const carouselImage = document.getElementById("carousel-image");

    document.getElementById("prev").addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        carouselImage.src = images[currentImageIndex];
    });

    document.getElementById("next").addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        carouselImage.src = images[currentImageIndex];
    });

    


    // Love Meter
    const loveResult = document.getElementById("love-result");
    document.getElementById("measure-love").addEventListener("click", () => {
        loveResult.textContent = "natural 100%! ikaw lang naman gusto ko ❤️ pake ko sa mga ibang babae. SIPAIN KO PA! kahit gaano pa kaganda"; // Fixed to 100%
    });

    // Message Reveal Section
document.getElementById("reveal-message").addEventListener("click", () => {
    const hiddenMessage = document.getElementById("hidden-message");

    if (hiddenMessage.style.display === "none") {
        hiddenMessage.style.display = "block";
        hiddenMessage.style.opacity = "0";
        hiddenMessage.style.transition = "opacity 0.5s ease";
        setTimeout(() => (hiddenMessage.style.opacity = "1"), 10);
    } else {
        hiddenMessage.style.transition = "opacity 0.5s ease";
        hiddenMessage.style.opacity = "0";
        setTimeout(() => (hiddenMessage.style.display = "none"), 500);
    }
});


    // Confetti Hearts
    const confettiCanvas = document.getElementById("confetti");
    const ctx = confettiCanvas.getContext("2d");
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    let particles = [];
    let confettiTimeout;

    const createHeart = () => {
        return {
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height,
            size: Math.random() * 40 + 10, //size for hearts
            dx: Math.random() * 2 - 1, // Horizontal movement
            dy: Math.random() * 2 - 1, // Vertical movement
            rotation: Math.random() * 360, // Random rotation angle
        };
    };

    const drawHeart = (x, y, size, rotation) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.font = `${size}px Arial`;
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 60%)`; 
        ctx.fillText("❤️", 0, 0);
        ctx.restore();
    };

    const createConfetti = () => {
        particles = [];
        for (let i = 0; i < 100; i++) {
            particles.push(createHeart());
        }
    };

    const drawConfetti = () => {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        particles.forEach((p) => {
            drawHeart(p.x, p.y, p.size, p.rotation);
            p.x += p.dx;
            p.y += p.dy;
            p.rotation += 2; // Rotate
        });
        requestAnimationFrame(drawConfetti);
    };

    document.getElementById("start-confetti").addEventListener("click", () => {
        createConfetti();
        drawConfetti();
        clearTimeout(confettiTimeout);
        confettiTimeout = setTimeout(() => {
            particles = []; // Stopafter 10 seconds
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }, 3000); // duration
    });

    // Hidden Gallery
    document.getElementById("reveal-gallery").addEventListener("click", () => {
        const gallery = document.getElementById("gallery-container");
        gallery.style.display = gallery.style.display === "none" ? "block" : "none";
    });
});
