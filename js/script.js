$(document).on("click", ".myNavy  ul.navbar-body li a", function () {
  var $this = $(this);
  TabHighlighter.set($this);
  $this.closest("li").siblings(".active").removeClass("active");
  $this.closest("li").addClass("active");
});
var TabHighlighter = {
  set: function ($this) {
    $(".tab-highlighter").css({
      left: $this.closest("li").offset().left,
      width: $this.closest("li").outerWidth(),
    });
  },
  refresh: function () {
    var $this = $(" ul.navbar-body li.active a");
    $(".tab-highlighter").css({
      left: $this.closest("li").offset().left,
      width: $this.closest("li").outerWidth(),
    });
  },
};
$(window).resize(function () {
  TabHighlighter.refresh();
});
$(document).ready(function () {
  TabHighlighter.refresh();
});

//======================= Mobile Version =================================

var maxWidth = window.matchMedia("(max-width: 476px)");

function responsive(maxWidth) {
  if (maxWidth.matches) {
    $(document).ready(function () {
      "use strict";
      var openBtn = $("#open-button"),
        colseBtn = $("#close-button"),
        menu = $(".menu-wrap"),
        oppacity = $(".oppacity");

      // Open menu when click on menu button
      openBtn.on("click", function () {
        menu.addClass("active");
        oppacity.addClass("active");
      });
      // Close menu when click on Close button
      colseBtn.on("click", function () {
        menu.removeClass("active");
        oppacity.removeClass("active");
      });
      // Close menu when click on anywhere on the document
      $(document).on("click", function (e) {
        var target = $(e.target);
        if (
          target.is(
            ".menu-wrap, .menu, .icon-list, .icon-list a, .icon-list a span, #open-button"
          ) === false
        ) {
          menu.removeClass("active");
          oppacity.removeClass("active");
          e.stopPropagation();
        }
      });

      $(".lgOnly").remove(".lgOnly");
      $(".menu-wrap").removeClass("smOnly");
      $("nav > .smOnly").removeClass("smOnly");
      $(".changeImg").attr("src", "./assets/images/image-web-3-mobile.jpg");
    });
  }
}

responsive(maxWidth);

//======================= First Container  ==========================
$(".weight700").hover(
  function () {
    $(this).css("color", "hsl(35, 77%, 62%)");
    $(this).css("cursor", "pointer");
  },
  function () {
    // change to any color that was previously used.
    $(this).css("color", "hsl(36, 100%, 99%)");
    $("html,body").css("cursor", "arrow");
  }
);

$(".tailLink").hover(
  function () {
    $(this).css("color", "hsl(5, 85%, 63%)");
    $(this).css("cursor", "pointer");
  },
  function () {
    // change to any color that was previously used.
    $(this).css("color", "black");
    $("html,body").css("cursor", "arrow");
  }
);
