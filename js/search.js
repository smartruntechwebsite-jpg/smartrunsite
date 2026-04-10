(function ($) {
  "use strict";

  /*-------------------------------------
    Header Search Toggle
  -------------------------------------*/
  $(".pbmit-header-search-btn a").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".pbmit-header-search-form").addClass("active");
    setTimeout(function () {
      $(".search-field").focus();
    }, 400);
  });

  $(".pbmit-search-close, .pbmit-search-overlay").on("click", function (e) {
    e.stopPropagation();
    $(".pbmit-header-search-form").removeClass("active");
    $("body").addClass("pbmit-search-animation-out");
    setTimeout(function () {
      $("body").removeClass("pbmit-search-animation-out");
      $(".search-field").val("");
      $("#search-suggestions").empty().hide();
    }, 600);
  });

  /*-------------------------------------
    Search Autocomplete
  -------------------------------------*/
  var $input = $(".search-field");
  var $form = $(".search-form");

  // Inject suggestions container after the input
  if ($("#search-suggestions").length === 0) {
    $form.append('<ul id="search-suggestions"></ul>');
  }

  var $suggestions = $("#search-suggestions");

  $input.on("input", function () {
    var query = $(this).val().trim().toLowerCase();
    $suggestions.empty();

    if (query.length < 2) {
      $suggestions.hide();
      return;
    }

    var matches = SEARCH_INDEX.filter(function (item) {
      return item.text.toLowerCase().indexOf(query) !== -1;
    });

    // Deduplicate by page+text
    var seen = {};
    matches = matches.filter(function (item) {
      var key = item.page + "|" + item.text;
      if (seen[key]) return false;
      seen[key] = true;
      return true;
    });

    if (matches.length === 0) {
      $suggestions.hide();
      return;
    }

    matches.slice(0, 8).forEach(function (item) {
      var $li = $("<li></li>").html(
        '<span class="sr-text">' +
          item.text +
          '</span><span class="sr-page">' +
          item.pageLabel +
          "</span>"
      );
      $li.on("click", function () {
        window.location.href = item.page;
      });
      $suggestions.append($li);
    });

    $suggestions.show();
  });

  // Prevent form submit from navigating away; navigate to top suggestion instead
  $form.on("submit", function (e) {
    e.preventDefault();
    var $first = $suggestions.find("li").first();
    if ($first.length) {
      $first.trigger("click");
    }
  });

  // Hide suggestions when clicking outside the wrapper
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".pbmit-header-search-form").length) {
      $suggestions.hide();
    }
  });

  // Keyboard navigation
  $input.on("keydown", function (e) {
    var $items = $suggestions.find("li");
    var $active = $items.filter(".sr-active");

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if ($active.length === 0) {
        $items.first().addClass("sr-active");
      } else {
        $active.removeClass("sr-active").next().addClass("sr-active");
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if ($active.length) {
        $active.removeClass("sr-active").prev().addClass("sr-active");
      }
    } else if (e.key === "Enter") {
      if ($active.length) {
        e.preventDefault();
        $active.trigger("click");
      }
    } else if (e.key === "Escape") {
      $suggestions.hide();
    }
  });
})($);
