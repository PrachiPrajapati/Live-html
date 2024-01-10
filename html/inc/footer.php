<!--******************* Footer Section Start ******************-->
<footer class="text-center">
  <div class="container">
    <nav class="d-none d-sm-block">
      <ul class="footer-nav">
        <li class="active"><a href="index.php">Home</a></li>
        <li><a href="menu.php">menus</a></li>
        <li><a href="#">Lounge Bar</a></li>
        <li><a href="#">offers</a></li>
        <li><a href="contact.php">contact</a></li>
        <li><a href="#">bookings</a></li>
      </ul>
    </nav>
    <div class="footer-middle">
      <figure class="footer-logo">
        <img src="images/footer-logo.png" alt="logo" class="img-fluid" />
      </figure>
      <ul class="social-list d-flex justify-content-center">
      <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
      <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
      <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
    </ul>
    </div>
    <div class="site-info">
      <p>&copy; 2020 Ate O’CLock. All rights reserved</p>
    </div>
  </div>
</footer>
<!--******************* Footer Section End ******************-->
<!--*********************** All End ************************-->
<script src="js/modernizr.custom.js"></script>
<script src="js/classie.js"></script>
<script src="js/overlay-menu.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 1000);
          return false;
        }
      }
    });

    $(window).scroll(function() {
      if ($(document).scrollTop() > 60) {
        $('header nav').addClass('navbar-shadow');
      } else {
        $('header nav').removeClass('navbar-shadow');
      }
    });

  });
</script>
</body>

</html>