import '../sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const imagesContainerEl = document.querySelector('.slider__images-container');
    const imag1El = document.querySelector('.slider__image-container--first img');
    const imag2El = document.querySelector('.slider__image-container--second');

    function adjustImagesSize() {
        const imagesCOntainerWidth = imagesContainerEl.offsetWidth;
        imag1El.style.width = imagesCOntainerWidth + 'px';
        imag2El.style.width = imagesCOntainerWidth + 'px';
    }


    window.addEventListener('resize',
        adjustImagesSize);
    adjustImagesSize();

})