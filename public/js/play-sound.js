AFRAME.registerComponent('play-sound', {
    schema: {},
    init: function() {
        console.log('init');
        const Context_AF = this;
        const el = Context_AF.el;

        // play sound from src in sound attribute
        el.addEventListener('mousedown', function() {
            console.log('sound should play!');
            el.components['sound'].stopSound();
            el.components['sound'].playSound();
        });
    }
});