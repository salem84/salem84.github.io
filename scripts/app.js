$(document).ready(function() {
	createTagCloud();
	$('.post , .post-content').emoticonize();
});


function createTagCloud() {
	if($('#tags-list'))
	{
		var options = {
			//textFont: 'Niconne, sans-serif',
			reverse: true,
			depth: 0.8,
			maxSpeed: 0.05,
			weightFrom: 'data-weight',
			wheelZoom: false,
			freezeActive: true,
			freezeDecel: true,
			shuffleTags: true,
			textColour: '#333',
			animTiming: 'Smooth',
			initial: [0.1,-0.1],
			centreFunc: drawBackground,

			bgColour: '#fefefe',
			bgOutline: '#000',
			bgOutlineThickness: 2,	
			bgRadius: 5,
			outlineColour: '#369d88',					
			outlineIncrease: 4,		
			outlineMethod: 'block',					
			outlineOffset: 5,
			outlineRadius: 15,						
			outlineThickness: 2,	
			padding: 5,	
		}

		try {
			var res = $('#tags-canvas').tagcanvas(options, 'tags-list');

			if(!res) {
				$('#tags-canvas').hide();
			}
		}
		catch(e) {
			$('#tags-canvas').hide();
		}
	}

	function drawBackground(c, w, h, cx, cy) {
		//var img = new Image();
		//img.src = '/images/galassia.jpg';
		//c.drawImage(img, cx, cy);

		c.setTransform(1, 0, 0, 1, 0, 0);
		c.globalAlpha = 1;
		var step = 	0; // Image reduction	;	
		var f1 = 0.5 + step;
		var f2= 0.5 - step;
		var cfimg = new Image();
		//cfimg.src = 'http://peter.bg/dave.png';  // Image location ''
		cfimg.src = '/images/template/panda.png';
		c.drawImage(cfimg, w*f2/2, h*f2/2, w*f1, h*f1);

	}
}