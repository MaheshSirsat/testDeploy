sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "com/portfolio/demo/model/models"
], function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("com.portfolio.demo.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // Initialize Router
            this.getRouter().initialize();

            // Set Models
            this.setModel(models.createDeviceModel(), "device");
            this.setModel(models.createPortfolioModel(), "portfolio");
        },

        createContent: function () {
            // Load and return App.view.xml to ensure the App control is available
            return sap.ui.view({
                viewName: "com.portfolio.demo.view.App",
                type: "XML",
                id: "app"
            });
        }
    });
});
