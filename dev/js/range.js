$(document).ready(function() {
	
    $( ".slider-range__input" ).slider({
      range: true,
      min: 0,
      max: 200,
      values: [ 0, 200 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$ " + ui.values[ 0 ]);
        $( "#amount1" ).val( "$ " + ui.values[ 1 ]);
      }
    });
    $( "#amount" ).val( "$ " + $( ".slider-range__input" ).slider( "values", 0 ));
    $( "#amount1" ).val( "$ " + $( ".slider-range__input" ).slider( "values", 1 ));

});

