/**
 * Created by daneding on 7/2/15.
 */
App.Router.map(function() {
  this.resource('mailbox', { path: '/:mailbox_id' }, function() {
    this.resource('mail', { path: '/:message_id' });
  });
});