document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    if (envelope) {
        envelope.addEventListener('click', function() {
            window.location.href = 'journey.html';
        });
    }

    const music = document.getElementById('bg-music');
    const toggle = document.getElementById('mute-toggle');
    if (music && toggle) {
        music.volume = 0.4;
        music.play();
        toggle.addEventListener('click', () => {
            if (music.muted) {
                music.muted = false;
                toggle.textContent = '🔊';
            } else {
                music.muted = true;
                toggle.textContent = '🔈';
            }
        });
    }

    const cake = document.getElementById('cake-element');
    if (cake) {
        cake.addEventListener('click', () => {
            document.querySelectorAll('.flame').forEach(f => f.style.display = 'none');
            cake.classList.add('celebrate');
        });
    }

    const giftBtn = document.getElementById('gift-btn');
    const giftBox = document.getElementById('gift-box');
    if (giftBtn && giftBox) {
        giftBtn.addEventListener('click', () => {
            giftBox.classList.toggle('hidden');
        });
    }
    const heartsStage = document.getElementById('hearts');
    if (heartsStage) {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = 3 + Math.random() * 2 + 's';
            heartsStage.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, 500);
    }
});

