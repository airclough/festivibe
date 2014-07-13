define(
  [ 'backbone',
    'common',
    'views/app' ],
  function( Backbone, common, AppView ) {
    'use strict';

    return Backbone.Router.extend({
      routes: {
        ''     : 'index',
        'blog' : 'blog',
        'login': 'login'
      },

      initialize: function() {
        this.appView = new AppView();

        this.subscribe();
      },

      subscribe: function() {
        this.listenTo( common.events, 'router:hashChange', this.hashChange );
      },

      hashChange: function( opts ) {
        this.navigate( opts.route, { trigger: opts.trigger } );
      },

      index: function() {
        console.log( 'index' );
      },

      blog: function() {
        console.log( 'blog' );
      },

      login: function() {
        this.appView.setView( 'login' );
      }
    });
  }
);
