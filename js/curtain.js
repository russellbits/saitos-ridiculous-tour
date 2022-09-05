$(document).ready(function(){

	var skylineSuppressStart = window.innerHeight;

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// Introduction (Cover) elements
	const bottomCurtain = document.getElementById('bottom-curtain')
	const topLeftAirliner = document.getElementById('top-left-airliner')
	const topRightAirliner = document.getElementById('top-right-airliner')
	const topLeftBridge = document.getElementById('top-left-bridge')
	const topRightBridge = document.getElementById('top-right-bridge')

	bottomCurtain.style.transform = 'translateY(-400px)'
	bottomCurtain.style.transition = 'all 2600ms snap'

	topLeftAirliner.style.transform = 'translate(0, 0)'
	topLeftAirliner.style.transition = 'all 800ms easeOutExpo'

	topRightAirliner.style.transform = 'translate(0, 0)'
	topRightAirliner.style.transition = 'all 800ms easeOutExpo'

	topLeftBridge.style.opacity = 0
	topRightBridge.style.opacity = 0

	topLeftBridge.style.transition = 'opacity 800ms easeOutExpo'
	topRightBridge.style.transition = 'opacity 800ms easeOutExpo'

	const titleLine1 = document.querySelector('h1:nth-child(1)')
	const titleLine2 = document.querySelector('h1:nth-child(2)')
	const titleLine3 = document.querySelector('h1:nth-child(3)')

	titleLine1.style.opacity = 0
	titleLine2.style.opacity = 0
	titleLine3.style.opacity = 0

	titleLine1.style.transition = 'opacity 800ms easeOutExpo 800ms'
	titleLine2.style.transition = 'opacity 800ms easeOutExpo 1200ms'
	titleLine3.style.transition = 'opacity 800ms easeOutExpo 1600ms'
	
	setTimeout(() => {
    // topLeftBridge.style.opacity = 1;
		// topRightBridge.style.opacity = 0
	}, 800);

	/// $('#top-left-airliner').transition({ left: 0, top: 0, delay: 800 }, 2600, 'easeOutExpo')
	// $('#top-right-airliner').transition({ right: 0, top: 0, delay: 800 }, 2600, 'easeOutExpo')
	// $('#top-left-bridge').transition({ opacity: 1 }, 1800)
	// $('#top-right-bridge').transition({ opacity: 1 }, 1800)
	// $('h1:nth-child(1)').transition({ opacity: 1, delay:1000 }, 1500)
	// $('h1:nth-child(2)').transition({ opacity: 1, delay:1600 }, 1500)
	// $('h1:nth-child(3)').transition({ opacity: 1, delay:2200 }, 1500)

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
