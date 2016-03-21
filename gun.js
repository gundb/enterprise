$(document).ready(function(){
	$(function(){
		var c = ['dull', 'blue', 'green'], a = 'dull blue red green', n = 0, to;
		$(".screen").click(function(){
			c.push(c.shift());
			to = to || c[0];
			$(this).removeClass(a).addClass(to);
			$('.screen').not(this).each(function(){
				var t = $(this); n++;
				setTimeout(function(){
					t.removeClass(a).addClass(to);
					if(!(--n)){ to = null; }
				}, rand(400,700));
			});
		});
		function rand(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	});
	$(function(){
		var mouse = $('.mouse');
		function show(i){
			function to(){
				mouse.animate({top: "60%", left: "55%"}, {
					duration: 500, 
					specialEasing: {top: 'easeInQuad', left: 'easeOutQuad'},
					complete: click
				});
			}
			function click(){
				mouse.delay(230).animate({width: mouse.width() / 2}, {
					duration: 60, 
					complete: function(){
						mouse.closest('.screen').trigger('click');
						mouse.animate({width: mouse.width() * 2}, {
							duration: 120, 
							complete: fro
						});
					}
				});
			}
			function fro(){
				mouse.delay(900).animate({top: "87%", left: "110%"}, {
					duration: 700, 
					specialEasing: {top: 'easeOutQuad', left: 'easeInQuad'}, 
					complete: function(){
						setTimeout(show, 4 * 1000);
					}
				});
			}
			if(!i && $('.graphic').filter(function() { return $(this).is(":hover"); }).length){
				setTimeout(show, 2000);
			} else {
				to();	
			}
		}; 
		mouse.delay(1200).animate({top: "70%", left: "20%"}, {
			duration: 400, 
			specialEasing: {top: 'easeOutQuad', left: 'easeInQuad'}, 
			complete: function(){ show(true) }
		});
	});
	var windowSize = $(window).width();
	if(windowSize < 1025){
		$('#vid-section').remove();
	}
});








