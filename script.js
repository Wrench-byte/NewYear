function pantalla1() {
    setTimeout(() => {
        document.getElementById('texto1').classList.replace('texto1', 'texto1anim');
    }, 3000);

    setTimeout(() => {
        document.getElementById('cuerpo').classList.replace('cuerpo', 'cuerpo1');
    }, 4000);
    
    setTimeout(() => {
        document.getElementById('bromita1').textContent = 'Василиса';
    }, 7000);

    setTimeout(() => {
        document.getElementById('fotos').classList.replace('fotos', 'fotos1');
    }, 6000);

}