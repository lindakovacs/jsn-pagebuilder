/**
 * @version    $Id$
 * @package    JSN_PageBuilder
 * @author     JoomlaShine Team <support@joomlashine.com>
 * @copyright  Copyright (C) 2012 JoomlaShine.com. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Websites: http://www.joomlashine.com
 * Technical Support:  Feedback - http://www.joomlashine.com/contact-us/get-support.html
 */

(function ($) {
	
	$(document).ready(function () {
		if ( typeof($.fn.lazyload) == "function" ) {
			$(".image-scroll-fade").lazyload({
				effect       : "fadeIn"
			});	
		}
		if (typeof($.fancybox) == "function") {
			$(".pb-image-fancy").fancybox({
				"width"		: "75%",
				"height"	: "75%",
	            "autoScale"	: false,
	            "transitionIn"	: "elastic",
	            "transitionOut"	: "elastic",
	            "type"		: "iframe"
			});
		}
	});
	
})(JoomlaShine.jQuery);