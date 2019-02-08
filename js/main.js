$(document).ready(function(){

	var skylineSuppressStart = window.innerHeight;

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// Introduction (Cover) elements
	var raiseCurtain = document.getElementById("bottom-curtain")
	// TweenLite.to(raiseCurtain, 1.5, {bottom:'0px'});
	$('#bottom-curtain').transition({ y: '-400px' }, 2600, 'snap')
	$('#top-left-airliner').transition({ left: 0, top: 0, delay: 800 }, 2600, 'easeOutExpo')
	$('#top-right-airliner').transition({ right: 0, top: 0, delay: 800 }, 2600, 'easeOutExpo')
	$('#top-left-bridge').transition({ opacity: 1 }, 1800)
	$('#top-right-bridge').transition({ opacity: 1 }, 1800)
	$('h1:nth-child(1)').transition({ opacity: 1, delay:1000 }, 1500)
	$('h1:nth-child(2)').transition({ opacity: 1, delay:1600 }, 1500)
	$('h1:nth-child(3)').transition({ opacity: 1, delay:2200 }, 1500)

	var startTimeline = new TimelineMax();
	var shrinkTopLCorner = TweenMax.to('#top-left-airliner', 0.2, { scale:'.8', top:'-25', left: '-25' })
	var shrinkTopRCorner = TweenMax.to('#top-right-airliner', 0.2, { scale:'.8', top:'-25', right: '-25' })
	var lowerCurtain = TweenMax.to('#bottom-curtain', 0.5, { bottom: (-1*skylineSuppressStart)+255 })
	var showBeginning = TweenMax.to('article p:nth-child(1)', 0.5, { opacity: 1 })
	startTimeline.add(lowerCurtain).add(shrinkTopLCorner).add(shrinkTopRCorner).add(showBeginning)

	var slideCurtainScene = new ScrollMagic.Scene({
		triggerElement: 'article p:nth-child(1)',
		triggerHook: 0.6
	})
	.setTween(startTimeline)
	.addIndicators({
		name: 'lower curtain',
		colorTrigger: 'black',
		colorStart: '#75C695',
		colorEnd: 'pink'
	}) // this requires a plugin
	.addTo(controller);

	$('blockquote.card').each(function() {

		var showBusinessCardScenes = new ScrollMagic.Scene({
			triggerElement: 'blockquote.card',
			triggerHook: 0.6
		})
		.setClassToggle(this, 'active')
		.addIndicators({
			name: 'fade cards',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) // this requires a plugin
		.addTo(controller);

	})

	$('a.show-truck').on('click', function(e){
		e.preventDefault();
	})

	$('a.show-truck').on('mouseover', function(e){
		console.log('Looking for truck...')
	})


});
