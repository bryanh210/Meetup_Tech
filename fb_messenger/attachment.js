"use strict";

const apiai_interface = require("./apiai/interface.js");

module.exports = {
    handleLocation: handleLocation
}

function handleLocation(senderID, sessionID, attachment) {
    var coordinates = attachment.payload.coordinates;
    var longitude = coordinates.long;
    var latitude = coordinates.lat;

    var event_obj = {
        name: "share-location",
        data: {
            location: {
                longitude: longitude,
                latitude: latitude
            }
        }
    }

    apiai_interface.sendEventToApiAi(senderID, sessionID, event_obj);
}
