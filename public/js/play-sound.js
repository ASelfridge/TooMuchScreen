AFRAME.registerComponent('play-sound', {
    schema: {},
    init: function() {
        const Context_AF = this;
        const el = Context_AF.el;

        // play sound from src in sound attribute
        el.addEventListener('mousedown', function() {
            el.components['sound'].stopSound();
            el.components['sound'].playSound();
        });
    }
});