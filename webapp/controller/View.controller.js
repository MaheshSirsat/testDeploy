sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.portfolio.demo.controller.View", {
        onInit: function () {
            console.log('INIT')
        }
    });
});
