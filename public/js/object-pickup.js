AFRAME.registerComponent('object-pickup', {
    schema:{},
    init: function() {
        const Context_AF = this;
        const el = Context_AF.el;
        // store some original values that we can reference when we want to revert
        el.ogParent = JSON.parse(JSON.stringify( (el.object3D.parent.el.id) ));
        el.ogPos = JSON.parse(JSON.stringify( (el.object3D.position) ));
        el.ogScale = JSON.parse(JSON.stringify( (el.object3D.position) ));
        
        Context_AF.el.addEventListener('mousedown', function() {
            // can't pick up object if one is already picked up
            if(document.getElementById('scene').objectSelected == null){
                // set cursor as parent
                el.object3D.parent = document.getElementById("cursor").object3D;
                el.object3D.position.set(0, -0.2, 0.15);
                //el.object3D.scale.set(el.ogScale.x, el.ogScale.y, el.ogScale.z);


                // set as selected object
                document.getElementById('scene').objectSelected = el.id;

                // if on mobile, make UI visible immediately
                if(AFRAME.utils.device.isMobile()) {
                    document.getElementById('radialMenu').object3D.visible = true;
                }
            }
        });


    }
});