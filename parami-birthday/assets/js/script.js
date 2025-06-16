document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const starsContainer = document.querySelector('.stars');
    if (starsContainer) {
        for (let i = 0; i < 80; i++) {
            const s = document.createElement('span');
            s.className = 'star';
            s.style.top = Math.random() * 100 + '%';
            s.style.left = Math.random() * 100 + '%';
            starsContainer.appendChild(s);
        }
    }

    if (envelope) {
        envelope.addEventListener('click', function() {
            envelope.classList.add('open');
            for (let i = 0; i < 10; i++) {
                const sp = document.createElement('span');
                sp.className = 'sparkle';
                sp.style.top = 40 + Math.random() * 20 + '%';
                sp.style.left = 40 + Math.random() * 20 + '%';
                document.body.appendChild(sp);
                setTimeout(() => sp.remove(), 800);
            }
            setTimeout(() => {
                window.location.href = 'journey.html';
            }, 600);
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
            for (let i = 0; i < 20; i++) {
                const c = document.createElement('div');
                c.className = 'confetti';
                c.style.left = Math.random() * 100 + '%';
                c.style.background = `hsl(${Math.random()*360},70%,60%)`;
                cake.appendChild(c);
                setTimeout(() => c.remove(), 1000);
            }
            for (let i = 0; i < 3; i++) {
                const b = document.createElement('div');
                b.className = 'balloon';
                b.style.left = 30 + i*20 + '%';
                cake.appendChild(b);
                setTimeout(() => b.remove(), 4000);
            }
            const wish = document.querySelector('.wish');
            if (wish) wish.textContent = 'Wish made! 🎉';
        });
    }

    const photoContainer = document.querySelector('.photos');
    if (photoContainer) {
        const figures = photoContainer.querySelectorAll('figure');
        figures.forEach(fig => {
            const rect = photoContainer.getBoundingClientRect();
            const x = Math.random() * (rect.width - 160);
            const y = Math.random() * (rect.height - 160);
            fig.style.left = x + 'px';
            fig.style.top = y + 'px';
            fig.addEventListener('mousedown', startDrag);
        });

        function startDrag(e) {
            const fig = e.currentTarget;
            const offsetX = e.clientX - fig.offsetLeft;
            const offsetY = e.clientY - fig.offsetTop;
            function move(ev) {
                fig.style.left = (ev.clientX - offsetX) + 'px';
                fig.style.top = (ev.clientY - offsetY) + 'px';
            }
            function up() {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', up);
            }
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        }
    }


    const giftBtn = document.getElementById('gift-btn');
    const giftBox = document.getElementById('gift-box');
    if (giftBtn && giftBox) {
        giftBtn.addEventListener('click', () => {
            const opening = !giftBox.classList.contains('show');
            giftBox.classList.toggle('show');
            if (opening) {
                for (let i = 0; i < 5; i++) {
                    const b = document.createElement('div');
                    b.className = 'balloon';
                    b.style.left = 20 + i*15 + '%';
                    document.body.appendChild(b);
                    setTimeout(() => b.remove(), 4000);
                }
            }
        });
    }
    const heartsStage = document.body.classList.contains('journey') ? document.body : null;
    if (heartsStage) {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            if (Math.random() < 0.5) heart.classList.add('pink');
            if (Math.random() < 0.5) heart.classList.add('small');
            if (Math.random() > 0.7) heart.classList.add('large');
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = 3 + Math.random() * 2 + 's';
            heartsStage.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, 700);
    }
});

