var a;
// var root = $('html, body');
var images = [
	{
		image:'img/team/Alvaro.jpg',
		teamName:'Alvaro Gomez',
		paragraph:'Alvaro is from South America and has been living in Utah for the past 5 years, he is a very dedicated graphic designer but he also found a new passion in coding mainly JavaScript and JavaScript frameworks (Angular).\nAlvaro likes to travel, he\'s been to several countries in America and Europe, where he fell in love of the different cultures, food and night life.',
		mail:'alvaro@gundb.io'
	},
	{
		image:'img/team/Mark.jpg',
		teamName:'Mark Nadal',
		paragraph:'Mark is a mathematician turned programmer, and has created 2 startups one of which is a VC backed Open Source company. He has traveled to over 25 countries and fallen in love with the unique culture and food from around the world. Part of his passion for Open Source is related to the wonderful diversity he has experienced, without sharing and learning from others progress cannot be ascertained.',
		mail:'mark@gundb.io'
	},
	{
		image:'img/team/Jesse.jpg',
		teamName:'Jesse Gibson',
		paragraph:'Jesse is an Alaskan-turned-Utahn with an unhealthy JavaScript obsession. You can find him at software meetups or anywhere tacos are served. \nHe enjoys programming, playing guitar and writing about himself in the third person.',
		mail:'jesse@gundb.io'
	},
	{
		image:'img/team/Sean.jpg',
		teamName: 'Sean Duncan',
		paragraph: 'Sean is a digital immigrant, who decided in the spring of 2014 to make a career shift and become a Knight of the Noble Code.  He co-founded the SLC JS Learners group, expecting only a few people to be interested &ndash;was he in for a surprise!  He\'s ended up running a group with over 500 learners, and has become a peer mentor to his fellow Code Knights in training.  Before he started slaying code dragons and traveling the JavaScript realm, he researched how technology can be harnessed to improve human learning.',
		mail:'sean@gundb.io'
	}
];

$(document).ready(function(){
	$('.picbox').click(function(){	
		var picboxSrc = $(this).attr('src');
		for(var i =0; i<images.length;i++){
			var picMatch = images[i].image;
			var picteamName = images[i].teamName;
			var picParagraph = images[i].paragraph;
			var picMail = images[i].mail;
			if(picMatch===picboxSrc){
				$('#currentImg, #name, #bio').remove();
				$('<img id="currentImg" src="' + images[i].image + '"/>').appendTo('#display');
				$('<span id="name">' + picteamName + '</span>').appendTo('h1');
				$('<span id="bio">'+picParagraph+'</span>').appendTo('.canvas_content p');
				$('<span id="mail">'+picMail+'</span>').appendTo('.canvas_content a');
				$('.canvas_content a').attr('href', 'mailto:'+picMail);
				a=i;
			}
		}
		$('.canvas').slideDown('slow').removeClass('.hide');
		$('html, body').animate({scrollTop: $('#display img').offset().top},'slow');
	});
	$('#close').click(function(){
		$('html, body').animate({scrollTop: $('.team .pictures').offset().top},'slow');
		$('.canvas').slideUp('slow').addClass('.hide');
		$('#currentImg, #name, #bio, #mail, #amail').remove();
	});
	$('#next').click(function(){
		a++;
		if ( a  === images.length){ 
			a = 0;
		}
		$('#currentImg').fadeOut('slow', function(){
			$(this).fadeIn();
			$(this).attr('src', images[a].image);
		});

		$('#name, #bio').fadeOut('slow', function(){
			$('#name, #bio, #amail').fadeIn();
			$('#name').text(images[a].teamName);
			$('#bio').text(images[a].paragraph);
			$('#mail').text(images[a].mail);
			$('#amail').attr('href', 'mailto:'+images[a].mail);
		});
	});
	$('#prev').click(function(){
		a--;
		if(a < 0){
			a = images.length-1;
		}
		$('#currentImg').fadeOut('slow', function(){
			$(this).fadeIn();
			$(this).attr('src', images[a].image);
		});

		$('#name, #bio').fadeOut('slow', function(){
			$('#name, #bio, #amail').fadeIn();
			$('#name').text(images[a].teamName);
			$('#bio').text(images[a].paragraph);
			$('#mail').text(images[a].mail);
			$('#amail').attr('href', 'mailto:'+images[a].mail);
		});
	});
});













