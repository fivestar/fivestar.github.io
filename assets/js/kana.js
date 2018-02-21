/*!
 * kana.js
 *
 * (C) 2016 OGAWA Katsuhiro
 */
!function($, mb_convert_kana) {

  $(function() {
    var $source = $('#kana-source')
      , $dests = $('.kana-dest');

    $source.on('keyup', function() {
      $dests.each(function() {
        var $that = $(this);

        $that
          .val(mb_convert_kana($source.val(), $that.data('convert')));
      });
    });

    // placeholder
    $dests.each(function() {
      var $that = $(this);

      $that
        .attr('placeholder', mb_convert_kana($source.attr('placeholder'), $that.data('convert')))
        .on('click', function(e) {
          $that.select();
        });
    });
  });

}(window.jQuery, window.mb_convert_kana);
