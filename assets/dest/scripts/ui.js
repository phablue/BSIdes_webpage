(function() {
  var UI;

  UI = (function() {
    function UI() {}

    UI.prototype.config = function() {
      this.navBarScrollSet();
      return this.navMenuConfig();
    };

    UI.prototype.navBarScrollSet = function() {
      return $(window).scroll((function(_this) {
        return function() {
          return _this.navBarStyleConfig();
        };
      })(this));
    };

    UI.prototype.navBarStyleConfig = function() {
      if ($(window).scrollTop() > 450) {
        return this.navBarBtnStyleSet("#FFF", "#010E17");
      } else {
        return this.navBarBtnStyleSet("transparent", "#FFF");
      }
    };

    UI.prototype.navBarBtnStyleSet = function(bgcolor, color) {
      return $("[data-id=nav-btn]").css({
        "background-color": "" + bgcolor,
        "color": "" + color
      });
    };

    UI.prototype.navMenuConfig = function() {
      return $("[data-id=navMenu] a").click((function(_this) {
        return function() {
          return _this.toggleNavMenuVisibility();
        };
      })(this));
    };

    UI.prototype.toggleNavMenuVisibility = function() {
      return $("[data-id=navMenu]").toggleClass("in");
    };

    return UI;

  })();

  window.UI = UI;

}).call(this);
