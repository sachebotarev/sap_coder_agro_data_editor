sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"mymy_odata_editor/model/models",
	"sap/ui/model/odata/v2/ODataModel"
], function(UIComponent, Device, models, ODataModel) {
	"use strict";

	return UIComponent.extend("mymy_odata_editor.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			
			this.setModel(models.createDeviceModel(), "device");
			this.setModel(new ODataModel(
					"/odata", {
						json: true,
						useBatch: true,
						defaultBindingMode: sap.ui.model.BindingMode.TwoWay,
						defaultUpdateMethod: sap.ui.model.odata.UpdateMethod.Put,
						loadMetadataAsync: false,
						tokenHandling: true
					}
				));
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});