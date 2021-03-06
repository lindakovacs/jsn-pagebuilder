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

/**
 * Custom script for PromoBox element
 */
( function ($) {
	"use strict";

	$.JSNSelectFonts	= $.JSNSelectFonts || {};

    $.JSNColorPicker    = $.JSNColorPicker || {};

    $.JSN_PromoBox      = $.JSN_PromoBox || {};

	$.JSN_PromoBox = function () {
        new $.JSNColorPicker('#modalOptions .color-selector');
	}
	
	$.RecalculatePopover = function () {
		var value = $('.ui-state-edit #param-elements').val();
		if ( $( '#control-action-' + value ).length ) {
			var dialog = $( '#control-action-' + value );
			var btnInput = $('.ui-state-edit .element-action-edit');
			var popoverObj = new $.JSNPopoverOptions();
			var elmStyle = popoverObj.getBoxStyle($(dialog).find(".popover")),
            parentStyle = popoverObj.getBoxStyle($(btnInput)),
            position = {};
            position.left = parentStyle.offset.left - elmStyle.outerWidth - 11; // 11 is width of arrow of popover left
            position.top = parentStyle.offset.top - (elmStyle.outerHeight / 2) + (parentStyle.outerHeight / 2) - 12;
            dialog.css(position);
		} 
	}

	$(document).ready(function () {
		$.JSN_PromoBox();
		$('body').bind('pb_after_popover', function (e) {
			$.JSN_PromoBox();
			new $.JSNSelectFonts();
		});
		$('body').bind('pb_after_change_depend', function (e) {
			$.RecalculatePopover();
		});
	});

})(JoomlaShine.jQuery);