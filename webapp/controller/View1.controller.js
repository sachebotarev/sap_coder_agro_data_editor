sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("mymy_odata_editor.controller.View1", {
		onInit: function() {
			this.getView().setModel(this.getOwnerComponent().getModel());
			this.getView().setModel(new JSONModel({
				NewEntityPath: "/Transportations",
				NewEntityData: "{}"
			}), "ViewModel");
				
		},
		onSave: function() {
			this.getOwnerComponent().getModel().submitChanges();
		},
		onAddEntity: function() {
			this.getView().getModel().create(
				this.getView().getModel("ViewModel").getProperty("/NewEntityPath"), 
				JSON.parse(this.getView().getModel("ViewModel").getProperty("/NewEntityData"))
			);
		},
		onRemove: function(oEvent) {
			var sObjectPath = oEvent.getSource().getBindingContext().getPath();
			this.getOwnerComponent().getModel().remove(sObjectPath);
		}
	});
});