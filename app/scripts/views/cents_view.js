Faktura.CentsView = Ember.TextField.extend({
    attributeBindings: ["min", "max", "step"],
    type: "number",

    precision: 2,
    value: 0,

    step: function (key, step) {
        var fractionalPart,
            precision = parseInt(this.get("precision"), 10);

        if (arguments.length > 1) {
            fractionalPart = String(step).split(".")[1];
            this.set("precision", fractionalPart ? fractionalPart.length : 0);
        }

        return String(1 / Math.pow(10, precision));
    }.property("precision"),

    cents: function (key, cents) {
        var precision = this.get("precision"),
            value = this.get("value");

        if (arguments.length > 1) {
            this.set("value", Faktura.formatCents(cents, precision));
        }

        return Faktura.parseCents(value, precision);
    }.property("value", "precision")
});
