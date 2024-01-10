<?php include('inc/header.php'); ?>
<!--******************* Banner Section Start ******************-->
<div class="banner inner-banner contact">
	<div class="container d-flex align-items-center justify-content-center">
		<div>
			<h1>contact us</h1>
		</div>
	</div>
</div>
<!--******************* Banner Section End ******************-->
<!--******************* Middle Section Start ******************-->
<main id="main">
	<section class="make-booking text-center">
		<div class="container">
		<h5 class="white-color"><span class="d-sm-inline d-block">Dine with us</span> <span class="d-sm-inline d-none">|</span> <a href="#">Make a booking <i class="fas fa-caret-right"></i></a></h5>
		</div>
	</section>
	<section class="contact-sec">
		<article class="container">
			<div class="row align-items-center">
				<div class="col-md-6">
					<form method="post" action="#">
						<div class="form-group">
							<label for="name">NAME*</label>
							<input type="text" class="form-control" id="name" required="required">
						</div>
						<div class="form-group">
							<label for="email">email*</label>
							<input type="email" class="form-control" id="email" required="required">
						</div>
						<div class="form-group">
							<label for="tel">tel*</label>
							<input type="tel" class="form-control" id="tel" required="required">
						</div>
						<div class="form-group">
							<label for="message">Message*</label>
							<textarea class="form-control" id="message" required="required"></textarea>
						</div>
						<button type="submit" class="theme-btn submit-btn">Send Message</button>
					</form>
				</div>
				<div class="col-md-6">
					<div class="black-box">
						<h2 class="white-color line-title small-line">Contact <br>information</h2>
						<ul class="contact-info">
							<li><small><i class="fas fa-phone"></i> <a href="tel:01904 644 080">01904 644 080</a></small></li>
							<li><small><i class="fas fa-envelope"></i> <a href="mailto:ateoclockyork@hotmail.com">ateoclockyork@hotmail.com</a></small></li>
							<li><small><i class="fas fa-map-marker-alt"></i> 13A High Ousegate, York,  <br /> YO1 8RZ</small></li>
						</ul>
						<ul>
							<li><b>Opening Hours </b> </li>
							<li>11AM - 10PM, 7 days a week</li>
						</ul>
					</div>
				</div>
			</div>
		</article>
	</section>
	<section class="map-section">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354.087964329861!2d-0.4282285840600208!3d53.84129934522245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878c743a7ff1de5%3A0x477fbcbcc0ebd71a!2sChamas%20Rodizio%20Bar%20%26%20Grill!5e0!3m2!1sen!2sin!4v1575443584148!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
	</section>
</main>
<!--******************* Middle Section End ******************-->
<?php include('inc/footer.php'); ?>