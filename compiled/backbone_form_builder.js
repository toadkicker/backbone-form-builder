(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Backbone.FormBuilder = (function(_super) {

    __extends(FormBuilder, _super);

    function FormBuilder() {
      FormBuilder.__super__.constructor.apply(this, arguments);
    }

    return FormBuilder;

  })(Backbone.View);

}).call(this);
