import ItemForm from "faktura/forms/item";

var InvoicesNewController = Ember.ObjectController.extend({
    isRemoveItemDisabled: function () {
        return this.get("items.length") <= 1;
    }.property("items.@each"),

    actions: {
        saveRecord: function () {
            var controller = this;

            this.set("isSubmitted", true);

            this.get("content").save().then(function () {
                controller.transitionToRoute("invoices");
            });
        },

        addItem: function () {
            this.get("items").pushObject(ItemForm.create({ invoiceForm: this.get("form"), model: {} }));
        },

        removeItem: function (item) {
            this.get("items").removeObject(item);
        }
    }
});

export default InvoicesNewController;
