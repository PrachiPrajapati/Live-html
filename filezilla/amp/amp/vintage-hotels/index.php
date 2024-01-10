<!doctype html>
<html amp lang="en">
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>Amp Demo</title>
    <link rel="canonical" href="https://amp.dev/documentation/guides-and-tutorials/start/create/basic_markup/">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <!-- Favicon Included -->
    <link rel="apple-touch-icon" sizes="57x57" href="images/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="images/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="images/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="images/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="images/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="images/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="images/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="images/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
    <link rel="manifest" href="images/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="images/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <!-- Font-awasome Included -->
    <link rel="stylesheet" type="text/css" href="css/font-awesome.css" />

    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "Open-source framework for publishing content",
        "datePublished": "2015-10-07T12:02:41Z",
        "image": [
          "logo.jpg"
        ]
      }
    </script>
    <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"></script>
    <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
    <!-- tab js Included -->
    <script async custom-element="amp-selector" src="https://cdn.ampproject.org/v0/amp-selector-0.1.js"></script>
    <style amp-custom>
        /* -=- Bootstrap CSS Start -=- */
        html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.img-responsive{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.row-no-gutters{margin-right:0;margin-left:0}.row-no-gutters [class*=col-]{padding-right:0;padding-left:0}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.row:after,.row:before{display:table;content:" "}.clearfix:after,.container-fluid:after,.container:after,.row:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}
    </style>
    <!-- Font family Included -->
    <style type="text/css">
        @font-face {
            font-family: 'TheCarpenter';
            src: url('fonts/TheCarpenter.eot');
            src: url('fonts/TheCarpenter.eot?#iefix') format('embedded-opentype'),
                url('fonts/TheCarpenter.woff2') format('woff2'),
                url('fonts/TheCarpenter.woff') format('woff'),
                url('fonts/TheCarpenter.ttf') format('truetype'),
                url('fonts/TheCarpenter.svg#TheCarpenter') format('svg');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'TheCarpenter-Bold';
            src: url('fonts/TheCarpenter-Bold.eot');
            src: url('fonts/TheCarpenter-Bold.eot?#iefix') format('embedded-opentype'),
                url('fonts/TheCarpenter-Bold.woff2') format('woff2'),
                url('fonts/TheCarpenter-Bold.woff') format('woff'),
                url('fonts/TheCarpenter-Bold.ttf') format('truetype'),
                url('fonts/TheCarpenter-Bold.svg#TheCarpenter-Bold') format('svg');
            font-weight: bold;
            font-style: normal;
        }
        @import url('https://fonts.googleapis.com/css?family=Playfair+Display:300,400,700,900&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700&display=swap');
    </style>
    <!-- Custom CSS Start -->
    <style type="text/css">
        *                       { margin: 0px; padding: 0px; outline: none;}
        body                    { font-size: 16px; font-stretch: normal; font-family: 'Playfair Display', serif; font-weight: 400; }
        img                     { border: 0px;}
        ul,ol                   { margin: 0px; list-style: none;}
        a                       { text-decoration: none; outline: none; color: #000; transition: all 0.4s ease-in-out; -webkit-transition: all 0.4s ease-in-out; }
        a:focus, a:active, a:visited, a:hover   { text-decoration: none; outline: none; }
        a:hover, a:focus        { color: #10137b; }
        p                       { margin: 0px; font-size: 20px; line-height: 30px; letter-spacing: 0.23px; }
        button                  { transition: all 0.4s ease-in-out; -webkit-transition: all 0.4s ease-in-out; }
        button:hover,button:focus:active,button:focus               { outline: none !important; box-shadow: none; -webkit-box-shadow: none; }
        h1,h2,h3,h4,h5,h6                                           { font-family: 'Playfair Display', serif; font-weight: 400; }
        h1                                                          {  }
        h2                                                          { margin: 0px 0px 32px !important; font-size: 30px; line-height: 38px; color: #303133; }
        h3                                                          {  }
        h4                                                          {  }
        h5                                                          {  }
        h6                                                          {  }
        /* Styles for the flex layout based tabs */
           .menu-list-wrap                                                                      { margin: 0px auto; max-width: 756px; }
           .menu-list .tabs-with-selector                                                       { text-align: center; position: relative; }
           .menu-list amp-selector.tabs-with-selector:before                                    { content: ""; height: 2px; width: 100%; background-color: #eaeaea; display: block; position: absolute; bottom: 0px; left: 0px; }
           amp-selector[role=tablist].tabs-with-flex [role=tab][selected] + [role=tabpanel]     { display: block; }
           amp-selector[role=tablist].tabs-with-selector [role=tab][selected]                   { outline: none; border-bottom: 2px solid #b4975a; display: inline-block; color: #b4975a; }
           amp-selector[role=tablist].tabs-with-selector [role=tab]                             { padding: 10px 20px 15px 20px; font-family: 'Poppins'; font-size: 15px; line-height: 22px; display: inline-block; position: relative; z-index: 1; }
           amp-selector.tabpanels [role=tabpanel]                                               { padding: 36px 0px 0px 0px; display: none; }
           amp-selector.tabpanels [role=tabpanel][selected]                                     { outline: none; display: block; }
           .mn-list-cntnt                                                               {  }
           .mn-list-cntnt li                                                            { padding: 36px; border-bottom: 1px solid #ccc; display: flex; display: -webkit-flex; }
           .mn-list-cntnt li .mn-title-txt                                              { margin-bottom: 20px; font-size: 24px; line-height: 28px; font-weight: 400; font-family: 'Playfair Display', serif; }
           .mn-list-cntnt li .mn-cntn-txt                                               { font-size: 17px; line-height: 25px; font-weight: 400; color: #afafaf; font-family: 'Playfair Display', serif; }
           .mn-list-cntnt li .mn-rt-box                                                 { padding: 0px 36px; width: 228px; text-align: right; font-size: 29px; line-height: 34px; display: flex; display: -webkit-flex; justify-content: flex-end;  align-items: center; }
        /* -=- Common CSS Start -=- */
        .cmn-spacing            { padding: 108px 0px; }
        .text-center            { text-align: center; }
        .white-txt              { color: #fff; }
        /* -=- Sidebar CSS Start -=- */
        amp-sidebar             { background: #000; }
        /* -=- Banner CSS Start -=- */
        .bnr-sld                        { width: 100%; height: 100%; background: url("") no-repeat center center / cover; position: relative; }
        .bnr-sld h1                     { width: 100%; margin: 0px; font-size: 64px; line-height: 74px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); -webkit-transform: translate(-50%,-50%); color: #fff; text-align: center; max-width: 55%; }
        .bnr-sld:before                 { content: ""; height: 100%; width: 100%; background: rgba(0,0,0,0.5); display: block; position: absolute; top: 0px; left: 0px; }
        .banner .i-amphtml-element      { display: block; position: relative; height: 100vh; }
        .banner .amp-carousel-button    { margin: 0px; background-color: transparent; filter: invert(1); }
        .banner .amp-carousel-button-prev   { left: 5%;  background-image: url('images/arrow-left.png'); background-size: 22px 22px; }
        .banner .amp-carousel-button-prev   { left: 5%;  background-image: url('images/arrow-left.png'); background-size: 22px 22px; }
        .banner .amp-carousel-button-next   { right: 5%; background-image: url('images/arrow-right.png'); background-size: 22px 22px; }
        /* -=- Our Goal Section CSS Start -=- */
        .or-gl-innr-box         { margin: 0px auto; max-width: 55%; }
        .or-gl-innr-box p       { font-size: 19px; line-height: 30px; color: #777; }
        /* -=- Gallery Section CSS Start -=- */
        .two-child,
        .gallery-wrap           { display: flex; display: -webkit-flex; }
        .half-box,
        .img-part               { background: url("")no-repeat center center / cover; }
        .img-part,
        .img-cntnt              { width: 50%; }
        .single-child           { width: 100%; height: 244px; background: url('') no-repeat center center / cover; }
        .img-cntnt              { padding: 72px; background-color: #141618; }
        .img-cntnt > p          { font-size: 15px; line-height: 24px; letter-spacing: 1px; }
        /* -=- Grid Gallery Section CSS Start -=- */
        .grid-galary            { display: grid; grid-gap: 15px; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;  grid-template-rows: ; }
        .grid-galary li         { min-height: 277px; background: url("") no-repeat center center / cover; }
        .grid-galary li.gd-item-thrd            { grid-row: 1/3; grid-column: 3/5; }
        .grid-galary li.gd-item-sx              { grid-column: 1/3; grid-row: 2/4; min-height: 577px; }
        .grid-galary li.gd-item-nnth            { grid-column: 5/7; grid-row: 2/4; }
        @media(min-width: 1800px) { 
            .container          { width: 1600px; }
        }
        @media(min-width: 1200px) and (max-width: 1399px) { 
            /* -=- Common Element CSS Start -=- */
            .bnr-sld h1        { width: 100%; margin: 0px; font-size: 44px; line-height: 54px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); -webkit-transform: translate(-50%,-50%); color: #fff; text-align: center; max-width: 60%; }
            /* -=- Gallery Section CSS Start -=- */
            .gallery-wrap                   { display: block; }
            .half-box.right-gallery         { display: flex; display: -webkit-flex; flex-direction: column-reverse; }
            .grid-galary li                 { min-height: 200px; }
            .grid-galary li.gd-item-sx      { min-height: 415px; }
        }
        @media(min-width: 992px) and (max-width: 1199px) {
            .bnr-sld h1                     { font-size: 44px; line-height: 56px; }
            /* -=- Gallery Section CSS Start -=- */
            .gallery-wrap                   { display: block; }
            .half-box.right-gallery         { display: flex; display: -webkit-flex; flex-direction: column-reverse; }
            .grid-galary li                 { min-height: 200px; }
            .grid-galary li.gd-item-sx      { min-height: 415px; }
        }
        @media(min-width: 768px) and (max-width: 1199px) {
            h2                                  { margin: 0px 0px 24px; font-size: 24px; line-height: 30px; }
            /* -=- Common Spacing CSS Start -=- */
            .cmn-spacing                        { padding: 54px 0px; }
            /* -=- Banner CSS Start -=- */
            .bnr-sld h1                         { font-size: 34px; line-height: 44px; }
            /* -=- Our Goal Section CSS Start -=- */
            .or-gl-innr-box                     { max-width: 65%; }
            .or-gl-innr-box p                   { font-size: 18px; line-height: 28px; }
            /* -=- Gallary Section CSS Start -=- */
            .grid-galary li.gd-item-sx          { min-height: 240px; }
            .grid-galary li                     { min-height: 160px; }
            /* -=- Gallery Section CSS Start -=- */
            .gallery-wrap                   { display: block; }
            .half-box.right-gallery         { display: flex; display: -webkit-flex; flex-direction: column-reverse; }
            .grid-galary li                 { min-height: 200px; }
            .grid-galary li.gd-item-sx      { min-height: 415px; }
        }
        @media(max-width: 767px){
            /* -=- Common CSS Start -=- */
            .cmn-spacing                        { padding: 54px 0px; }
            /* -=- Common Components CSS Start -=- */
            h2                                  { margin: 0px 0px 15px; font-size: 20px; line-height: 26px; }
            /* -=- Banner CSS Start -=- */
            .bnr-sld h1                         { font-size: 24px; line-height: 38px; max-width: 70%; }
            .banner .amp-carousel-button-prev   { left: 10px; } 
            .banner .amp-carousel-button-next   { right: 10px; }
            .or-gl-innr-box                     { max-width: 100%; }
            .or-gl-innr-box p                   { font-size: 18px; line-height: 26px; }
            /* -=- Menu List CSS Start -=- */
            .mn-list-cntnt li                   { padding: 20px 0px; }
            .mn-list-cntnt li .mn-title-txt     { margin-bottom: 10px; font-size: 20px; line-height: 22px; }
            .mn-list-cntnt li .mn-rt-box        { padding: 0px; font-size: 24px; line-height: 30px; }
            /* -=- Gallery Section CSS Start -=- */
            .two-child, .gallery-wrap           { display: block; }
            .img-part, .img-cntnt               { width: 100%; min-height: 277px; }
            .img-cntnt                          { padding: 25px; }
            .cmn-spacing                        { padding: 30px 0px; }
            .grid-galary                        { grid-template-columns: 2fr 2fr; }
            .grid-galary li.gd-item-thrd,
            .grid-galary li.gd-item-nnth,
            .grid-galary li.gd-item-sx          { grid-column: initial; grid-row: initial; width: 100%; }
            .grid-galary li,
            .grid-galary li.gd-item-sx          { min-height: 200px; }
        }
    </style>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  </head>
  <body>
    <!-- Header file Included -->
    <?php include 'header.php'; ?>
    <!-- Main Section Included -->
    <section class="banner">
        <amp-carousel layout="responsive" type="slides">
            <div class="bnr-sld" style="background-image: url('images/1.jpeg');">
                <div class="container">
                    <h1>The secret of success in life is to eat what you like and let the food fight it out inside</h1>
                </div>
            </div>
            <div class="bnr-sld" style="background-image: url('images/2.jpeg');">
                <div class="container"></div>
                    <h1>Your diet is a bank account. Good food choices are good investments</h1>
                </div>
            </div>
            <div class="bnr-sld" style="background-image: url('images/3.jpeg');">
                <div class="container">
                    <h1>If you cant' feed a hundred people, then just feed one</h1>
                </div>
            </div>
            <div class="bnr-sld" style="background-image: url('images/4.jpeg');">
                <div class="container">
                    <h1>Let food be thy medicine and medicine be thy food</h1>
                </div>
            </div>
            <div class="bnr-sld" style="background-image: url('images/5.jpeg');">
                <div class="container">
                    <h1>Cooking is like love, it should be entered into with abandon, or not at all</h1>
                </div>
            </div>
            <div class="bnr-sld" style="background-image: url('images/6.jpeg');">
                <div class="container">
                    <h1>The only thing I like better than talking about food is eating</h1>
                </div>
            </div>
            <div class="bnr-sld" style="background-image: url('images/7.jpeg');">
                <div class="container">
                    <h1>Life is a combination of magic and pasta</h1>
                </div>
            </div>
        </amp-carousel>
    </section>
    <section class="or-gl-section cmn-spacing">
        <div class="container">
            <div class="or-gl-innr-box">
                <h2 class="text-center">Our goal is to create tasting food that restores, replenishes and revives.</h2>
                <p class="text-center">Located on London, a street that dates back to the 17th century, Uncode is the latest restaurant lounge by Undsgn Group and Chef Christine Bottura.</p>
            </div>
        </div>
    </section>
    <section class="food-gallery">
        <ul>
            <li></li>
        </ul>
    </section>
    <!-- Grid gallary Section -->
    <ul class="grid-galary">
        <li class="gd-item-fst" style="background-image: url('images/skate-min.jpg');"></li>
        <li class="gd-item-snd" style="background-image: url('images/celeriac-pumpernickle-min.jpg');"></li>
        <li class="gd-item-thrd" style="background-image: url('images/potato-dumplings.jpg');"></li>
        <li class="gd-item-frth" style="background-image: url('images/photo-min.jpg');"></li>
        <li class="gd-item-ffth" style="background-image: url('images/diver-scallop-min.jpg');"></li>
        <li class="gd-item-sx" style="background-image: url('images/pan-seared.jpg');"></li>
        <li class="gd-item-svn" style="background-image: url('images/blue-crab-salad-min.jpg');"></li>
        <li class="gd-item-eght" style="background-image: url('images/izzy-boscawen.jpg');"></li>
        <li class="gd-item-nnth" style="background-image: url('images/pork-belly-min.jpg');"></li>
    </ul>
    <!-- menu List Section -->
    <section class="menu-list cmn-spacing">
        <div class="container">
            <h2 class="text-center">Catalogue</h2>
            <div class="menu-list-wrap">
                <amp-selector class="tabs-with-selector"
                    role="tablist"
                    on="select:myTabPanels.toggle(index=event.targetOption, value=true)">
                    <div id="sample3-tab1"
                        role="tab"
                        aria-controls="sample3-tabpanel1"
                        option="0"
                        selected>Lunch
                    </div>
                    <div id="sample3-tab2"
                        role="tab"
                        aria-controls="sample3-tabpanel2"
                        option="1">Dinner
                    </div>
                </amp-selector>
                <amp-selector id="myTabPanels" class="tabpanels">
                    <div id="sample3-tabpanel1"
                        role="tabpanel"
                        aria-labelledby="sample3-tab1"
                        option
                        selected>
                        <ul class="mn-list-cntnt">
                            <li>
                                <div class="mn-lt-box">
                                    <p class="mn-title-txt">Grilled Calmari</p>
                                    <p class="mn-cntn-txt">Salsa Verde yogurt, quinoa, nappa cabbage, beet and fennel salade, pomegranate molasses dressing.</p>
                                </div>
                                <div class="mn-rt-box">
                                    <span>&dollar;20</span>
                                </div>
                            </li>
                            <li>
                                <div class="mn-lt-box">
                                    <p class="mn-title-txt">Grilled Calmari</p>
                                    <p class="mn-cntn-txt">Salsa Verde yogurt, quinoa, nappa cabbage, beet and fennel salade, pomegranate molasses dressing.</p>
                                </div>
                                <div class="mn-rt-box">
                                    <span>&dollar;20</span>
                                </div>
                            </li>
                            <li>
                                <div class="mn-lt-box">
                                    <p class="mn-title-txt">Grilled Calmari</p>
                                    <p class="mn-cntn-txt">Salsa Verde yogurt, quinoa, nappa cabbage, beet and fennel salade, pomegranate molasses dressing.</p>
                                </div>
                                <div class="mn-rt-box">
                                    <span>&dollar;20</span>
                                </div>
                            </li>
                            <li>
                                <div class="mn-lt-box">
                                    <p class="mn-title-txt">Grilled Calmari</p>
                                    <p class="mn-cntn-txt">Salsa Verde yogurt, quinoa, nappa cabbage, beet and fennel salade, pomegranate molasses dressing.</p>
                                </div>
                                <div class="mn-rt-box">
                                    <span>&dollar;20</span>
                                </div>
                            </li>
                            <li>
                                <div class="mn-lt-box">
                                    <p class="mn-title-txt">Grilled Calmari</p>
                                    <p class="mn-cntn-txt">Salsa Verde yogurt, quinoa, nappa cabbage, beet and fennel salade, pomegranate molasses dressing.</p>
                                </div>
                                <div class="mn-rt-box">
                                    <span>&dollar;20</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="sample3-tabpanel2"
                        role="tabpanel"
                        aria-labelledby="sample3-tab2"
                        option>
                        <ul class="mn-list-cntnt">
                            <li>
                                <div class="mn-lt-box">
                                    <p class="mn-title-txt">Grilled Calmari</p>
                                    <p class="mn-cntn-txt">Salsa Verde yogurt, quinoa, nappa cabbage, beet and fennel salade, pomegranate molasses dressing.</p>
                                </div>
                                <div class="mn-rt-box">
                                    <span>&dollar;20</span>
                                </div>
                            </li>
                            <li>
                                <div class="mn-lt-box">
                                    <p class="mn-title-txt">Grilled Calmari</p>
                                    <p class="mn-cntn-txt">Salsa Verde yogurt, quinoa, nappa cabbage, beet and fennel salade, pomegranate molasses dressing.</p>
                                </div>
                                <div class="mn-rt-box">
                                    <span>&dollar;20</span>
                                </div>
                            </li>
                            <li>
                                <div class="mn-lt-box">
                                    <p class="mn-title-txt">Grilled Calmari</p>
                                    <p class="mn-cntn-txt">Salsa Verde yogurt, quinoa, nappa cabbage, beet and fennel salade, pomegranate molasses dressing.</p>
                                </div>
                                <div class="mn-rt-box">
                                    <span>&dollar;20</span>
                                </div>
                            </li>
                            <li>
                                <div class="mn-lt-box">
                                    <p class="mn-title-txt">Grilled Calmari</p>
                                    <p class="mn-cntn-txt">Salsa Verde yogurt, quinoa, nappa cabbage, beet and fennel salade, pomegranate molasses dressing.</p>
                                </div>
                                <div class="mn-rt-box">
                                    <span>&dollar;20</span>
                                </div>
                            </li>
                            <li>
                                <div class="mn-lt-box">
                                    <p class="mn-title-txt">Grilled Calmari</p>
                                    <p class="mn-cntn-txt">Salsa Verde yogurt, quinoa, nappa cabbage, beet and fennel salade, pomegranate molasses dressing.</p>
                                </div>
                                <div class="mn-rt-box">
                                    <span>&dollar;20</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </amp-selector>
            </div>
        </div>
    </section>
    <section class="image-gallery">
        <div class="gallery-wrap">
            <div class="half-box left-gallery">
                <div class="two-child">
                    <div class="img-part" style="background-image: url('images/restaurant-chef-2.jpg');"></div>
                    <div class="img-cntnt">
                        <h2 class="white-txt">Our Chef</h2>
                        <p class="white-txt">Christine making his debut in his hometown Chicago, crafts a straight-forward yet progressive menu drawn from his culinary influences from French technique, Asian heritage, and bi-coastal gallivanting. He transforms fresh and, when possible, locally-sourced produce into thoughtful dishes.</p>
                    </div>
                </div>
                <div class="single-child" style="background-image: url('images/chuttersnap.jpg');"></div>
            </div>
            <div class="half-box right-gallery">
                <div class="single-child" style="background-image: url('images/wennington.jpg');"></div>
                <div class="two-child">
                    <div class="img-part" style="background-image: url('images/restaurant-chef-1.jpg');"></div>
                    <div class="img-cntnt">
                        <h2 class="white-txt">Our Chef</h2>
                        <p class="white-txt">Christine making his debut in his hometown Chicago, crafts a straight-forward yet progressive menu drawn from his culinary influences from French technique, Asian heritage, and bi-coastal gallivanting. He transforms fresh and, when possible, locally-sourced produce into thoughtful dishes.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Footyer file Included -->
    <?php include 'footer.php'; ?>
  </body>
</html>