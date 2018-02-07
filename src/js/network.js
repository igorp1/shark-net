const Helpers = require('./helpers.js');

export let Network = NetworkFactory;

function NetworkFactory(CONFIG, google, map){
    let Network = {
        addNode : function(nodeType, position) { this.nodes.push(this.nodeFactory(nodeType, position)); },
        nodeFactory :  MakeNodeFactory(CONFIG.nodeStyles, google)
    }
    let netObject = Object.create(Network, {
        nodes : { value : new Array() }
    });

    return netObject;

    function MakeNodeFactory(nodeStyles, google) {
        return function(type, position){
    
            // object 
            var Node = {
                latLng : {},
                maps_marker : null,
                type : null
            }
        
            // create node instance
            var node = Object.create(Node);
        
            // generate node id
            node.id = Helpers.generateID();
        
            // set position
            node.latLng = position;
        
            // set Type
            node.type = type;
        
            // create marker
            var markerIcon = {
                url: nodeStyles.icons[type],
                scaledSize: new google.maps.Size(20, 35),
                origin: new google.maps.Point(0,0),
                anchor: new google.maps.Point(10,35),
                labelOrigin: new google.maps.Point(45, 15)
            };
        
            node.maps_marker = new google.maps.Marker({
                position: position,
                map: map,
                label: {
                    text: node.id,
                    color: nodeStyles.colors[type],
                    fontSize: "18px",
                    fontWeight: "700",
                    fontFamily: "Anonymous Pro"
                },
                icon: markerIcon,
                animation : google.maps.Animation.DROP
            });
        
            return node;
        
        }
    }

}
    






