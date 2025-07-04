sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/resource/ResourceModel"
], function (UIComponent, ResourceModel) {
  "use strict";

  return UIComponent.extend("com.tuempresa.holamundo.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
    }
  });
});