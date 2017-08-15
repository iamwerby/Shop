$(document).ready(function() {
	var evt = new Event();
	var m = new Magnifier(evt);
	
	m.attach({
		thumb: '#thumb',
		largeWrapper: 'preview',
		mode: 'inside',
    	zoom: 1.5,
    	zoomable: true
	});
});

