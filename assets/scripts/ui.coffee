class UI
  constructor: ->

  config: ->
    @navBarScrollSet()
    @navMenuConfig()

  navBarScrollSet: ->
    $(window).scroll =>
      @navBarStyleConfig()

  navBarStyleConfig: ->
    if $(window).scrollTop() > 450
      @navBarBtnStyleSet("#FFF", "#010E17")
    else
      @navBarBtnStyleSet("transparent", "#FFF")

  navBarBtnStyleSet: (bgcolor, color) ->
    $("[data-id=nav-btn]").css("background-color": "#{bgcolor}", "color": "#{color}")

  navMenuConfig: ->
    $("[data-id=navMenu] a").click =>
      @toggleNavMenuVisibility()

  toggleNavMenuVisibility: ->
    $("[data-id=navMenu]").toggleClass("in")


window.UI = UI
