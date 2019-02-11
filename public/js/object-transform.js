AFRAME.registerComponent('object-transform', {
    schema: {
        menu: {},
        model: {},
        scale: {default: '1 1 1'},
        rotation: {default: '0 0 0'},
        color: {default: 'pink'}
    },
    init: function() {
        const Context_AF = this;
        const el = Context_AF.el;
        const data = Context_AF.data;
        
        // store the provided menu item that will trigger the transformation
        let menuItem = document.getElementById(data.menu)

        // on mousedown of that menu item
        menuItem.addEventListener('mousedown', function() {
            // grab ID of currently selected object
            let selectedID = document.querySelector('a-scene').objectSelected;
            // only proceed if this object is the selected object within the scene
            if(el.id == selectedID){
                let selectedPos = el.ogPos;

                // convert data strings to array
                let rot = data.rotation.split(" ");
                let scale = data.scale.split(" ");

                // create transform object
                let transformObj = document.createElement('a-entity');
                transformObj.setAttribute('obj-model', 'obj: ' + data.model);
                transformObj.setAttribute('position', {x: selectedPos.x, y: selectedPos.y, z: selectedPos.z});
                transformObj.setAttribute('scale', {x: scale[0], y: scale[1], z: scale[2]});
                transformObj.setAttribute('rotation', {x: rot[0], y: rot[1], z: rot[2]});
                transformObj.setAttribute('material', 'color: ' + data.color);

                // add under same parent as this object
                let parent = document.getElementById(el.ogParent);
                parent.appendChild(transformObj);
                
                // delete selected object
                Context_AF.deleteSelected();

                // set selected object back to null
                document.getElementById('scene').objectSelected = null;
                // revert menu back to original state
                document.getElementById(data.menu).object3D.parent.el.object3D.visible = false;
                document.getElementById(data.menu).setAttribute('material', 'opacity: 0.2');
            }
        });
    },
    deleteSelected: function() {
        // delete this object
        const el = this.el;
        el.parentNode.removeChild(el);
    }
});