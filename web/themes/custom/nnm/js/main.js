import { makeRed, makeBlue } from './utils.js'

(($, Drupal) => {

  Drupal.behaviors.collapse = { 
    attach: function (context, settings) {

      $('.menu-mobile span').one("click", function() {
        $(this).siblings('.menu').toggleClass('open');
        console.log("test");
      })
    }
  }
})(jQuery, Drupal);
