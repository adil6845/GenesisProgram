(function(e,t,undefined){function a(){var t=this;t.name="Footable Striping",t.init=function(a){t.footable=a,e(a.table).unbind("striping").bind({"footable_initialized.striping footable_row_removed.striping footable_redrawn.striping footable_sorted.striping footable_filtered.striping":function(){e(this).data("striping")!==!1&&t.setupStriping(a)}})},t.setupStriping=function(t){var a=0;e(t.table).find("> tbody > tr:not(.footable-row-detail)").each(function(){var i=e(this);i.removeClass(t.options.classes.striping.even).removeClass(t.options.classes.striping.odd),0===a%2?i.addClass(t.options.classes.striping.even):i.addClass(t.options.classes.striping.odd),a++})}}if(t.footable===undefined||null===t.foobox)throw Error("Please check and make sure footable.js is included in the page and is loaded prior to this script.");var i={striping:{enabled:!0},classes:{striping:{odd:"footable-odd",even:"footable-even"}}};t.footable.plugins.register(a,i)})(jQuery,window);