AFRAME.registerComponent('menu-put-back', {
    schema:{},
    init: function() {
        const Context_AF = this;
        const el = Context_AF.el;

        el.addEventListener('mousedown', function() {
            // highlight selected button
            document.getElementById(el.id).setAttribute('material', 'opacity: 1');

            // move selected object back to origin location
            const scene = document.getElementById('scene');
            const selectedObj = document.getElementById(scene.objectSelected);
            selectedObj.object3D.parent = document.getElementById(selectedObj.ogParent).object3D;
            selectedObj.object3D.position.set(selectedObj.ogPos.x, selectedObj.ogPos.y, selectedObj.ogPos.z);
            
            // set selected object back to null
            document.getElementById('scene').objectSelected = null;
            // revert menu back to original state
            el.object3D.parent.el.object3D.visible = false;
            document.getElementById(el.id).setAttribute('material', 'opacity: 0.2');
        });

    }
});