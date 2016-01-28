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
      @navBarBGStyleSet("#010E17")
    else
      @navBarBtnStyleSet("transparent", "#FFF")
      @navBarBGStyleSet("rgba(1, 14, 23, 0.6)")

  navBarBtnStyleSet: (bgcolor, color) ->
    $("[data-id=nav-btn]").css("background-color": "#{bgcolor}", "color": "#{color}")

  navBarBGStyleSet: (bgcolor) ->
    $("[data-id=navbar]").css("background-color": "#{bgcolor}")


  navMenuConfig: ->
    $("[data-id=navMenu] a").click =>
      @toggleNavMenuVisibility()

  toggleNavMenuVisibility: ->
    $("[data-id=navMenu]").toggleClass("in")


window.UI = UI
