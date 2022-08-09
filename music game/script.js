window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');

    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#aa82df",
        "#c054",
        "#31836e",
        "#6b1c6b"
    ];

    //Onclick sound is opened
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    //Create a function that pop bubbles

    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease-in'
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
}); 