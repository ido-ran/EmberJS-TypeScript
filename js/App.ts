/// <reference path="ember-1.0.pre.d.ts" />

var App = Em.Application.create();

App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  }
});
