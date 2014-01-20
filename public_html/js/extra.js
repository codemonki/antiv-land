/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

$(document).ready(function () {
    //getDynamicKeyword();
	resizeit();
	jQuery(".title").fitText(1.8, {minFontSize: '20px',maxFontSize: '34px'});
	jQuery(".subTitle").fitText(1.8, {minFontSize: '15px',maxFontSize: '26px'});
});
$(window).bind('orientationchange resize', function(event){
      resizeit();
  });

function resizeit() {
	var w = ($(window).width() / 4.5);
	$(".header").css("height", w);
	var a = $(".header").height();
	aa = "0 " + (130 - (a)) * (-1) + "px";
	$(".header").css("background-position", aa);
}

function getDynamicKeyword(){
	var randomId = Math.floor((Math.random()*999)+1);
	var shortcode = "sms:60533?body=TAK "+randomId;
	$('#smsBtn').attr("href", shortcode);
}

/*
function geoip_country_code() { return 'BD'; }
function geoip_country_name() { return 'Bangladesh'; }
function geoip_city()         { return 'Dhaka'; }
function geoip_region()       { return '81'; }
function geoip_region_name()  { return 'Dhaka'; }
function geoip_latitude()     { return '23.7231'; }
function geoip_longitude()    { return '90.4086'; }
function geoip_postal_code()  { return ''; }
function geoip_area_code()    { return ''; }
function geoip_metro_code()   { return ''; }
*/