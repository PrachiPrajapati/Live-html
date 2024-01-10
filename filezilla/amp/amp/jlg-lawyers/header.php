
<header class="navigation hidden-xs">
    <div class="container-fluid">
        <ul class="nav">
            <li>
                <a href="#">
                <amp-img src="images/logo.png"
                    width="100"
                    height="50"
                    alt="logo"></amp-img>
                </a>
            </li>
            <li><a href="#">team</a></li>
            <li><a href="#">service</a></li>
            <li><a href="#">result</a></li>
            <li><a href="#">newsletter</a></li>
            <li><a href="#">what's new</a></li>
            <li><a href="#">contact</a></li>
        </ul>
        <ul class="contact-section">
            <li class="title-text">se habla espenole</li>
            <li><a href="tel:818-630-9099"><span>Call for a Free consultation</span>818-630-9099</a></li>
        </ul>
        <div class="clear"></div>
    </div>
</header>

<header class="headerbar visible-xs">
  <div role="button" on="tap:sidebar1.toggle" tabindex="0" class="hamburger">☰</div>
  <div class="site-name"> <a href="#">
                <amp-img src="images/logo.png"
                    width="100"
                    height="50"
                    alt="logo"></amp-img>
                </a></div>
</header>
    <amp-sidebar id="sidebar1" layout="nodisplay" side="left">
        <div role="button" aria-label="close sidebar" on="tap:sidebar1.toggle" tabindex="0" class="close-sidebar">✕</div>
        <ul class="sidebar">
            <li><a href="#">team</a></li>
            <li><a href="#">service</a></li>
            <li><a href="#">result</a></li>
            <li><a href="#">newsletter</a></li>
            <li><a href="#">what's new</a></li>
            <li><a href="#">contact</a></li>
        </ul>
    </amp-sidebar>
