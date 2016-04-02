(function($) {
	$.fn.defaultValsHandler = function () {
		return this.each(function() {

			var val_getter_type;
			if (($(this).is('input'))||($(this).is('textarea'))) {
				val_getter_type = "val";
			} else {
				val_getter_type = "text";
			}

			$(this).on('focus', function() {
				var dv = $(this).data('default-val');
				var v = $(this)[val_getter_type]();
				if ((dv === undefined)||(dv == v)) {
					$(this).data('default-val', v);
					$(this)[val_getter_type]('');
				}
			});

			$(this).focusout(function() {
				var d;
				if ((d = $(this).data('default-val')) !== undefined) {
					if ($(this)[val_getter_type]() == '') {
						$(this)[val_getter_type](d);
					}
				}
			});

		});
	}
}(jQuery));