"use strict";

// Imports
const css = require('../css/app.css');
const CONFIG = require('./config.js').CONFIG;
const Helpers = require('./helpers.js');
const Network = require('./network.js').Network;
let GoogleMapsLoader = require('google-maps');

// Globals
let _map;
let _network = null;

// Initialize map
GoogleMapsLoader.KEY = CONFIG.mapInit.ApiKey;
GoogleMapsLoader.load( (google) => {
    // init map
    _map = new google.maps.Map(document.getElementById('map'), {
        zoom: CONFIG.mapInit.zoom,
        center: CONFIG.mapInit.center,
        styles: CONFIG.mapStyles
    });

    _map.addListener('click', function(e) {
        let click_position = {lat: e.latLng.lat(), lng: e.latLng.lng()};        
        let nodeType = document.getElementById("node-type-selector").value;
        _network.addNode(nodeType, click_position);
    });

    // init network
    _network = new Network(CONFIG, google, _map);

});


