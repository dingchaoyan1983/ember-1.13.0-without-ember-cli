/**
 * Created by daneding on 7/2/15.
 */
var App = Ember.Application.create({
  rootElement: '#container'
});

App.Mailbox = Em.Object.extend();

App.Mailbox.reopenClass({
  find: function(id) {
    if (id) {
      return App.FIXTURES.findBy('id', id);
    } else {
      return App.FIXTURES;
    }
  }
});

// Handlebars helper

Ember.Handlebars.registerBoundHelper('date', function(date) {
  return date;
});

/**
 * Created by daneding on 7/2/15.
 */
App.FIXTURES = [
  {
    name: "Inbox",
    id: "inbox",
    messages: [
      {
        id: 1,
        subject: "Welcome to Ember",
        from: "tomster@emberjs.com",
        to: "user@example.com",
        date: new Date(),
        body: "Welcome to Ember. We hope you enjoy your stay"
      }, {
        id: 2,
        subject: "Great Ember Resources",
        from: "tomster@emberjs.com",
        to: "user@example.com",
        date: new Date(),
        body: "Have you seen embercasts.com? How about emberaddons.com?"
      }
    ]
  }, {
    name: "Spam",
    id: "spam",
    messages: [
      {
        id: 3,
        subject: "You have one the lottery!!!111ONEONE",
        from: "419@thereallotteryhonest.com",
        to: "user@example.com",
        date: new Date(),
        body: "You have ONE the lottery! You only have to send us a small amount of monies to claim your prize"
      }
    ]
  }, {
    name: "Sent Mail",
    id: "sent-mail",
    messages: [
      {
        id: 4,
        subject: "Should I use Ember",
        from: "user@example.com",
        to: "tomster@emberjs.com",
        date: new Date(),
        body: "Ember looks pretty good, should I use it?"
      }
    ]
  }
];
