AFRAME.registerComponent('menu-hover', {
    schema:{},
    init: function() {
        const Context_AF = this;
        const el = Context_AF.el;

        // only add hover feature to desktop
        if(!AFRAME.utils.device.isMobile()) {
            el.addEventListener('mouseenter', function() {
                document.getElementById(el.id).setAttribute('material', 'opacity: 1');
            });

            el.addEventListener('mouseleave', function() {
                document.getElementById(el.id).setAttribute('material', 'opacity: 0.2');
            });
        }
    }
});