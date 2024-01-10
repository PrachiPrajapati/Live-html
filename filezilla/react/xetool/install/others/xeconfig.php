<?php
$file_folder_name = getDomain();
$xeconfig = '../'.$file_folder_name . '_xeconfig.xml';
if (file_exists($xeconfig)) {
    $dom = new DomDocument();
    $dom->load($xeconfig);
    define('APPNAME', $dom->getElementsByTagName('appname')->item(0)->nodeValue);
    define('XEPATH', $dom->getElementsByTagName('base_url')->item(0)->nodeValue);
    define('ADMIN_URL' ,$dom->getElementsByTagName('admin_url')->item(0)->nodeValue);
    define('APIUSER', $dom->getElementsByTagName('apiuser')->item(0)->nodeValue);
    define('APIPASS', $dom->getElementsByTagName('apipass')->item(0)->nodeValue);
    define('APIURL', XEPATH . 'index.php/api/soap/?wsdl');
    define('SERVER', $dom->getElementsByTagName('host')->item(0)->nodeValue);
    define('USER', $dom->getElementsByTagName('dbuser')->item(0)->nodeValue);
    define('PASSWORD', $dom->getElementsByTagName('dbpass')->item(0)->nodeValue);
    define('DBNAME', $dom->getElementsByTagName('dbname')->item(0)->nodeValue);
    define('FOLDER_NAME', $file_folder_name);
    define('ASSET_PATH', '/assets/' . FOLDER_NAME);
    define('TABLE_PREFIX', '');
    define('STORE_TYPE', 'others');
    define('STORE_VERSION', '1.X');
    define('COMPANY_NAME', 'inkXE');
    define('SENDER_EMAIL', 'enquiry@inkxe.com');
    define('SUBJECT', 'Request a Quote to design');
}

function getDomain()
{
    $requestUrl = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
    $protocol = strchr($requestUrl, '//', true);
    $xePath = str_replace($protocol . '//', '', $requestUrl);
    $xePath = strchr($xePath, '/', true);
    $xePath = str_replace(array('www.', '.'), array('', '_'), $xePath);
    return $xePath;
}
