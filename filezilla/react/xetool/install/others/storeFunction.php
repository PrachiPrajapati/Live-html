<?php

require_once 'function.php';
require_once 'storeFunction.php';

function getXeConfigParam() {
    $file = '../../xeconfig.xml';
    if (file_exists($file)) {
        $dom = new DomDocument();
        $dom->load($file);
        $array = array();
        $array['APPNAME'] = $dom->getElementsByTagName('appname')->item(0)->nodeValue;
        $array['XEPATH'] = $dom->getElementsByTagName('base_url')->item(0)->nodeValue;
        $array['SERVER'] = $dom->getElementsByTagName('host')->item(0)->nodeValue;
        $array['USER'] = $dom->getElementsByTagName('dbuser')->item(0)->nodeValue;
        $array['PASSWORD'] = $dom->getElementsByTagName('dbpass')->item(0)->nodeValue;
        $array['DBNAME'] = $dom->getElementsByTagName('dbname')->item(0)->nodeValue;
        $array['APIUSER'] = $dom->getElementsByTagName('apiuser')->item(0)->nodeValue;
        $array['APIPASS'] = $dom->getElementsByTagName('apipass')->item(0)->nodeValue;
        $array['FOLDER_NAME'] = $file_folder_name;
        $array['DOC_ROOT'] = $base_path;
        $array['ASSET_PATH'] = '/assets/' . $file_folder_name;
        $array['TABLE_PREFIX'] = '';
    }
    return $array;
}

function checkStepStatus($methods, $lastStep = false) {
    if (IGNORESTEP == false) {
        $kounter = 1;
        $stepCount = count($methods);

        foreach ($methods as $method) {
            if (function_exists($method)) {
                $status = $method();
                if (is_array($status)) {
                    $status = $status['0'];
                }
                if ($status == 0) {
                    $redirectStep = $kounter;
                    redirctToStep($redirectStep);
                    exit;
                }
            } else {
                return false;
            }

            if (($kounter == $stepCount) && $lastStep == false) {
                header('location:finish.php');
                exit;
            }
            $kounter++;
        }
    }
}

function checkCurrentStep($method, $currentStep) {
    if (IGNORESTEP == false) {
        if (function_exists($method)) {
            $status = $method();
            if (is_array($status)) {
                $status = $status['0'];
            }

            if ($status == 1) {
                redirctToStep($currentStep + 1);
                exit;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

function redirctToStep($step) {
    $redirectToPath = "";
    switch ($step) {
        case (1):
            $redirectToPath = "index.php";
            break;
        case (2):
            $redirectToPath = "setup-db.php";
            break;
        default:
            $redirectToPath = "finish.php";
    }
    header('location:' . $redirectToPath);
    exit;
}

function checkIntegrationStatus() {
    $status = 1;
    $errorMsg = '';
    $sourceF = '../../xeconfig.xml';
    $dom = new DomDocument();
    $dom->load($sourceF) or die("xeconfig.xml either doesn't exists or malfunctioned");
    if ($dom->getElementsByTagName('apiuser')->item(0)->nodeValue == "") {
        $errorMsg = '- Private app\'s details not written properly in xml.';
        $status = 0;
    }
    return array($status, $errorMsg);
}

function writeAttributeXml($xcolor, $xsize, $xset) {
    $dom = new DomDocument();
    $dom->load('../../xeconfig.xml') or die("error");
    $dom->getElementsByTagName('xe_color')->item(0)->nodeValue = $xcolor;
    $dom->getElementsByTagName('xe_size')->item(0)->nodeValue = $xsize;
    $dom->getElementsByTagName('inkXE')->item(0)->nodeValue = $xset;
    $dom->save('../../xeconfig.xml');
}
