  <header class="hidden-xs">
  	<div class="container">
  		<div class="navbar-nav">
  		 	<div class="nav-brand">
  		 		<a href="index.php"><amp-img src="images/logo.png" alt="logo" width="95" height="33"></amp-img></a>
  		 	</div>
  		 	<div class="nav">
  		 		<ul class="nav-right">
  		 			<li><a href="#" class="active">home</a></li>
  		 			<li><a href="#">mobility</a></li>
  		 			<li><a href="#">existing it</a></li>
  		 			<li><a href="#">engage</a></li>
  		 			<li><a href="#">intelligence</a></li>
  		 			<li><a href="#">API</a></li>
  		 			<li><a href="#">contact</a></li>
  		 		</ul>
  		 	</div>
  		</div>
	 	</div>
  </header>
  
  <header class="headerbar visible-xs">
  <div role="button" on="tap:sidebar1.toggle" tabindex="0" class="hamburger">☰</div>
  <div class="site-name"><a href="index.php"><amp-img src="images/logo.png" alt="logo" width="95" height="33"></amp-img></a></div>
</header>


<amp-sidebar id="sidebar1" layout="nodisplay" side="left">
    <div role="button" aria-label="close sidebar" on="tap:sidebar1.toggle" tabindex="0" class="close-sidebar">✕</div>
  <ul class="sidebar">
    <li><a href="#" class="active">home</a></li>
            <li><a href="#">mobility</a></li>
            <li><a href="#">existing it</a></li>
            <li><a href="#">engage</a></li>
            <li><a href="#">intelligence</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">contact</a></li>
  </ul>
</amp-sidebar>
