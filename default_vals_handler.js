(function($) {
	$.fn.defaultValsHandler = function () {

		function getSelector(el) {
		    var $el = $(el);

		    var id = $el.attr("id");
		    if (id) { 
		        return "#"+ id;
		    }

		    var selector = $el.parents()
		                .map(function() { return this.tagName; })
		                .get().reverse().join(" ");

		    if (selector) {
		        selector += " "+ $el[0].nodeName;
		    }

		    var classNames = $el.attr("class");
		    if (classNames) {
		        selector += "." + $.trim(classNames).replace(/\s/gi, ".");
		    }

		    var name = $el.attr('name');
		    if (name) {
		        selector += "[name='" + name + "']";
		    }
		    if (!name){
		        var index = $el.index();
		        if (index) {
		            index = index + 1;
		            selector += ":nth-child(" + index + ")";
		        }
		    }
		    return selector;
		}

		return this.each(function() {

			var val_getter_type;
			if (($(this).is('input'))||($(this).is('textarea'))) {
				val_getter_type = "val";
			} else {
				val_getter_type = "text";
			}

			var selector = getSelector($(this));

			$(document).on('focus', selector, function() {
				var dv = $(this).data('default-val');
				var v = $(this)[val_getter_type]();
				if ((dv === undefined)||(dv == v)) {
					$(this).data('default-val', v);
					$(this)[val_getter_type]('');
				}
			});

			$(document).on('focusout', selector, function() {
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