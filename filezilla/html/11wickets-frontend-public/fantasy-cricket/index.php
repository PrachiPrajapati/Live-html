<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>

  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Play Daily Fantasy Cricket Leagues & Games Online | 11Wickets</title>
  <meta name="description" content="Play Fantasy Cricket India Games Online at 11Wickets. Join Daily Fantasy Cricket Leagues & Win Cash Prizes. Sign Up Now and Get Rs. 25 Bonus & Start Playing Online Cricket Games" />
  <!-- <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script> -->

  <meta property="og:title" content="Play Daily Fantasy Cricket Leagues & Games Online | 11Wickets">
  <meta property="og:description" content="Play Fantasy Cricket India Games Online at 11Wickets. Join Daily Fantasy Cricket Leagues & Win Cash Prizes. Sign Up Now and Get Rs. 25 Bonus & Start Playing Online Cricket Games">
  <meta property="og:image" content="https://11wicketsbucket.s3.ap-south-1.amazonaws.com/elewk/banner-bg.jpg">
  <meta property="fb:app_id" content="2038217879763158">
  <!--Open Graph -->

  <!-- Google signin API key -->
  <!-- <meta name="google-signin-scope" content="profile email"> -->
  <meta name="google-signin-client_id" content="105110726681-nq40mkfo8c0dcjrf6n3dtgvrbia5tknr.apps.googleusercontent.com">
  <script src="https://apis.google.com/js/platform.js?onload=onLoadCallback" async defer></script>

  <!--Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@11_Wickets">
  <meta name="twitter:title" content="Play Daily Fantasy Cricket Leagues & Games Online | 11Wickets">
  <meta name="twitter:description" content="Play Fantasy Cricket India Games Online at 11Wickets. Join Daily Fantasy Cricket Leagues & Win Cash Prizes. Sign Up Now and Get Rs. 25 Bonus & Start Playing Online Cricket Games">

  <meta name="twitter:image"
  content="https://11wicketsbucket.s3.ap-south-1.amazonaws.com/elewk/banner-bg.jpg">
  <meta name="twitter:image:alt" content="11wickets">
  <!-- Twitter Card -->

  <!-- extra -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <!-- Bootstrap -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/custom.css">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->


    <script>
    // prefix = 'http://192.168.11.119:5001/api/v1/';
    // laravelPrefix = 'http://192.168.11.119:8000/api/v1/';
    prefix = 'https://node.11wickets.com/node_application_public/';
    laravelPrefix = 'https://backend.11wickets.com/application_public/api/v1/';


    // google sign in

    var googleUser = {};
    window.onLoadCallback = function () {
      startApp();
    }
    var startApp = function () {
      gapi.load('auth2', function () {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({
          client_id: '105110726681-nq40mkfo8c0dcjrf6n3dtgvrbia5tknr.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          // Request scopes in addition to 'profile' and 'email'
          //scope: 'additional_scope'
        });
        attachSignin(document.getElementById('customBtn'));
      });
    };

    function attachSignin(element) {
      console.log(element.id);
      auth2.attachClickHandler(element, {},
        function (googleUser) {
          // document.getElementById('name').innerText = "Signed in: " +
          googleUser.getBasicProfile().getName();
          // console.log(googleUser);
          var profile = googleUser.getBasicProfile();
          // The ID token you need to pass to your backend:
          $.ajax(`${prefix}social-register`, {
            type: 'POST',
            data: {
              "email": profile.getEmail()
            },
            success: function (data, status, xhr) {
              if (data && data.type === 'success') {
                localStorage.setItem("api_token", data.data.api_token);
                window.location.href = "https://www.11wickets.com/game/match-centre";
              } else {
                document.getElementById("reg_email").value = profile.getEmail();
                document.getElementById("uid").value = profile.getId();
                $('#reg_email').prop("disabled", true);
                // document.getElementById("social_token").value = googleUser.getAuthResponse().id_token;
                document.getElementById("login_with").value = 'google';
              }
            },
            error: function (jqXhr, textStatus, errorMessage) {
              $('#next_btn').prop("disabled", false);
            }
          });
          var id_token = googleUser.getAuthResponse().id_token;
        }, function (error) {
          // alert(JSON.stringify(error, undefined, 2));
        });
    }

    window.fbAsyncInit = function () {
      // FB JavaScript SDK configuration and setup
      FB.init({
        appId: '2038217879763158', // FB App ID
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v5.0' // use graph api version 2.8
      });

      // Check whether the user already logged in
      FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          //display user data
          getFbUserData();
        }
      });
    };

    // Load the JavaScript SDK asynchronously
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Facebook login with JavaScript SDK
    function fbLogin() {
      FB.login(function (response) {
        if (response.authResponse) {
          // Get and display the user profile data
          getFbUserData();
        } else {
          console.log('User cancelled login or did not fully authorize.')
        }
      }, { scope: 'email' });
    }

    // Fetch the user profile data from facebook
    function getFbUserData() {
      FB.api('/me', { locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture' },
        function (response) {
          console.log(response);
          $.ajax(`${prefix}social-register`, {
            type: 'POST',
            data: {
              "email": response.email
            },
            success: function (data, status, xhr) {
              if (data && data.type === 'success') {
                localStorage.setItem("api_token", data.data.api_token);
                window.location.href = "https://www.11wickets.com/game/match-centre";
              } else {
                document.getElementById("reg_email").value = response.email;
                document.getElementById("uid").value = response.id;
                $('#reg_email').prop("disabled", true);
                document.getElementById("login_with").value = 'facebook';
              }
            },
            error: function (jqXhr, textStatus, errorMessage) {
              console.log('errorMessage :: ', errorMessage)
              $('#next_btn').prop("disabled", false);
            }
          });
        });
    }

    // import axios from "axios";
    $(document).ready(function () {
      $('form#login_form').validate({
        rules: {
          login_email: {
            required: true,
          },
          login_pw: {
            required: true
          }
        },
        messages: {
          login_email: {
            required: "<div class='validation' style='color: red; '>Email is required</div>",
          },
          login_pw: {
            required: "<div class='validation' style='color: red; '>Password is required</div>"
          }
        },
        submitHandler: function (form) {
          return false;
        }
      });

      $.validator.addMethod("regx", function (value, element, regexpr) {
        return regexpr.test(value);
      });
      $.validator.addMethod("mobregx", function (value, element, regexpr) {
        return regexpr.test(value);
      });
      $('form#reg_form').validate({
        rules: {
          username: {
            required: true,
            regx: /^[a-zA-Z0-9][a-zA-Z0-9]+$/
          },
          phone: {
            required: true,
            number: true,
            mobregx: /^((\\+91-?)|0)?[0-9]{10}$/
          },
          reg_email: {
            required: true,
            email: true,
          },
          otp: {
            required: true,
            minlength: 6,
          },
          pw: {
            required: true,
            minlength: 6,
          }
        },
        messages: {
          username: {
            required: "<div class='validation' style='color: red; '>Username is required</div>",
            regx: "<div class='validation' style='color: red; '>Username not valid</div>"
          },
          phone: {
            required: "<div class='validation' style='color: red; '>Mobile number is required</div>",
            mobregx: "<div class='validation' style='color: red; '>Mobile number must be at least 10 digit</div>",
            number: "<div class='validation' style='color: red; '>Please enter a valid Mobile number</div>",

          },
          reg_email: {
            required: "<div class='validation' style='color: red; '>Email is required</div>",
            email: "<div class='validation' style='color: red; '>Enter a valid email</div>"

          },
          otp: {
            required: "<div class='validation' style='color: red; '>OTP is required</div>",
            minlength: "<div class='validation' style='color: red; '>OTP must be at least 6 digit</div>",
          },
          pw: {
            required: "<div class='validation' style='color: red; '>Password is required</div>",
            minlength: "<div class='validation' style='color: red; '>Password must be at least 6 characters long</div>"
          }
        }
      });


      $("#next_btn").click(function () {
        if ($('form#reg_form').valid()) {
          $('#next_btn').prop("disabled", true);
          $.ajax(`${prefix}email-phone-exists`, {
            type: 'POST',
            data: {
              "username": $('#username').val(),
              "email": $('#reg_email').val(),
              "phone": $('#phone').val(),
              "login_with": $('#login_with').val(),
              "uid": $('#uid').val(),
            },
            success: function (data, status, xhr) {
              if (data && data.type === 'success') {
                $.ajax(`${laravelPrefix}v2/register/phone/verify?phone=${$('#phone').val()}`, {
                  type: 'GET',
                  success: function (data, status, xhr) {
                    if (data && data.type === 'success') {
                      $('#username').prop("disabled", true);
                      $('#reg_email').prop("disabled", true);
                      $('#phone').prop("disabled", true);
                      $("#otp").css("display", "block");
                      $("#pw").css("display", "block");
                      $("#agree_chkbox").css("display", "block");
                      $("#age_chkbox").css("display", "block");
                      $("#resi_chkbox").css("display", "block");
                      $("#back_btn").css("display", "block");
                      $("#next_btn").css("display", "none");
                      $("#registration_btn").css("display", "block");
                      $('#otp').val('');
                      $('#pw').val('');
                      $('#server-error').text('')
                    } else {
                      $('#server-error').text(data.message)
                      $('#next_btn').prop("disabled", false);
                    }
                  },
                  error: function (jqXhr, textStatus, errorMessage) {
                    $('#next_btn').prop("disabled", false);
                  }
                });
              } else {
                $('#server-error').text(data.message)
                $('#next_btn').prop("disabled", false);
              }
            },
            error: function (jqXhr, textStatus, errorMessage) {
              $('#next_btn').prop("disabled", false);
            }
          });
          return false;
        }
      });

      $("#back_btn").click(function () {
        $('#username').prop("disabled", false);
        $('#reg_email').prop("disabled", false);
        $('#next_btn').prop("disabled", false);
        $('#phone').prop("disabled", false);
        $("#otp").css("display", "none");
        $("#pw").css("display", "none");
        $("#agree_chkbox").css("display", "none");
        $("#age_chkbox").css("display", "none");
        $("#resi_chkbox").css("display", "none");
        $("#back_btn").css("display", "none");
        $("#next_btn").css("display", "block");
        $("#registration_btn").css("display", "none");
        $('#server-error').text('');
        return false;
      });


      $("#registration_btn").click(function () {
        let isValid = 1;
        $('#agree_chkbox .error').text('');
        $('#age_chkbox .error').text('');
        $('#resi_chkbox .error').text('');
        if (!$('form#reg_form').valid()) {
          isValid = 0;
        }
        if (!($('#otp').val() && $('#pw').val().length >= 6)) {
          isValid = 0;
        }
        if (!$('#agree_checkbox_elem').is(":checked")) {
          isValid = 0;
          $('#agree_chkbox .error').text('Please agree');
        }
        if (!$('#age_chkbox_elem').is(":checked")) {
          isValid = 0;
          $('#age_chkbox .error').text('Please agree');
        }
        if (!$('#resi_chkbox_elem').is(":checked")) {
          isValid = 0;
          $('#resi_chkbox .error').text('Please agree');
        }

        if (!isValid) return false;

        $('#registration_btn').prop("disabled", true);
        // if ($("#agree_checkbox_elem").val() === 'agree') {
          $.ajax(`${laravelPrefix}phone/otp/verify?phone_otp=${$('#otp').val()}&phone=${$('#phone').val()}`, {
            type: 'GET',
            success: function (data, status, xhr) {
              if (data && data.type === 'success') {
              // start registration after otp api response success
              $.ajax(`${prefix}register`, {
                type: 'POST',
                data: {
                  "username": $('#username').val(),
                  "email": $('#reg_email').val(),
                  "phone": $('#phone').val(),
                  "password": $('#pw').val(),
                  "login_with": $('#login_with').val(),
                  "uid": $('#uid').val()
                },
                success: function (data, status, xhr) {
                  if (data && data.type === 'success') {
                    localStorage.setItem("api_token", data.data.api_token);
                    window.location.href = "https://www.11wickets.com/game/match-centre";
                  } else {
                    $('#server-error').text(data.message)
                    $('#registration_btn').prop("disabled", false);
                  }
                },
                error: function (jqXhr, textStatus, errorMessage) {
                }
              });
              //end registration 
            } else {
              let msg = (data.message == 'otp_not_verified') ? 'OTP is not verified' : data.message;
              $('#server-error').text(msg);
              $('#registration_btn').prop("disabled", false);
            }
          },
          error: function (jqXhr, textStatus, errorMessage) {
          }
        });
        // return false;
      })
    });
  </script>
</head>

<body>
  <!-- Header Form -->
  <!-- <div class="header-form">
    <div class="container">
      <form id="login_form">
        <input id="login_email" name="login_email" type="text" class="form-control"
          placeholder="Email / Phone" />
        <input id="login_pw" name="login_pw" type="password" class="form-control" placeholder="Password" />
        <button id="login_btn" type="submit">LOGIN</button>
      </form>
    </div>
  </div> -->
  <!-- section nav -->
  <div class="section-nav">
    <nav class="navbar">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="https://www.11wickets.com">
          <img src="img/logo.png" style="width: 200px;position: relative;">
        </a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="https://www.11wickets.com/">Home</a></li>
          <li><a href="https://www.11wickets.com/game/page/how-to-play">How to Play</a></li>
          <li><a href="../fantasy-sports.php">FAQs</a></li>
          <li><a href="https://www.11wickets.com/game/leadership-board">Winner Board</a></li>
          <li><a href="https://www.11wickets.com/game/page/about-us">About Company</a></li>
          <li><a href="https://www.11wickets.com/game/match-centre">Show Contests</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</div>

<!-- banner -->
<div class="banner">
  <div class="banner-inner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="banner-content">
            <img src="img/cricket-gyaan.png" class="img-responsive center-block img">
            <img src="img/cricket-earn.png" class="img-responsive center-block img">
            <img src="img/apna-leauge.png" class="img-responsive  center-block khelo">
            <img src="img/download.png" class="img-responsive center-block down">
          </div>
        </div><!-- col-6 -->
        <div class="col-lg-1">
        </div>
        <div class="col-lg-5 banner-form">
          <div class="banner-content1">
            <h4 class="text-center">CREATE YOUR ACCOUNT</h4 class="text-center">
              <form action="" id="reg_form">
                <!-- <form id="second_form" method="post" action=""> -->
                  <div id='server-error' style='color: red; text-align: center; padding-bottom: 10px;'>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="username" name="username"
                    placeholder="Enter username" />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="reg_email" name="reg_email"
                    placeholder="Enter your email" />
                  </div>
                  <div class="form-group">
                    <input type="number" class="form-control" id="phone" name="phone"
                    placeholder="Enter your mobile no." />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="refer_code" name="refer_code"
                    placeholder="Enter your refer code or promotion code (If Any)." />
                  </div>
                  <div class="form-group" style="display: none;">
                    <input type="text" class="form-control" id="uid" name="uid" placeholder="uid" />
                  </div>
                  <div class="form-group" style="display: none;">
                    <input type="text" class="form-control" id="login_with" name="logintype"
                    placeholder="type" />
                  </div>
                  <div class="form-btn-list back-button">
                    <button class="submit-button" id="back_btn" style="display: none">BACK</button>
                  </div>
                  <div class="form-btn-list back-button">
                    <button class="submit-button" id="next_btn">NEXT</button>
                  </div>
                  <div class="form-btn-list back-button">
                    <div class="social-btns">
                      <div onclick="fbLogin()">
                        <div class="customFacebookSignIn">
                          <span class="icon"></span>
                        </div>
                      </div>
                      <div id="gSignInWrapper" style="padding-left: 10%;;">
                        <div id="customBtn" class="customGPlusSignIn">
                          <span class="icon"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="otp" name="otp"
                    placeholder="Enter your phone OTP" style="display:none" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" id="pw" name="pw"
                    placeholder="Create password" style="display:none" />
                  </div>
                  <div class="checkbox" id="agree_chkbox" style="display:none">
                    <label><input id="agree_checkbox_elem" type="checkbox" value="agree">I agree the
                    terms &amp; conditions</label>
                    <span class='error'></span>
                  </div>
                  <div class="checkbox" id="age_chkbox" style="display:none">
                    <label><input type="checkbox" id="age_chkbox_elem" value="age">I confirm I am above
                      18 years and agree to
                      all Age restriction
                    disclaimer</label>
                    <span class='error'></span>
                  </div>
                  <div class="checkbox" id="resi_chkbox" style="display:none">
                    <label><input type="checkbox" id="resi_chkbox_elem" value="resident">I am not a
                      resident of Telangana,
                      Assam, Odisha, Sikkim or
                      Nagaland and
                    agree to all the Terms and Conditions</label>
                    <span class='error'></span>
                  </div>
                  <div class="form-btn-list">
                    <button class="submit-button" id="registration_btn"
                    style="display: none;">REGISTER</button>
                  </div>
                <!-- <div class="form-btn-list back-button" id="registration_btn">
                  <button class="submit-button" id="registration_btn">REGISTER</button>
                </div> -->
              </form>
            </div>
          </div><!-- col-6 -->
        </div><!-- row -->
      </div><!-- container -->
    </div>
  </div>

  <!-- section-fantasy -->
  <div class="section-fantasy">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-lg-offset-2">
          <div class="fantasy-box">
           <h1>Fantasy Cricket League at 11wickets.com</h1>
           
           <p>Get started with the <strong>fantasy cricket</strong> at 11Wickets. Signup at 11wickets.com and <strong>join amazing & unlimited fantasy cricket games</strong> free and paid leagues. Join India’s most trusted fantasy sports platform, 11Wickets that is more than just a fantasy sports platform. It’s the best platform to play the fantasy league, win real cash, and bring the live action on your finger tips.</p>
           <p><strong>Fantasy cricket league</strong> is all about using your fantasy premier league knowledge and skill to create your 11Wickets team within a budget of <strong>100 credits</strong>. You can choose your <strong>12th man</strong> as your substitute. Your 11wickets fantasy Cricket team earns points based on how your chosen cricketers perform in real-life matches. Hence, remember, this is a strategy cricket leagues based on selecting cricketers before a match begins. Go ahead, create your online cricket game teams, join exciting free and paid leagues & enjoy playing on 11Wickets.</p>
         </div>
       </div><!-- col-88 end -->
     </div>
   </div>
 </div>


 <!-- testimonial -->
 <div class="section section-testimonial">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title">
          <i class="fa fa-quote-left" aria-hidden="true"></i>
          <h3>Users Speaks</h3>
        </div>
      </div><!-- col-lg-12 -->

      <div class="col-lg-4">
        <div class="testi-box">
          <ul class="callouts">
            <li class="callouts--bottom"> "No matter where I play fantasy sports, 11 Wickets is the
              coolest and
            easiest platform! I learnt to play fantasy cricket on 11 Wickets." </li>
          </ul>
          <div class="media-box">
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="img/pratik.jpg">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Pratik Ghosh</h4>
                <!-- <h5>UI & UX @ Microsoft</h5> -->
              </div>
            </div>
          </div>
        </div><!-- testi-box -->
      </div><!-- col-lg-4 -->
      <div class="col-lg-4">
        <div class="testi-box">
          <ul class="callouts">
            <li class="callouts--bottom">"It's a real fun to play fantasy cricket games at 11 Wickets.
              With every
            fantasy match I play, the excitement of watching cricket just doubles!"</li>
          </ul>
          <div class="media-box">
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="img/avinash.jpg">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Avinash Tiwari</h4>
                <!-- <h5>UI & UX @ Microsoft</h5> -->
              </div>
            </div>
          </div>
        </div><!-- testi-box -->
      </div><!-- col-lg-4 -->
      <div class="col-lg-4">
        <div class="testi-box">
          <ul class="callouts">
            <li class="callouts--bottom">"Who thought Cricket knowledge could actually lead to great
              pastime.
            11Wickets is the most simple and easy to use fantasy cricket website."</li>
          </ul>
          <div class="media-box">
            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="img/puja.jpg">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">Puja Nair</h4>
                <!-- <h5>UI & UX @ Microsoft</h5> -->
              </div>
            </div>
          </div>
        </div><!-- testi-box -->
      </div><!-- col-lg-4 -->
    </div>
  </div>
</div>

<!-- copyright -->
<div class="copyright">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <ul class="list-inline">
          <li><a>Ability Games</a></li>
          <li><a>|</a></li>
          <li><a>All Right Reserve</a></li>
          <li><a style="cursor: pointer;"
            onclick="if($('#rd').is(':visible')) { $('#rd').hide(); } else { $('#rd').show(); }">Read
          more</a></li>
        </ul>
      </div>
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <ul class="list-inline">
          <li><a href="https://www.11wickets.com/game/page/privacy-policy">Privacy Policy</a></li>
          <li><a>|</a></li>
          <li><a href="https://www.11wickets.com/game/page/terms-condition">Terms and Conditions</a></li>
          <li><a href="https://www.facebook.com/elevenwickets/" target="_blank"><img
            src="img/facebook.png" class="img-responsive"></a></li>
            <li><a href="https://twitter.com/11_wickets" target="_blank"><img src="img/twitter.png"
              class="img-responsive"></a></li>
              <li><a href="https://www.youtube.com/channel/UCrU7amX_onLBIvD0QAC1JKA" target="_blank"><img
                src="img/youtube.png" class="img-responsive"></a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/bootstrap.min.js"></script>
      </body>

      </html>