/**
 * "Rules of Optimization:
 *     Rule 1: Don't do it.
 *     Rule 2 (for experts only): Don't do it yet.”
 *
 * ~ Michael A. Jackson
 */

(function () {
    require.config({
        baseUrl: 'js',
        paths: {
            jquery: 'vendor/jquery/jquery.min',
            'jquery-ui': 'vendor/jquery-ui/jquery-ui.min'
        },
        shim: {
          'jquery-ui': [
            'jquery'
          ]
        }
    });

    require(['jquery', 'jquery-ui'], function ($) {
        $.noConflict();

        $('#t1-sh').css({
          width: '' + (parseFloat($('#t1').css('width').replace(/px$/, ''), 10) + 14) + 'px',
          height: '' + (parseFloat($('#t1').css('height').replace(/px$/, ''), 10) + 14) + 'px'
        });

        $(function() {
          $('#t1-sh').draggable({
            start: function () {
              $('#t1-sh').css({
                'background-color': 'green'
              });

              $('#t1-sh').hover(function(){
                $(this).css('background-color', 'green');
              }, function(){
                $(this).css('background-color', 'green');
              });

              $('#t1').css({
                left: '' + (parseFloat($('#t1-sh').css('left').replace(/px$/, '')) + 6) + 'px',
                top: '' + (parseFloat($('#t1-sh').css('top').replace(/px$/, '')) + 6) + 'px'
              });
            },
            drag: function () {
              $('#t1').css({
                left: '' + (parseFloat($('#t1-sh').css('left').replace(/px$/, '')) + 6) + 'px',
                top: '' + (parseFloat($('#t1-sh').css('top').replace(/px$/, '')) + 6) + 'px'
              });
            },
            stop: function () {
              $('#t1-sh').css({
                'background-color': 'white'
              });

              $('#t1-sh').hover(function(){
                $(this).css('background-color', 'green');
              }, function(){
                $(this).css('background-color', 'white');
              });

              $('#t1').css({
                left: '' + (parseFloat($('#t1-sh').css('left').replace(/px$/, '')) + 6) + 'px',
                top: '' + (parseFloat($('#t1-sh').css('top').replace(/px$/, '')) + 6) + 'px'
              });
            }
          });
        });
    });
}).call(this);
