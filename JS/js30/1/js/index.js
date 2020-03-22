const keys = document.querySelectorAll('.key');
const playMusic = function (element, atrybut) {
    element.classList.add('playing');
    setTimeout(() => {
        element.classList.remove('playing')
    }, 100);

    const audio = document.querySelector(`audio[data-key="${atrybut}"]`);
    audio.play();
};

keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyAtribute = key.getAttribute('data-key');
        playMusic(key, keyAtribute)
    });

});

window.addEventListener('keydown', (e) => {
    const keyAtribute = e.keyCode;
    const div = document.querySelector(`div[data-key="${keyAtribute}"]`);
    playMusic(div, keyAtribute);
});