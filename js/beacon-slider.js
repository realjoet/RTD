$(function(){
	$('.dock-slider').on('click', function(){
		var map=$('#map')
		var dockItem=$('.dock-item');
		var dockHeight=dockItem.css('height');
		console.log(dockHeight);
		if (dockHeight=="143px") {
			map.animate({
				height: '0px'
			}),
			dockItem.animate({
				"max-height": '540px',
				"height": '540px'
			})

		}if (dockHeight=="150px") {
			map.animate({
				height: '0px'
			}),
			dockItem.animate({
				"max-height": '540px',
				"height": '540px'
			})

		}else if (dockHeight=="540px") {
			map.animate({
				height: '350px'
			}),
			dockItem.animate({
				"max-height": "150px",
				"height": '150px'
			})
		}
	});
});


