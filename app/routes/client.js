import Ember from "ember";

const { Route } = Ember;

export default Route.extend({
  templateName: 'app',
  model: function (params) {
    return this.store.findRecord("client", params.client_id);
  }
});
