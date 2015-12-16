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
        this.navBarBtnStyleSet("#FFF", "#010E17");
        return this.navBarBGStyleSet("#010E17");
      } else {
        this.navBarBtnStyleSet("transparent", "#FFF");
        return this.navBarBGStyleSet("rgba(1, 14, 23, 0.6)");
      }
    };

    UI.prototype.navBarBtnStyleSet = function(bgcolor, color) {
      return $("[data-id=nav-btn]").css({
        "background-color": "" + bgcolor,
        "color": "" + color
      });
    };

    UI.prototype.navBarBGStyleSet = function(bgcolor) {
      return $("[data-id=navbar]").css({
        "background-color": "" + bgcolor
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
