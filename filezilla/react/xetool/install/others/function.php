<?php

error_reporting(E_ALL & ~E_NOTICE);
define("IGNORESTEP", false);

$queryString = explode('xetool/install/', substr($_SERVER['SCRIPT_NAME'], 1));
$appname = '';
if (isset($queryString['0']) && $queryString['0'] != '') {
    $appname = $queryString['0'];
}
$docAbsPath = $_SERVER['DOCUMENT_ROOT'] . "/" . $appname;
$absPath = 'xetool/install/others/';
$rootAbsPath = $docAbsPath . $absPath;
$redirectPath = 'index.php';

define('ABSPATH', $absPath);
define('DOCABSPATH', $docAbsPath);
define('ROOTABSPATH', $rootAbsPath);
define('REDIRECTPATH', $redirectPath);
define('IMAGEPATH', 'wizard/images/install_image/');
require_once 'storeFunction.php';
/*
  - Name : checkServerSettings
  - Check server settings
  - In this service, it will check all server settings
  - returns the status message and error messages if any
  - checkServerSettings
 */

function checkServerSettings() {
    $array = array('checkPHPVersion', 'checkMysqli', 'checkFilePermission', 'checkSoap', 'checkSoapClient', 'checkSoapServer', 'checkPDO', 'checkMbstring', 'checkIconv', 'checkHash', 'checkGDLibrary', 'checkKeepAlive',
        'checkMemoryLimit', 'checkPostMaxSize', 'checkUploadMaxFilesize', 'checkMaxExecutionTime', 'checkMaxInputTime', 'checkDefaultSockettimeOut', 'checkZipExtension', 'checkCurlStatus');

    $status = 1;
    foreach ($array as $functionName) {
        if (function_exists($functionName)) {
            $result = $functionName(1);

            if ($result['1'] == 2) {
                $status = 0;
                break;
            } else if ($result['1'] == 0) {
                $status = 2;
                break;
            }
        }
    }
    return $status;
}

function serverSettings($functionName) {
    if (function_exists($functionName)) {
        return $result = $functionName(false);
    }
}

function showSettingValues($type, $outPutText, $status) {
    if ($type == false) {
        $img = ($status == 1) ? 'approve.png' : (($status == 2) ? 'Warning.png' : 'dis-approve.png');
        echo $outPutText . '&nbsp;&nbsp;<img src="' . IMAGEPATH . $img . '">';
    } else {
        return array($outPutText, $status);
    }
}

function checkPHPVersion($type = false) {
    $phpversion = phpversion();
    $varr = explode('.', $phpversion);
    if ($varr[0] > 5) {
        $status = 1;
    } else if ($varr[0] == 5) {
        if ($varr[1] == 4 || $varr[1] > 4) {
            $status = 1;
        } else {
            $status = 0;
        }
    } else {
        $status = 0;
    }

    return showSettingValues($type, $phpversion, $status);
}

function checkMysqli($type = false) {
    if (extension_loaded('mysqli')) {
        $isEnabled = "Enabled";
        $status = 1;
    } else {
        $isEnabled = "Disabled";
        $status = 0;
    }
    return showSettingValues($type, $isEnabled, $status);
}

function checkStoreName($type = false) {
    $mversion = getVersion();
    $marr = explode('.', $mversion);
    if ($marr[0] == 1) {
        if ($marr[1] == 9) {
            if ($marr[2] >= 0) {
                $status = 1;
            } else {
                $status = 0;
            }
        } elseif ($marr[1] >= 1) {
            $status = 1;
        } else {
            $status = 1;
        }
    } else {
        $status = 0;
    }
    return showSettingValues($type, $mversion, $status);
}

function checkFilePermission($type = false) {
    $str = 'Check Writable Permission';
    $data = '';
    try {
        $data = file_put_contents(DOCABSPATH . 'test.php', $str);
        if ($data) {
            $isAllowed = "Allowed";
            $status = 1;
        } else {
            $isAllowed = "Dis-Allowed";
            $status = 0;
        }
    } catch (Exception $e) {
        $isAllowed = "Dis-Allowed";
        $status = 0;
    }
    return showSettingValues($type, $isAllowed, $status);
}

function checkSoap($type = false) {
    if (extension_loaded('soap')) {
        $isEnabled = "Enabled";
        $status = 1;
    } else {
        $isEnabled = "Disabled";
        $status = 0;
    }
    return showSettingValues($type, $isEnabled, $status);
}

function checkSoapClient($type = false) {
    if (extension_loaded('soap') && class_exists('SOAPClient')) {
        $isEnabled = "Present";
        $status = 1;
    } else {
        $isEnabled = "Absent";
        $status = 0;
    }
    return showSettingValues($type, $isEnabled, $status);
}

function checkSoapServer($type = false) {
    if (extension_loaded('soap') && class_exists('SOAPServer')) {
        $isEnabled = "Present";
        $status = 1;
    } else {
        $isEnabled = "Absent";
        $status = 0;
    }
    return showSettingValues($type, $isEnabled, $status);
}

function checkPDO($type = false) {
    if (class_exists('PDO')) {
        $isEnabled = 'Enabled';
        $status = 1;
    } else {
        $isEnabled = 'Disabled';
        $status = 0;
    }
    return showSettingValues($type, $isEnabled, $status);
}

function checkMbstring($type = false) {
    if (extension_loaded('mbstring')) {
        $isEnabled = 'Enabled';
        $status = 1;
    } else {
        $isEnabled = 'Disabled';
        $status = 0;
    }
    return showSettingValues($type, $isEnabled, $status);
}

function checkIconv($type = false) {
    if (extension_loaded('iconv')) {
        $isEnabled = 'Enabled';
        $status = 1;
    } else {
        $isEnabled = 'Disabled';
        $status = 0;
    }
    return showSettingValues($type, $isEnabled, $status);
}

function checkHash($type = false) {
    if (extension_loaded('hash')) {
        $isEnabled = 'Enabled';
        $status = 1;
    } else {
        $isEnabled = 'Disabled';
        $status = 0;
    }
    return showSettingValues($type, $isEnabled, $status);
}

function checkGDLibrary($type = false) {
    if (extension_loaded('gd')) {
        $isEnabled = 'Enabled';
        $status = 1;
    } else {
        $isEnabled = 'Disabled';
        $status = 0;
    }
    return showSettingValues($type, $isEnabled, $status);
}

function checkKeepAlive($type = false) {
    $apache_settings = apache_request_headers();
    $conType = $apache_settings['Connection'];
    if ($conType == 'keep-alive' || $conType == 'Keep-Alive') {
        $keepAlive = 'Keep-Alive';
        $status = 1;
    } else {
        $keepAlive = 'Not-Alive';
        $status = 2;
    }
    return showSettingValues($type, $keepAlive, $status);
}

function checkMemoryLimit($type = false) {
    $mlv = ini_get('memory_limit');
    $pmsov = ini_get('post_max_size');
    $pmsv = (int) substr($pmsov, 0, -1);
    $umfov = ini_get('upload_max_filesize');
    $umfv = (int) substr($umfov, 0, -1);
    $mlv = (int) substr($mlv, 0, -1);
    if ($mlv > 255 && $mlv > $pmsv && $pmsv > $umfv) {
        $status = 1;
    } else {
        $status = 2;
    }
    return showSettingValues($type, $mlv, $status);
}

function checkPostMaxSize($type = false) {
    $mlv = ini_get('memory_limit');
    $pmsov = ini_get('post_max_size');
    $pmsv = (int) substr($pmsov, 0, -1);
    $umfov = ini_get('upload_max_filesize');
    $umfv = (int) substr($umfov, 0, -1);
    $mlv = (int) substr($mlv, 0, -1);

    if ($pmsv > 59 && $pmsv > $umfv) {
        $status = 1;
    } else {
        $status = 2;
    }
    return showSettingValues($type, $pmsov, $status);
}

function checkUploadMaxFilesize($type = false) {
    $mlv = ini_get('memory_limit');
    $pmsov = ini_get('post_max_size');
    $pmsv = (int) substr($pmsov, 0, -1);
    $umfov = ini_get('upload_max_filesize');
    $umfv = (int) substr($umfov, 0, -1);
    $mlv = (int) substr($mlv, 0, -1);
    if ($umfv > 9) {
        $status = 1;
    } else {
        $status = 2;
    }
    return showSettingValues($type, $umfov, $status);
}

function checkMaxExecutionTime($type = false) {
    $metValue = ini_get('max_execution_time');
    $metv = (int) $metValue;
    if ($metv < 100) {
        $status = 0;
    } else if (100 <= $metv && $metv < 300) {
        $status = 2;
    } else {
        $status = 1;
    }
    return showSettingValues($type, $metValue, $status);
}

function checkMaxInputTime($type = false) {
    $mitValue = ini_get('max_input_time');
    $mit = (int) $mitValue;
    if ($mit == 60 || $mit > 60) {
        $status = 1;
    } else {
        $status = 2;
    }
    return showSettingValues($type, $mitValue, $status);
}

function checkDefaultSockettimeOut($type = false) {
    $dstoValue = ini_get('default_socket_timeout');
    $dsto = (int) $dstoValue;
    if ($dsto == 60 || $dsto > 60) {
        $status = 1;
    } else {
        $status = 2;
    }
    return showSettingValues($type, $dstoValue, $status);
}

function checkZipExtension($type = false) {
    $zipExt = extension_loaded('zip');
    $zipExtValue = ($zipExt) ? 'True' : 'False';
    $zipExt = (int) $zipExt;
    if ($zipExt) {
        $status = 1;
    } else {
        $status = 0;
    }
    return showSettingValues($type, $zipExtValue, $status);
}

function checkCurlStatus($type = false) {
    if (function_exists('curl_version')) {
        $isEnabled = 'Enabled';
        $status = 1;
    } else {
        $isEnabled = 'Disabled';
        $status = 0;
    }
    return showSettingValues($type, $isEnabled, $status);
}

function getBaseUrl() {
    $path2 = $_SERVER['PHP_SELF'];
    $path = explode('/xetool/', $path2);
    $path = $path['0'];
    $appname = str_ireplace('/xetool/', '', $path);
    $appname = substr($appname, 1);

    $protocol = (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] != 'off') ? 'https' : 'http';
    $hostname = $protocol . '://' . $_SERVER['HTTP_HOST'] . '/';
    $base_url = (strlen($appname)) ? $hostname . $appname . '/' : $hostname;
    return array($appname, $base_url);
}

/*
  - Name : startInstall
  - starts the instalaltion process step-1
  - In this service it will do the following:
  1. write appname and base_url to xml
  2. write to xeconfig.php
  3. replace XEPATH string with beaeURL in localsettings.js
  4. copy files to root of directory
  - return the status message and error messages if any
 */

function startInstall() {

    $status = 1;
    $errorMsg = '';

    /*
      @ Purpose : Disable Cache & Re-index Models
     */
//	disableStoreCache();
    /*
      @ Purpose : App name fetched from the url & config xml is updated in step1
     */
    $dom = new DomDocument();
    $dom->load('../../xeconfig.xml') or die("error");

    $urlDet = getBaseUrl();
    $dom->getElementsByTagName('appname')->item(0)->nodeValue = $urlDet['0'];
    $base_url = $dom->getElementsByTagName('base_url')->item(0)->nodeValue = $urlDet['1'];

    $dom->save('../../xeconfig.xml');

    // check whether appname and base_url successfully write or not //
    if ($dom->getElementsByTagName('base_url')->item(0)->nodeValue == "") {
        $errorMsg .= '- Error in writing "App Name" and "Store URL" to config file. \n';
        $status = 0;
    }
    

    /*
      @ Purpose : Update base url in all the settings in step1
     */
    $local = '../../localsettings.js';
    if (file_exists($local)) {
        @chmod($local, 0777);
        $settingStr = @file_get_contents($local);
        $settingStr = str_replace("XEPATH", $base_url, $settingStr);
        @file_put_contents($local, $settingStr);

        // check if XEPATH properly written or not //
        $settingStrCheckStr = @file_get_contents($local);

        if (strpos($settingStrCheckStr, 'XEPATH') !== false) {
            $errorMsg .= '- Base URL not written properly in localsettings.js \n';
            $status = 0;
        }
    }

    /*
      @ Purpose : Copy all the files provided in the package
      @            and paste to the corresponding directories in step1
     */

    if (!@copy("others/frontendlc.php", DOCABSPATH . "frontendlc.php")) {
        $errorMsg .= '- frontendlc.php file didn\'t copy. \n';
        $status = 0;
    }
    ;

    if (!@copy("store_details.json", DOCABSPATH . "store_details.json")) {
        $errorMsg .= '- Store_detail.json file didn\'t copy \n';
        $status = 0;
    }
    ;
	
	if (file_exists('others/mock-assets')){
		recurse_copy("others/mock-assets", "../../mock-assets");
	}else{
		$errorMsg .= 'Assets are missing. \n';
        $status = 1;
	}
	
    /* //copy all folders and files to others app folder
    recurse_copy(ROOTABSPATH . "others/app", DOCABSPATH . "app");
    recurse_copy(ROOTABSPATH . "others/js/product_designer", DOCABSPATH . "js/product_designer");
    recurse_copy(ROOTABSPATH . "others/skin/frontend/base/default/product_designer", DOCABSPATH . "skin/frontend/base/default/product_designer");
    //check if designer-tool files and folders are copied or not
    $fileArrayOthers = array(
        DOCABSPATH . "app/code/local/Html5design",
        DOCABSPATH . "app/code/local/Html5design/Cedapi/Model/Observer.php",
    );
    foreach ($fileArrayOthers as $fileFolderOthers) {
        if (!file_exists($fileFolderOthers)) {
            $errorMsg .= "- " . $fileFolderOthers . " not found... Failed to copy. \n";
            $status = 0;
        }
    } */
    return array($status, $errorMsg);
}

/*
  - Name : checkStartInstall
  - check the installation process step-1, all process has been completed or not
  - In this service it will check the following:
  1. write app name to xml has been done or not
  2. write to xeconfig.php has been done or not
  3. replace XEPATH string with beaeURL in localsettings.js has been done or not
  4. copy files to root of directory has been done or not
  - return the status message and error messages if any
  - This method will return whether step-1 has been completed or not.
 */

function checkStartInstall() {
    $status = 1;
    $errorMsg = '';

    $dom = new DomDocument();
    $dom->load('../../xeconfig.xml') or die("error");
    $urlDet = getBaseUrl();
    $base_url = $urlDet['1'];

    // check whether appname and base_url successfully write or not //
    if ($dom->getElementsByTagName('base_url')->item(0)->nodeValue == "") {
        $errorMsg .= '- Error in writing "App Name" and "Store URL" to config file. \n';
        $status = 0;
    }

    /*
      @ Purpose : check base URL written properly in localsettings.js or not
     */
    //$local = DOCABSPATH . 'designer-tool/localsettings.js';
    $local = '../../localsettings.js';
    if (file_exists($local)) {
        $settingStrCheckStr = @file_get_contents($local);
        if (strpos($settingStrCheckStr, $base_url) === false) {
            $errorMsg .= '- Base URL not write properly in localsettings.js \n';
            $status = 0;
        }
    } else {
        $errorMsg .= '- localsettings.js file not found \n';
        $status = 0;
    }
	if (!file_exists('../../mock-assets')) {
		$errorMsg .= "Mock assets are not found... Failed to copy. \n";
		$status = 0;
	}

    /* //check if others files and folders are copied or not
    $fileArrayOthers = array(
        DOCABSPATH . "app/code/local/Html5design",
        DOCABSPATH . "app/code/local/Html5design/Cedapi/Model/Observer.php",
    );
    foreach ($fileArrayOthers as $fileFolderOthers) {
        if (!file_exists($fileFolderOthers)) {
            $errorMsg .= "- " . $fileFolderOthers . " not found... Failed to copy. \n";
            $status = 0;
        }
    } */
    return array($status, $errorMsg);
}

/*
  - Name : renameDesignerAdminFolder
  - it will Rename the Designer admin folder
  - Return status success or error
 */

function renameDesignerAdminFolder($postData) {
    extract($postData);
    $errorMsg = '';
    $status = 1;
    $old = DOCABSPATH . "xetool/admin";
    $new = DOCABSPATH . "xetool/" . $user['upath'];
    if (file_exists($new)) {
        unlink($new);
    }
    $result = rename($old, $new);
    if (!$result) {
        $errorMsg .= "Unable to rename xetool admin";
        $status = 0;
    }
    return array($status, $errorMsg);
}

/*
  - Name : checkAdminPath
  - it will return the Designer admin path from XML file
  - Return designer path
 */

function checkAdminPath() {
    $status = 1;
    $xepath = getXePath();
    $sourceF = DOCABSPATH . 'xetool/' . $xepath['1'] . '_xeconfig.xml';
    if (!file_exists($sourceF)) {
        return $status = "File doesn't exists.";
    } else {
        $dom = new DomDocument();
        $dom->load($sourceF) or die("xeconfig.xml either doesn't exists or malfunctioned");
    }
    return $dom->getElementsByTagName('admin_url')->item(0)->nodeValue;
}

/*
  - Name : updateDBAccessToXML
  - it will write DB access to XML
  - copy xml file to app folder
  - Return status success or error
 */

function updateDBAccessToXML($postData, $folder_name) {
    extract($postData);

    $errorMsg = '';
    $status = 1;

    /* if (!file_exists("../../../app")) {
      mkdir('../../../app', 0755, true);
      } */
    $destinationPath = '../../' . $folder_name . '_xeconfig.xml'; // xeconfig xml file

    /*
      @ Purpose : Code to update Database related Info in xeconfig.xml
     */
    $dom = new DomDocument();
    $sourcePath = '../../xeconfig.xml';
    $dom->load($sourcePath) or die("Unable to load xml");
    $dom->getElementsByTagName('host')->item(0)->nodeValue = $db['host'];
    $dom->getElementsByTagName('dbuser')->item(0)->nodeValue = $db['uid'];
    $dom->getElementsByTagName('admin_url')->item(0)->nodeValue = $user['upath'];
    if (isset($db['pwd']) && $db['pwd']) {
        $dom->getElementsByTagName('dbpass')->item(0)->nodeValue = $db['pwd'];
    }

    $dom->getElementsByTagName('dbname')->item(0)->nodeValue = $db['dbname'];
    $dom->save($sourcePath);
    @copy($sourcePath, $destinationPath);

    if (!file_exists($destinationPath)) {
        $errorMsg .= "xml file not written properly to app folder.";
        $status = 0;
    }
    return array($status, $errorMsg);
}

function checkWriteXMLToApp() {
    $status = 1;
    $xepath = getXePath();
    $sourceF = '../../' . $xepath['1'] . '_xeconfig.xml';
    if (!file_exists($sourceF)) {
        $status = 0;
    } else {
        $dom = new DomDocument();
        $dom->load($sourceF) or die("xeconfig.xml either doesn't exists or malfunctioned");
        if ($dom->getElementsByTagName('host')->item(0)->nodeValue == "" || $dom->getElementsByTagName('dbuser')->item(0)->nodeValue == "" || $dom->getElementsByTagName('dbname')->item(0)->nodeValue == "") {
            $status = 0;
        }
    }
    return $status;
}

/*
  - Name : executeSQL
  - it will execute the basic database sql file
  - insert data to domain_store_rel table
  - insert to user table
  - update version manage table
  - Return status success or error
 */

function executeSQL($postData, $domainInfo, $catId) {
    extract($postData);
    $errorMsg = '';
    $status = 1;
    mysqli_report(MYSQLI_REPORT_STRICT);
    $connectionError = 0;

    /*
      @ Purpose : Code to create database connection
     */
    try {
        error_reporting(0);
        if (isset($db['port']) && $db['port'] != '') {
            $conn = new mysqli($db['host'], $db['uid'], $db['pwd'], $db['dbname'], $db['port']);
        } else {
            $conn = new mysqli($db['host'], $db['uid'], $db['pwd']);
        }
    } catch (Exception $e) {
        $error = "- Database Connection failed. Error: " . $e->getMessage() . "\n";
        xe_log("\n" . date("Y-m-d H:i:s") . ': Database Connection failed: ' . $e->getMessage() . "\n");
        $connectionError = 1;
    }

    /*
      @ Purpose : Code to check database connection
     */
    if ($connectionError == 1) {
        $errorMsg .= $error;
        $status = 0;
        xe_log("\n" . date("Y-m-d H:i:s") . ': Error : Database Connection failed: ' . $conn->error . ' : ' . $conn->connect_error . "\n");
    } else {
        if ($conn->select_db($db['dbname'])) {
            /*
              @ Purpose : Code to Import database for designer tool
             */
            $sqlFile = 'sql/basic_database.sql';
            if (file_exists($sqlFile)) {
                $sql = "SELECT COUNT(DISTINCT `table_name`) FROM `information_schema`.`columns` WHERE `table_schema` =" . $db['dbname'];
                $dbInfo = $conn->query($sql);
                if ($dbInfo == 0) {
                    $sqlStatus = run_sql_file($sqlFile, $conn);
                    if ($sqlStatus['0'] == 0) {
                        $errorMsg .= $sqlStatus['1'];
                        $status = 0;
                    } else {
                        /*
                          @ Purpose : Code to update stores and ids in domain_store_rel table
                         */
                        if (strlen($domainInfo)) {
                            $domainStoreSql = "INSERT INTO domain_store_rel(pk_id,domain_name,store_id) VALUES('1','" . $domainInfo . "','1');";
                            $queryStatusDS = $conn->query($domainStoreSql);
                        }
                        if ($queryStatusDS == false) {
                            $errorMsg .= "- Data not inserted to domain_store_rel table. \n";
                            $status = 0;
                        }
                        /*
                          @ Purpose : Code to update user access Info in user table
                         */
                        $sqlUser = "INSERT INTO user(email,password,question,answer,name,userType) VALUES('" . $user['uname'] . "','" . md5($user['upwd']) . "','" . $security['question'] . "','" . $security['answer'] . "','Super Admin','1')";
                        $queryStatusUser = $conn->query($sqlUser);
                        if ($queryStatusUser == false) {
                            $errorMsg .= "- Designer admin account access creation failed. \n";
                            $status = 0;
                        }
                        /*
                          @ Purpose : Code to update product category in print method table
                         */
//                        if ($catId) {
//                            $sql_pc = "INSERT INTO product_category_printmethod_rel(print_method_id,product_category_id,is_enable) VALUES('1','" . $catId . "','1'),('3','" . $catId . "','1')";
//                            $status = $conn->query($sql_pc);
//                        } else {
//                            $errorMsg = '-Product category not created properly in store';
//                            xe_log("\n" . date("Y-m-d H:i:s") . ': ' . $errorMsg . "\n");
//                        }
                        /*
                          @ Purpose : Code to update installation date in version_manage table
                         */
                        $sql_vm = "UPDATE version_manage SET installed_on=curdate()";
                        $queryStatusvm = $conn->query($sql_vm);
                        /*
                          @ Purpose : Code to update store attribute in store_attributes
                         */
                        $dom = new DomDocument();
                        $dom->load('../../xeconfig.xml') or die("error");
                        $xcolor = $dom->getElementsByTagName('xe_color')->item(0)->nodeValue;
                        $xsize = $dom->getElementsByTagName('xe_size')->item(0)->nodeValue;
                        $xset = $dom->getElementsByTagName('inkXE')->item(0)->nodeValue;
                        $sql_store = "INSERT INTO store_attributes (attr_key, attr_value) VALUES ('xe_color','" . $xcolor . "'),('xe_size','" . $xsize . "'),('inkXE','" . $xset . "')";
                        $queryStatusvm = $conn->query($sql_store);
                        $conn->close();
                    }
                }
            } else {
                $errorMsg .= "- SQL file not found to run."; //"Enter an existing database name.";
                $status = 0;
                xe_log("\n" . date("Y-m-d H:i:s") . ': ' . $errorMsg . "\n");
            }
            return array($status, $errorMsg);
        } else {
            $errorMsg .= "Please provide correct database connection info."; //"Enter an existing database name.";
            $status = 0;
            xe_log("\n" . date("Y-m-d H:i:s") . ': Error : Error creating tables: ' . $conn->error . ' : ' . $errorMsg . "\n");
        }
    }
}

/*
  @ Purpose : To run the basic script required for our designer tool
  @ Param : sqlFileName with path, dbConnectionObject
 */

function run_sql_file($filename, $conn) {
    $errorMsg = "";
    $status = 1;
    $errorSql = '';

    $commands = @file_get_contents($filename); //load file
    //delete comments
    $lines = explode("\n", $commands);
    $commands = '';
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line && !startsWith($line, '--')) {
            $commands .= $line . "\n";
        }
    }
    $commands = explode(";", $commands); //convert to array
    //run commands
    $total = $success = 0;
    foreach ($commands as $command) {
        if (trim($command)) {
            $sqlStatus = $conn->query($command);
            if ($sqlStatus == false) {
                $errorSql .= $command . "\n";
            }
        }
    }
    if ($errorSql !== '' && strlen($errorSql) > 0) {
        $errorMsg = "\n" . 'Following SQL queries failed to run:' . "\n" . $errorSql;
        xe_log($errorMsg);
        $status = 0;
    }
    return array($status, $errorMsg);
}

/*
  @ This is a helper function to the above function
 */

function startsWith($haystack, $needle) {
    $length = strlen($needle);
    return (substr($haystack, 0, $length) === $needle);
}

function getXePath() {
    $requestUrl = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
    $protocol = strchr($requestUrl, '//', true);
    $xePathDomain = str_replace($protocol . '//', '', $requestUrl);
    $xePathDomain = strchr($xePathDomain, '/', true);
    $xePath = str_replace(array('www.', '.'), array('', '_'), $xePathDomain);
    return array($xePathDomain, $xePath);
}

/*
  @ Purpose : For those server which doesn't provide 'apache_request_headers' method in their request header.
 */
if (!function_exists('apache_request_headers')) {

    function apache_request_headers() {
        foreach ($_SERVER as $key => $value) {
            if (substr($key, 0, 5) == "HTTP_") {
                $key = str_replace(" ", "-", ucwords(strtolower(str_replace("_", " ", substr($key, 5)))));
                $out[$key] = $value;
            } else {
                $out[$key] = $value;
            }
        }
        return $out;
    }

}
/*
  @ Purpose : Recursively copy all the files & folders
  @ Param : SourceFolder and DestinationFolder with path
 */

function recurse_copy($src, $dst) {
    $dir = opendir($src);
    @mkdir($dst);
    while (false !== ($file = readdir($dir))) {
        if (($file != '.') && ($file != '..')) {
            if (is_dir($src . '/' . $file)) {
                @recurse_copy($src . '/' . $file, $dst . '/' . $file);
            } else {
                @copy($src . '/' . $file, $dst . '/' . $file);
            }
        }
    }
    closedir($dir);
}

/*
  @ Purpose : To log errors during installation
  @ Param : Text(what to log),append(whether append or replace),fileName(where to log)
 */

function xe_log($text, $append = true, $fileName = '') {
    $file = DOCABSPATH . 'xetool_log.log';
    if ($fileName) {
        $file = $fileName;
    }

    // Append the contents to the file to the end of the file and the LOCK_EX flag to prevent anyone else writing to the file at the same time
    if ($append) {
        @file_put_contents($file, $text . PHP_EOL, FILE_APPEND | LOCK_EX);
    } else {
        @file_put_contents($file, $text);
    }
}
