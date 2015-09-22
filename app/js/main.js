/**
 * "Rules of Optimization:
 *     Rule 1: Don't do it.
 *     Rule 2 (for experts only): Don't do it yet.”
 *
 * ~ Michael A. Jackson
 */

(function () {
  var $;

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

  function processTerms(tId) {
    $('#' + tId + '-sh').css({
      width: '' + (parseFloat($('#' + tId + '').css('width').replace(/px$/, ''), 10) + 14) + 'px',
      height: '' + (parseFloat($('#' + tId + '').css('height').replace(/px$/, ''), 10) + 14) + 'px'
    });

    $(function() {
      $('#' + tId + '-sh').draggable({
        start: function () {
          $('#' + tId + '-sh').css({
            'background-color': 'green'
          });

          $('#' + tId + '-sh').hover(function(){
            $(this).css('background-color', 'green');
          }, function(){
            $(this).css('background-color', 'green');
          });

          $('#' + tId + '').css({
            left: '' + (parseFloat($('#' + tId + '-sh').css('left').replace(/px$/, '')) + 6) + 'px',
            top: '' + (parseFloat($('#' + tId + '-sh').css('top').replace(/px$/, '')) + 6) + 'px'
          });
        },
        drag: function () {
          $('#' + tId + '').css({
            left: '' + (parseFloat($('#' + tId + '-sh').css('left').replace(/px$/, '')) + 6) + 'px',
            top: '' + (parseFloat($('#' + tId + '-sh').css('top').replace(/px$/, '')) + 6) + 'px'
          });
        },
        stop: function () {
          $('#' + tId + '-sh').css({
            'background-color': 'white'
          });

          $('#' + tId + '-sh').hover(function(){
            $(this).css('background-color', 'green');
          }, function(){
            $(this).css('background-color', 'white');
          });

          $('#' + tId + '').css({
            left: '' + (parseFloat($('#' + tId + '-sh').css('left').replace(/px$/, '')) + 6) + 'px',
            top: '' + (parseFloat($('#' + tId + '-sh').css('top').replace(/px$/, '')) + 6) + 'px'
          });
        }
      });
    });
  }

  require(['jquery', 'jquery-ui'], function (_$) {
    var terms = ['t1', 't2'],
      c1;

    $ = _$;

    $.noConflict();

    for (c1 = 0; c1 < terms.length; c1 += 1) {
      processTerms(terms[c1]);
    }
  });
}).call(this);
