<?php
require_once 'function.php';
$path = 'wizard/images/install_image/';
$step = array(3, 1);

checkStepStatus(array('', 'checkWriteXMLToApp'));
checkCurrentStep('checkStartInstall', 1);

if (isset($_POST['next_install'])) {
    $errorMsg = '';
    $serverStatus = checkServerSettings();
    if ($serverStatus == 1 || 2) {
        // process step-1 services //
        $startInstall = startInstall();
        if ($startInstall['0'] == 1) {
            $checkInstall = checkStartInstall();
            if ($checkInstall['0'] == 1) {
                header("location:setup-db.php");
                exit;
            } else {
                $errorStatus = 0;
                echo $errorMsg = $checkInstall['1'];
            }
        } else {
            $errorStatus = 0;
            $errorMsg = $startInstall['1'];
        }
    }
}

require_once 'header.php';
?>
<form name='serverChecking' id='serverChecking' class="serverChecking" method="post">
    <div class="content-box">
        <div class="row"><div class="col-sm-12"><h3>Environment Compatibility</h3></div></div>
        <div class="error"><?php
            if (isset($errorMsg)) {
                echo $errorStatus . "The following Errors occured:<br/>" . nl2br($errorMsg);
            }
            ?> </div>
        <div class="row">
            <div class="col-sm-12">
                <table class="table table-striped table-bordered info-border">
                    <tr>
                        <th class="b-r-none" width="10"></th>
                        <th class="b-l-none">Specifications</th>
                        <th>Recommended</th>
                        <th>Current Settings</th>
                    </tr>
                    <tr>
                        <th class="b-r-none"></th>
                        <th class="b-l-none">PHP Version</th>
                        <td>5.4+</td>
                        <td><?php serverSettings('checkPHPVersion'); ?>
                        </td>
                    </tr>
                    <tr>
                        <th class="b-r-none"></th>
                        <th class="b-l-none">MySQLi</th>
                        <td>Enabled</td>
                        <td><?php serverSettings('checkMysqli'); ?>
                        </td>
                    </tr>
               <!--  <tr>
                    <th class="b-r-none"><i class="fa fa-info-circle pull-right text-warning" data-toggle="tooltip" data-placement="left" title="We reccommend Magento version 1.9.0  onwards to run inkXE product designer."></i> </th>
                    <th class="b-l-none">Magento</th>
                    <td>1.9.0 +</td>
                    <td><?php //serverSettings('checkStoreName');       ?>
                    </td>
                </tr> -->
                    <tr>
                        <th class="b-r-none"></th>
                        <th class="b-l-none">File Permission</th>
                        <td>Allowed To Modify</td>
                        <td><?php serverSettings('checkFilePermission'); ?>
                        </td>
                    </tr>
                    <tr>
                        <th class="b-r-none"><i class="fa fa-info-circle pull-right text-warning" data-toggle="tooltip" data-placement="left" title="It is kind of a bridge (web-service) that communicates between your store and inkXE designer tool."></i></th>
                        <th class="b-l-none">SOAP</th>
                        <td>Enabled</td>
                        <td><?php serverSettings('checkSoap'); ?>
                        </td>
                    </tr>
                    <tr>
                        <th class="b-r-none"></th>
                        <th class="b-l-none">SOAP Client</th>
                        <td>Present</td>
                        <td><?php serverSettings('checkSoapClient'); ?>
                        </td>
                    </tr>
                    <tr>
                        <th class="b-r-none"></th>
                        <th class="b-l-none">SOAP Server</th>
                        <td>Present</td>
                        <td><?php serverSettings('checkSoapServer'); ?>
                        </td>
                    </tr>
                    <tr>
                        <th class="b-r-none"></th>
                        <th class="b-l-none">PDO</th>
                        <td>Enabled</td>
                        <td><?php serverSettings('checkPDO'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"></th>
                        <th class="b-l-none">Mbstring</th>
                        <td>Enabled</td>
                        <td><?php serverSettings('checkMbstring'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"></th>
                        <th class="b-l-none">Iconv</th>
                        <td>Enabled</td>
                        <td><?php serverSettings('checkIconv'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"></th>
                        <th class="b-l-none">Hash</th>
                        <td>Enabled</td>
                        <td><?php serverSettings('checkHash'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"></th>
                        <th class="b-l-none">GD Library</th>
                        <td>Enabled</td>
                        <td><?php serverSettings('checkGDLibrary'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"><i class="fa fa-info-circle pull-right text-warning" data-toggle="tooltip" data-placement="left" title="If NOT enabled, it might create problems while fetching data from your ecommerce stores. Few functions of inkXE might not work as described."></i></th>
                        <th class="b-l-none">Connection</th>
                        <td>Keep-Alive</td>
                        <td><?php serverSettings('checkKeepAlive'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"><i class="fa fa-info-circle pull-right text-warning" data-toggle="tooltip" data-placement="left" title="The maximum memory (bytes) allocated to any script. To upload large files, memory_limit should be larger than post_max_size and post_max_size must be larger than upload_max_filesize."></i></th>
                        <th class="b-l-none">Memory Limit</th>
                        <td>256M</td>
                        <td><?php serverSettings('checkMemoryLimit'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"><i class="fa fa-info-circle pull-right text-warning" data-toggle="tooltip" data-placement="left" title="Sets max size of post data allowed.This must be larger than upload_max_filesize."></i></th>
                        <th class="b-l-none">Post Max Size</th>
                        <td>60M</td>
                        <td><?php serverSettings('checkPostMaxSize'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"><i class="fa fa-info-circle pull-right text-warning" data-toggle="tooltip" data-placement="left" title="The maximum size of an uploaded file measured in bytes.This must be smaller than post_max_size."></i></th>
                        <th class="b-l-none">Upload Max Filesize</th>
                        <td>10M</td>
                        <td><?php serverSettings('checkUploadMaxFilesize'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"><i class="fa fa-info-circle pull-right text-warning" data-toggle="tooltip" data-placement="left" title="The maximum time in seconds a script is allowed to run before it is terminated by the parser."></i></th>
                        <th class="b-l-none">Max Execution Time (In Seconds)</th>
                        <td>500</td>
                        <td><?php serverSettings('checkMaxExecutionTime'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"><i class="fa fa-info-circle pull-right text-warning" data-toggle="tooltip" data-placement="left" title="The maximum time in seconds a script is allowed to run before it is terminated by the parser."></i></th>
                        <th class="b-l-none">Max Input Time (In Seconds)</th>
                        <td>60</td>
                        <td><?php serverSettings('checkMaxInputTime'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"><i class="fa fa-info-circle pull-right text-warning" data-toggle="tooltip" data-placement="left" title="The maximum number of files allowed to be uploaded simultaneously."></i></th>
                        <th class="b-l-none">Default Socket Timeout (In Seconds)</th>
                        <td>60</td>
                        <td><?php serverSettings('checkDefaultSockettimeOut'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"><i class="fa fa-info-circle pull-right text-warning" data-toggle="tooltip" data-placement="left" title="If FALSE, it might create problems while upgrading inkXE tool."></i></th>
                        <th class="b-l-none">ZIP Extension</th>
                        <td>True</td>
                        <td><?php serverSettings('checkZipExtension'); ?></td>
                    </tr>
                    <tr>
                        <th class="b-r-none"><i class="fa fa-info-circle pull-right text-warning" data-toggle="tooltip" data-placement="left" title="If DISABLED, it might create problems while upgrading inkXE tool."></i></th>
                        <th class="b-l-none">CURL Extension</th>
                        <td>Enabled</td>
                        <td><?php serverSettings('checkCurlStatus'); ?></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="row" id='compatibility_msg_div'>
            <?php
            $serverSettingStatus = checkServerSettings();
            if ($serverSettingStatus == 1) {
                ?>
                <div class="col-sm-12">
                    <input type="submit" name="next_install" class="btn btn-lg btn-aqua m-w-150 pull-right" onClick="loadLoader();" value="Next">

                    <span class="text-right pull-right m-t-sm m-r-md text_process" style="display:none;">This process will take some time. Please don't close the window until you see the next step of the installation.</span>
                </div>
            <?php } else if ($serverSettingStatus == 0) { ?>
                <div class="row" id='compatibility_msg_div'>
                    <div class="col-sm-12">
                        <div class="alert alert-danger" role="alert">
                            Your hosting server does not meet the minimum requirements to run inkXE. Some features of inkXE might not work as described. Please <a href="https://inkxe.com/support/kb/faq.php?id=211" target="_blank">click here</a> for more information.
                        </div>
                    </div>
                </div>

                <div class="col-sm-12" id="allow">
                    <input type="submit" name="next_install" style='padding:10px 8px;' class="btn btn-lg btn-aqua m-w-200 pull-right" onClick="loadLoader();" value="Proceed Anyway">
                    <span class="text-right pull-right m-t-sm m-r-md text_process" style="display:none;">This process will take some time. Please don't close the window until you see the next step of the installation.</span>
                </div>
            <?php } else if ($serverSettingStatus == 2) { ?>
                <div class="row" id='compatibility_msg_div'>
                    <div class="col-sm-12">
                        <div class="alert alert-danger" role="alert">
                            Your hosting server does not meet the minimum requirements to run inkXE. Some features of inkXE might not work as described. Please <a href="https://inkxe.com/support/kb/faq.php?id=211" target="_blank">click here</a> for more information.
                            <div class="col-sm-12" style="margin-top:25px;">
                                <input type="submit" class="btn btn-lg btn-aqua m-w-150 pull-right" value="Re-Check">
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</div>
</div>
</form>
<?php require_once 'footer.php'; ?>
</body>
</html>
