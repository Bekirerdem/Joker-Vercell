function toggle() {
    let trailer = document.querySelector('.trailer');
    let iframe = document.querySelector('iframe');
    trailer.classList.toggle('active');
    iframe.currentTime = 0;
    iframe.pause();
}
