<!--******************* Testimonial Section Start ******************-->
<section class="testimonial border-bottom">
	<div class="container">
		<div class="testimonial-inner-content text-center wow animated fadeIn">
			<h4>testimonials</h4>
			<div class="row justify-content-center">
				<div class="col-sm-10">
					<div class="testimonial-slider">
						<div class="testimonial-data">
							<h3>" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. "
							</h3>
							<p>- Customer name</p>
						</div>
						<div class="testimonial-data">
							<h3>" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. "
							</h3>
							<p>- Customer name</p>
						</div>
						<div class="testimonial-data">
							<h3>" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. "
							</h3>
							<p>- Customer name</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!--******************* Testimonial Section Ends ******************-->
<!--******************* Footer Section Start ******************-->
<footer>
	<div class="footer-inner">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-4 wow animated fadeIn">
					<div class="footer-blk about-blk">
						<img src="images/logo-full.png" alt="logo-image" class="img-fluid">
						<p class="mb-0">Based inYork, we specialise in powder coating all types of items from small brackets, bike frames and alloy wheels to full car parts and metal fabrications. </p>
					</div>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 wow animated fadeIn">
					<div class="footer-blk cat-blk">
						<h5>our services</h5>
						<nav class="d-flex services-links">
							<ul class="footer-nav">
								<li><a href="#"> link goes here</a></li>
								<li><a href="#"> link goes here</a></li>
								<li><a href="#"> link goes here</a></li>
								<li><a href="#"> link goes here</a></li>
								<li><a href="#">link goes here</a></li>
								<li><a href="#">link goes here</a></li>
								<li><a href="#">link goes here</a></li>
								<li><a href="#">link goes here</a></li>
								<li><a href="#">link goes here</a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6 wow animated fadeIn">
					<div class="footer-blk get-in-blk">
						<h5>Get in Touch</h5>
						<ul class="contact-nav">
							<li class="d-flex align-items-start">
								<i class="fas fa-map-marker-alt"></i>
								<div class="info">
									<a href="https://www.google.co.in/maps/place/York+Powder+Coating/@53.9253441,-0.9519687,17z/data=!3m1!4b1!4m5!3m4!1s0x48792e488c36ddc7:0x48b04530a2b65aed!8m2!3d53.925341!4d-0.94978" target="_blank">Station Yard, Laveracks Industrial Estate, <br> Elvington,<br> York, YO41 4ER</a>
								</div>
							</li>
							<li class="d-flex align-items-start">
								<i class="fas fa-phone"></i>
								<div class="info">
									<a href="tel:01904488077">01904 488077 </a>
								</div>
							</li>
							<li class="d-flex align-items-start">
								<i class="fas fa-envelope"></i>
								<div class="info">
									<a href="mailto:info@yorkpowdercoating.co.uk">info@yorkpowdercoating.co.uk</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="site-info">
		<div class="container">
			<div class="site-info-inner">
				<div class="row align-items-center">
					<div class="col-md-6 col-sm-6">
						<p>&copy; 2019 york powder coating. All Rights Reserved.</p>
					</div>
					<div class="col-md-6 col-sm-6">
						<ul class="social-nav d-flex align-items-center justify-content-end">
							<li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
							<li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
							<li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
							<li><a href="#" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
							<li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
<!--******************* Footer Section End ******************-->
<!--*********************** All End ************************-->
<script type="text/javascript">
	$(document).ready(function() {
		$('.banner-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows:true,
			autoplay:true,
			autoplaySpeed: 4000,
		});
		$('.services-inner').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows:true,
			infinite: true,
			responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
							variableWidth: true,
                            slidesToShow: 1,
							slidesToScroll: 1
                        }
                    },
                
                ]
			
		});
		$('.testimonial-slider').slick({
			dots: true,
			arrows:false
		});
	});
</script>
<script>
   	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();    
  </script>
</body>
</html>