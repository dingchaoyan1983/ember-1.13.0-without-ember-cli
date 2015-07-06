/**
 * Created by daneding on 7/2/15.
 */
App.ApplicationRoute = Em.Route.extend({
  model: function() {
    return App.Mailbox.find();
  }
});