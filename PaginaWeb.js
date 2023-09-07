document.getElementById('Compiladores').addEventListener('click', function() {
    const target = this.getAttribute('data-target');
    if (target) {
        const destino = document.querySelector(target);
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

document.getElementById('About').addEventListener('click', function() {
    const target = this.getAttribute('data-target');
    if (target) {
        const destino = document.querySelector(target);
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
document.getElementById('Lenguajes').addEventListener('click', function() {
    const target = this.getAttribute('data-target');
    if (target) {
        const destino = document.querySelector(target);
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    }
});