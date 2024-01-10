<header class="hidden-xs">
	<div class="navbar">
		<div class="container">
			<div class="navbar-nav">
				<div class="navbar-brand">
					<a href="index.php">
						<amp-img src="images/logo.png" width="122" height="92" alt="logo"></amp-img>
					</a>
				</div>
				<ul class="nav-right custom-row">
					<li><a href="#">home</a></li>
					<li><a href="#">meet us</a></li>
					<li><a href="#">services</a></li>
					<li><a href="#">experience</a></li>
					<li><a href="#">after treatment</a></li>
					<li><a href="#">blog</a></li>
					<li><a href="#">contact us</a></li>
				</ul>
			</div>
		</div>
	</div>
</header>

<header class="headerbar visible-xs">
	<div class="container">
		<div class="mobile-nav">
  			<div role="button" on="tap:sidebar1.toggle" tabindex="0" class="hamburger">☰</div>
  			<div class="site-name">
  				<a href="index.php">
  					<amp-img src="images/logo.png" width="122" height="92" alt="logo"></amp-img>
  				</a>
  			</div>
  		</div>
  	</div>
</header>
<amp-sidebar id="sidebar1" layout="nodisplay" side="left">
  <div role="button" aria-label="close sidebar" on="tap:sidebar1.toggle" tabindex="0" class="close-sidebar">✕</div>
  <ul class="sidebar">
    <li><a href="#">home</a></li>
    <li><a href="#">meet us</a></li>
    <li><a href="#">services</a></li>
    <li><a href="#">experience</a></li>
    <li><a href="#">after treatment</a></li>
    <li><a href="#">blog</a></li>
    <li><a href="#">contact us</a></li>
  </ul>
</amp-sidebar>