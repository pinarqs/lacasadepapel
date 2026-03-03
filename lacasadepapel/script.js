/* ========================= */
/* SCROLL FADE */
/* ========================= */

const faders = document.querySelectorAll(".fade-in");

const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver(function(
    entries,
    observer
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

/* ========================= */
/* BOMB COUNTDOWN */
/* ========================= */

let count = 10;
const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
    count--;
    countdownEl.textContent = count;

    if (count <= 0) {
        clearInterval(timer);
        countdownEl.textContent = "💥";
        alert("SOYGUN BAŞLADI!");
    }
}, 1000);

/* ========================= */
/* MONEY RAIN */
/* ========================= */

const moneyContainer = document.getElementById("money-container");

function createMoney() {
    const money = document.createElement("div");
    money.classList.add("money");
    money.innerHTML = "💵";
    money.style.left = Math.random() * 100 + "vw";
    money.style.animationDuration = (Math.random() * 3 + 2) + "s";
    moneyContainer.appendChild(money);

    setTimeout(() => {
        money.remove();
    }, 5000);
}

setInterval(createMoney, 300);

/* ========================= */
/* AUTO PLAY FIX */
/* ========================= */

document.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.play();
});
