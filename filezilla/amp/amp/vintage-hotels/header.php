<style type="text/css">
    /* -=- Header CSS Start -=- */
    header                                                      { padding: 10px; width: 100%; position: absolute; left: 0px; top: 0px; display: flex; display: -webkit-flex; justify-content: center; z-index: 1; }
    .logo                                                       { font-family: 'TheCarpenter-Bold'; font-size: 44px; line-height: 44px; color: #fff; letter-spacing: 8px; display: inline-block; text-align: center;  }
    .logo:hover                                                 { color: #fff; }
    .nav-btn                                                    { height: 36px; width: 38px; background: url('') no-repeat center center; border: none; position: absolute; top: 50%; right: 100px; transform: translateY(-50%); -webkit-transform: translateY(-50%); }
    .nav-btn span                                               { margin-bottom: 8px; display: block; min-height: 3px; width: 100%; background-color: #fff; }
    .nav-btn span:last-child                                    { margin: 0px 0px 0px auto; max-width: 25px; }
    amp-nested-menu, amp-nested-menu [amp-nested-submenu]       { width: 100%; }

    amp-nested-menu.i-amphtml-layout-size-defined     { padding: 50px 0px !important; display: flex; display: -webkit-flex; justify-content: center; align-items: center; position: relative; }
    .nav-social-menu                                  { display: flex; display: -webkit-flex; justify-content: center; position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); transform: -webkit-translateX(-50%); }
    .nav-social-menu > li                             { margin-right: 20px; }
    .nav-social-menu > li:last-child                  { margin-right: 0px; }
    .nav-social-menu > li > a                         { font-size: 26px; line-height: 24px; color: #fff; }
    .nav-social-menu > li > a i		 		 	 		{ transition-delay: 0.4s; -webkit-transition-delay: 0.4s; }
    .nav-social-menu > li > a:hover i:before 			{ color: #b4975a; }
    #sidebar1                                         	{ width: 500px; }
    .header-list                              { width: 100%; }
    .header-list li                           { margin-bottom: 15px; text-align: center; position: relative; }
    .header-list li a:before                    { content: ""; width: 100%; max-width: 0px; height: 2px; background-color: #fff; position: absolute; top: 50%; left: 0px; transform: translateY(-50%); z-index: 1; width: calc(100% + 8px); transition-duration: 0.5s; -webkit-transition-duration: 0.5s;  }
    .header-list li:hover a:before,
    .header-list li.active a:before           { max-width: 100%; }
    .header-list li:hover a,
    .header-list li.active a                  { color: rgba(255, 255, 255,0.6); }
    .header-list li.active:before             {  }
    .header-list li a                         { font-size: 28px; line-height: 38px; color: #fff; font-weight: 400; display: inline-block; position: relative; }
    @media(max-width: 767px){
      .nav-btn                            { right: 20px; }
      header                              { justify-content: flex-start; }
      .logo                               { margin-left: 25px; font-size: 38px; line-height: 38px; }
      .header-list li a                   { font-size: 22px; line-height: 30px; }
      .nav-social-menu > li > a           { font-size: 20px; line-height: 24px; }
    }
</style>
<header>
    <a href="#" class="logo">
        Vintage<br/>Hotels
    </a>
    <button class="nav-btn" on="tap:sidebar1">
        <span></span>
        <span></span>
        <span></span>
    </button>
</header>
<amp-sidebar id="sidebar1" layout="nodisplay">
  <amp-nested-menu layout="fill">
    <ul class="header-list">
      <li class="active">
        <a href="#">Home</a>
      </li>
      <li>
        <a href="">Pages</a>
      </li>
      <li>
        <a href="">Features</a>
      </li>
      <li>
        <a href="">Works</a>
      </li>
      <li>
        <a href="">Blog</a>
      </li>
      <li>
        <a href="">Shop</a>
      </li>
      <li>
        <a href="">Extra</a>
      </li>
    </ul>
    <ul class="nav-social-menu">
      <li><a href="www.facebook.com" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
      <li><a href="wwww.twitter.com" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li><a href="wwww.instagram.com" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
      <li><a href="wwww.pintrest.com" target="_blank"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
    </ul>
  </amp-nested-menu>
</amp-sidebar>