<!-- header.php -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Online India Fantasy Kabaddi Leagues & Games | 11Wickets</title>    

    <!--Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.11wickets.com">
   
    <meta property="og:image" content="https://11wicketsbucket.s3.ap-south-1.amazonaws.com/elewk/banner-bg-kabaddi.jpg">
    <meta property="fb:app_id" content="2038217879763158">
    <!--Open Graph -->

    <!--Twitter Card -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@11_Wickets">    
   
    <meta name="twitter:image" content="https://11wicketsbucket.s3.ap-south-1.amazonaws.com/elewk/banner-bg-kabaddi.jpg">
    <meta name="twitter:image:alt" content="11wickets">
    <!-- Twitter Card -->

    <!-- meta title & description -->
    <?php if(isset($metaData)) { ?>
      
      <?php if(isset($metaData['title'])) { ?>
        <meta name="title" content="<?php echo $metaData['title']; ?>">
        <meta property="og:title" content="<?php echo $metaData['title']; ?>">
        <meta name="twitter:title" content="<?php echo $metaData['title']; ?>">
      
      <?php } else {?>
        <meta name="title" content="Online India Fantasy Kabaddi Leagues & Games | 11Wickets">
        <meta property="og:title" content="Online India Fantasy Kabaddi Leagues & Games | 11Wickets">
        <meta name="twitter:title" content="Online India Fantasy Kabaddi Leagues & Games | 11Wickets">
      
      <?php } if(isset($metaData['description'])) { ?>
        <meta name="description" content="<?php echo $metaData['description']; ?>">
        <meta property="og:description" content="<?php echo $metaData['description']; ?>">
        <meta name="twitter:description" content="<?php echo $metaData['description']; ?>">
      
      <?php } else { ?>
        <meta name="description" content="Play online India fantasy kabaddi leagues at 11wickets and win cash rewards. Sign up now and get Rs. 25 bonus & start playing kabaddi fantasy games."/>
        <meta property="og:description" content="Play online India fantasy kabaddi leagues at 11wickets and win cash rewards. Sign up now and get Rs. 25 bonus & start playing kabaddi fantasy games.">
        <meta name="twitter:description" content="Play online India fantasy kabaddi leagues at 11wickets and win cash rewards. Sign up now and get Rs. 25 bonus & start playing kabaddi fantasy games.">
    
    <?php }} else { ?>
      <meta name="title" content="Online India Fantasy Kabaddi Leagues & Games | 11Wickets">
      <meta property="og:title" content="Online India Fantasy Kabaddi Leagues & Games | 11Wickets">
      <meta name="twitter:title" content="Online India Fantasy Kabaddi Leagues & Games | 11Wickets">

      <meta name="description" content="Play online India fantasy kabaddi leagues at 11wickets and win cash rewards. Sign up now and get Rs. 25 bonus & start playing kabaddi fantasy games."/>
      <meta property="og:description" content="Play online India fantasy kabaddi leagues at 11wickets and win cash rewards. Sign up now and get Rs. 25 bonus & start playing kabaddi fantasy games.">
      <meta name="twitter:description" content="Play online India fantasy kabaddi leagues at 11wickets and win cash rewards. Sign up now and get Rs. 25 bonus & start playing kabaddi fantasy games.">
    <?php } ?>

    <!-- extra -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/custom-faq.css?v=2.0">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NQXHG3T');</script>
    <!-- End Google Tag Manager -->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117771080-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-117771080-1');
    </script>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

  </head>
  <body>

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQXHG3T"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- nav -->
    <div class="section-nav">
      <nav class="navbar navbar-default">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            
            <a class="navbar-brand" <?php if(!isset($logoUrl)) { ?> href="#" <?php } else { ?> href="<?php echo $logoUrl; ?>" <?php } ?>>
              <img src="img/logo.png" style="width: 180px;position: relative;margin-top: -13px;">
            </a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="https://www.11wickets.com/">Home</a></li>
              <li><a href="fantasy-sports.php">Fantasy Sports</a></li>
              <li><a href="fantasy-cricket.php">Fantasy Cricket</a></li>
              <li><a href="fantasy-football.php">Fantasy Football</a></li>
              <li><a href="daily-fantasy-sports-game.php">Join Fantasy Sports</a></li>
              <li><a href="is-fantasy-sports-legal-in-India.php">Fantasy Sports in India</a></li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
    </div>
