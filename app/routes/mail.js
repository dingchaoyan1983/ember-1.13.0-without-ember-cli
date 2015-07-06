/**
 * Created by daneding on 7/2/15.
 */
App.MailRoute = Em.Route.extend({
  model: function(params) {
    return this.modelFor('mailbox').messages.findBy('id', params.message_id);
  }
});