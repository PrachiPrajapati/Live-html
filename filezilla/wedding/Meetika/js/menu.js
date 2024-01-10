var Menu = (function() {
	
	var $container = $( '#rm-container' ),						
		$cover = $container.find( 'div.rm-cover' ),
		$middle = $container.find( 'div.rm-middle' ),
		$right = $container.find( 'div.rm-right' ),
		$open = $cover.find('div.flip-page'),
		$close = $right.find('span.rm-close'),
		$details = $container.find( 'a.rm-viewdetails' ),

		init = function() {

			initEvents();

		},
		initEvents = function() {

			$open.on( 'click', function( event ) {

				openMenu();
				return false;

			} );

			$close.on( 'click', function( event ) {

				closeMenu();
				return false;

			} );

			$details.on( 'click', function( event ) {
 
				$container.removeClass( 'rm-in' ).children( 'div.rm-modal' ).remove();
				viewDetails( $( this ) );
				return false;

			} );
			
		},
		openMenu = function() {

			$container.addClass( 'rm-open' );

		},
		closeMenu = function() {

			$container.removeClass( 'rm-open rm-nodelay rm-in' );

		},
		viewDetails = function( recipe ) {

			var title = recipe.text(),
				img = recipe.data( 'thumb' ),
				description = recipe.parent().next().text(),
				url = recipe.attr( 'href' );
            if(img=='venue'){
					var $modal = $( '' );

			}else if(img=='contact'){
		var $modal = $( '' );

			}else if(img=='lunch'){
					var $modal = $( '' );

			}else{
			var $modal = $( '' );
			}
			$modal.appendTo( $container );

			var h = $modal.outerHeight( true );
			$modal.css( 'margin-top', -h / 2 );

			setTimeout( function() {

				$container.addClass( 'rm-in rm-nodelay' );

				$modal.find( 'span.rm-close-modal' ).on( 'click', function() {

					$container.removeClass( 'rm-in' );

				} );
			
			}, 0 );

		};

	return { init : init };

})();
 $(document).ready(function()
 {
	 var height=$(window).height();
	 var height1=$('.rm-cover').height()
	 var subheight=height-height1;
 
	  $('.container').height(height)
	 $('.main').css({top:subheight/2})
	 
	 $(".rm-button-open,.flip-page").click(function(){
		$('.front-bg').animate({opacity: 1});
	});
	$(".rm-close").click(function(){
		$('.front-bg').delay(2100).animate({opacity: 0});
	});
	
	 
 })

