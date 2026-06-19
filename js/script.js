function flipPage(pageId) {
    const page = document.getElementById(pageId);
    page.classList.add('flipped');
    
    // Efecto de mover el libro ligeramente al abrir la portada
    if(pageId === 'cover') {
        document.getElementById('book').style.transform = 'translateX(20%)';
    }
}

function resetBook(event) {
    // Evita que el clic se propague a la página inferior
    event.stopPropagation(); 
    
    document.getElementById('cover').classList.remove('flipped');
    document.getElementById('page1').classList.remove('flipped');
    document.getElementById('book').style.transform = 'translateX(0)';
}

function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const btn = document.getElementById('playBtn');
    
    if (audio.paused) {
        audio.muted = false;
        audio.play().catch(() => {
            console.log('Error: No se puede reproducir la música');
        });
        btn.textContent = '🎵 Música OFF';
        btn.style.background = 'linear-gradient(135deg, #c41e3a, #8b0000)';
    } else {
        audio.pause();
        btn.textContent = '🎵 Música ON';
        btn.style.background = 'linear-gradient(135deg, #d4af37, #c5a028)';
    }
}

// Intentar reproducir la música automáticamente cuando la página carga
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    
    audio.volume = 0.3;
    
    // Permitir reproducción automática sin sonido, luego reproducir con sonido
    setTimeout(() => {
        audio.muted = false;
        audio.play().catch(() => {
            // Si falla el autoplay, mostrar que el usuario debe hacer clic
            playBtn.textContent = '🎵 Click para Música';
            playBtn.style.background = 'linear-gradient(135deg, #ffd700, #daa520)';
        }).then(() => {
            playBtn.textContent = '🎵 Música OFF';
            playBtn.style.background = 'linear-gradient(135deg, #c41e3a, #8b0000)';
        });
    }, 1000);
    
    // También permitir activar con cualquier clic en la página
    document.addEventListener('click', () => {
        if (audio.paused && audio.muted === false) {
            audio.play().catch(() => {
                console.log('Audio no puede reproducirse');
            });
        }
    }, { once: true });
});
