$(document).ready(function(){
	$('#va-accordion').vaccordion({
		accordionH: 500,
		visibleSlices: 2,
		accordionW: $(window).width(),
		expandedHeight	: 350,
		animSpeed		: 500,
		animEasing		: 'easeInOutBack',
		animOpacity		: 0.4
	});
});