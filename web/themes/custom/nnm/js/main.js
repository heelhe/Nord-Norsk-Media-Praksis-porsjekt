import { makeRed, makeBlue } from './utils.js'

(($, Drupal) => {

  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      /*$(document).once('my-behavior').on('click', function (event) {
        if ($(event.target).hasClass('blue')) {
          makeRed($(event.target));
        }
        else {
          makeBlue($(event.target));
        }

      });*/
    }
  }
  
  $('.view-front-page-display-view-actual .view-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
})(jQuery, Drupal);
