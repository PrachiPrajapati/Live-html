<?php
require_once 'function.php';
$step = array(3, 2);
checkStepStatus(array('checkStartInstall', ''));
checkCurrentStep('checkWriteXMLToApp', 2);

require_once 'header.php';
if (!empty($_POST) && !empty($_POST['db']) && !empty($_POST['user']) && !empty($_POST['security'])) {
    $postData = $_POST;
    $errorMsg = '';
    $errorStatus = 1;
    extract($_POST);

    if (!filter_var($user['uname'], FILTER_VALIDATE_EMAIL)) {
        $errorMsg .= "- Please enter a valid email for admin login id. \n";
    } else {
        $getXeDomain = getXePath();
        $folder_name = $getXeDomain[1];
        $domainInfo = $getXeDomain[1];
        $executeSQL = executeSQL($postData, $domainInfo, $catId);
        if ($executeSQL['0'] == 0) {
            $errorMsg .= $executeSQL['1'];
            $errorStatus = 0;
        } else {
            $updateXML = updateDBAccessToXML($postData, $folder_name);
            if ($updateXML['0'] == 0) {
                echo $errorMsg .= $updateXML['1'];
                $errorStatus = 0;
            }
        }
        $renameFolder = renameDesignerAdminFolder($postData);
        if ($renameFolder['0'] == 0) {
            echo $errorMsg .= $renameFolder['1'];
            $errorStatus = 0;
        }
        if ($errorStatus == 1) {
            header("location:finish.php");
            exit;
        }
    }
}
?>
<div class="content-box">
    <div class="row">
        <div class="col-sm-12"><h3>Database Details For inkXE</h3></div>
        <div class="col-sm-12">
            <?php if (isset($errorMsg)) { ?>
                <div class="error-msg">
                    <?php echo "The following Errors occured:<br/>" . nl2br($errorMsg); ?>
                </div>
            <?php } ?>
        </div>
        <form class="setdb_form" onSubmit="return validateDbInfo();" action="" method="post">
            <div class="col-sm-12 m-t-sm">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group form-group-default required">
                            <label>Database Host Name</label>
                            <input type="text" name="db[host]" autocomplete="off" id="host" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group form-group-default required">
                            <label>Database Name</label>
                            <input type="text" name="db[dbname]" autocomplete="off" id="dbname" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group form-group-default required">
                            <label>Database Username</label>
                            <input type="text" autocomplete="off" name="db[uid]" id="uid" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group form-group-default">
                            <label>Database Password</label>
                            <input type="password" autocomplete="off" name="db[pwd]" id="pwd" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 m-t-lg"><h3>Create inkXE Admin</h3></div>
            <div class="col-sm-12 m-t-sm">
                <div class="col-sm-13">
                    <span style="font-family: 'Montserrat';font-size: 11px;text-transform: uppercase;font-weight: 600;">
                        Designer Admin Path
                    </span>
                    <div class="form-group form-group-md input-group" style="height: 50p;">
                        <span class="input-group-addon" style="border: none;">
                            <?php
                            $url = getBaseUrl();
                            echo $url[1] . 'xetool/';
                            ?>
                        </span>
                        <input type="text" autocomplete="off" onkeypress="return IsAlphaNumeric(event);" placeholder="designer-admin" value="admin" class="form-control" name="user[upath]" id="upath" style="height: 53px;">
                        <span class="input-group-addon" style="border: none;">
                            /index.html
                        </span>
                    </div>
                    <span id="error" style="color: Red; display: none">* Special Characters not allowed</span>
                </div>
                <div class="form-group form-group-default required">
                    <label>inkXE Login Id (Email ID)</label>
                    <input type="text" autocomplete="off" name="user[uname]" id="uname" class="form-control">
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group form-group-default required">
                            <label>inkXE Login Password</label>
                            <input type="password" autocomplete="off" name="user[upwd]" id="upwd" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group form-group-default required">
                            <label>InkXE Confirm Password</label>
                            <input type="password" autocomplete="off" name="user[cupwd]" id="cupwd" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group form-group-default required">
                            <label>Security Question for Forget Password</label>
                            <input type="text" autocomplete="off" name="security[question]" id="que" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group form-group-default required">
                            <label>Security Answer</label>
                            <input type="text" autocomplete="off" name="security[answer]" id="ans" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 text-right">
                        <input type="submit" value="Submit" class="btn btn-lg btn-aqua m-w-150" />
                    </div>
                </div>
            </div>
            <div class="loader" id="myLoader" style="display:none;"><img class="loader-img" title="Loading" src="wizard/images/loader.gif" /></div>

        </form>
    </div>
</div>
</div>
<?php require_once 'footer.php'; ?>
</body>
</html>