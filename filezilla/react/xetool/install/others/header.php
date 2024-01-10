<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="noindex, nofollow">
        <title>inkXE Installation wizard</title>
        <link href="wizard/css/bootstrap.min.css" rel="stylesheet">
        <link href="wizard/css/style.css" rel="stylesheet">
        <link href="wizard/css/font-awesome.css" rel="stylesheet">
        <link rel="icon" type="image/x-icon" href="wizard/images/favicon.ico" />
    </head>
    <body>
        <nav class="navbar navbar-custom">
            <div class="container">
                <div class="row">
                    <div class="col-xs-4 col-sm-3 p-v-10">
                        <img width="80px" alt="inkxe" src="wizard/images/logo.png" />
                    </div>
                    <div class="col-xs-4 col-sm-6 text-center">
                        <h2>Installation wizard</h2>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container stage-wrapper">
            <div class="loader" id="myLoader" style="display:none;"><img class="loader-img" title="Loading" src="wizard/images/loader.gif" /></div>
            <div class="row stage-container">
                <?php
                for ($i = 1; $i <= $step['0']; $i++) {
                    $active = '';
                    $completed = '';
                    if ($i <= $step['1']) {
                        $active = 'active';
                        $completed = 'completed';
                    }
                    ?>
                    <div class="stage col-md-4 col-sm-4 col-xs-12 <?php echo $completed; ?>">
                        <div class="stage-header head-icon <?php echo $active; ?>"><?php echo $i; ?></div>
                        <div class="stage-content"><h3 class="stage-title <?php echo $active; ?>">Step-<?php echo $i; ?></h3></div>
                    </div>
                <?php } ?>



            </div>
            <?php if (isset($_GET['msg'])) { ?>
                <div class="row">
                    <div class="col-sm-12 m-t-lg">
                        <div class="message-label">
                            <label id='msg'>
                                <?php echo $_GET['msg']; ?>
                            </label>
                        </div>
                    </div>
                </div>
            <?php } ?>
            <?php $action = isset($_GET['action']) ? $_GET['action'] : ''; ?>
            <input type='hidden' id='did' value="<?php echo $action; ?>">
            <?php $t = isset($_GET['t']) ? $_GET['t'] : 'n'; ?>
            <input type='hidden' id='tid' value="<?php echo $t; ?>">
            <?php
            error_reporting(E_ALL & ~E_NOTICE);
//error_reporting(0);
            $app_setting = 'store_details.json';
            $arr = array();
            if (file_exists($app_setting)) {
                @chmod($app_setting, 0777);
                $app_str = @file_get_contents($app_setting);
                $json_app = json_decode($app_str, true);
                $arr = $json_app['folder_name'];
            }
            $res = 0;
// $fPath = str_ireplace('xetool', '', getcwd());
            foreach ($arr as $v) {
                if (file_exists('../../' . $v . '_xeconfig.xml')) {
                    $res += 1;
                }
            }
            ?>
            <div id="myModal" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-sm m-t-270">
                    <div class="modal-content">
                        <div class="modal-header b-none">
                            <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                            <h4 id="myModalLabel" class="modal-title"></h4>
                        </div>
                        <div class="modal-body" id="msgdiv"></div>
                        <div class="modal-footer b-none">
                            <button data-dismiss="modal" class="btn btn-default" type="button">Okay</button>
                        </div>
                    </div>
                </div>
            </div>