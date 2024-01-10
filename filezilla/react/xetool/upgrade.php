<?php
	error_reporting(1);
	if (!empty($_GET) && $_GET['currentVersion'] && $_GET['newVersion']) {
		$path = '../../';
		require_once $path . 'xeconfig.php';
		mysqli_report(MYSQLI_REPORT_STRICT);
		$conn = new mysqli(SERVER, USER, PASSWORD, DBNAME);
		
		if ($conn->connect_error) {
			$msg = "Connection failed. Please provide proper database connection info." . $conn->connect_error;
			xeLog("\n" . date("Y-m-d H:i:s") . $msg . "\n");
		} else {
			if($conn->select_db(DBNAME)){
				$storeExtPath = 'install/';
				$currentVersion = $_GET['currentVersion'];
				$newVersion = $_GET['newVersion'];
				$escapeLists = array(
									'dir' => array('designer-assets', 'xelog', 'dev_inkxe_io'), 
									'file' => array('app333.js', 'adminsettings.js', 'style.css', 'xelog.log')
								);
				//updateThemeColor();
				updateLocalSettingsJS();
				updateLanguageJSON();
				$storePath = updateCodeBase();
				updateDatabase($storePath);
			}
		}
	}
	
	
	/**
	* Update theme
	*/
	function updateThemeColor() {
		global $conn, $path;
		$file = 'designer-tool/designer-app/allless.css';
		if (file_exists($file)) {
			$sql = "SELECT theme_name, brand_primary, border_color, panel_color, stage_color, text_color FROM " . TABLE_PREFIX . "theme WHERE is_default='1' LIMIT 1";
			$exe = $conn->query($sql);
			$newRec = $exe->fetch_assoc();
			
			if (!empty($newRec) && $newRec['theme_name'] != 'Default') {
				unset($newRec['theme_name']);
				$sql = "SELECT brand_primary, border_color, panel_color, stage_color, text_color FROM " . TABLE_PREFIX . "theme WHERE theme_name = 'Default' LIMIT 1";
				$exe = $conn->query($sql);
				$oldRec = $exe->fetch_assoc();
				
				$cssContent = @file_get_contents($file);
				$updatedContent = str_ireplace($oldRec[0], $newRec, $cssContent);
				@file_put_contents($file, $updatedContent);
			}
			@copy($file, $path . 'designer-tool/designer-app/' . FOLDER_NAME . '/allless.css');
		}
	}
	
	
	/**
	* Update Localsettings.js
	*/
	function updateLocalSettingsJS() {
		global $path;
		$newFile = 'designer-tool/localsettings.js';		
		$clientFile = $path . $newFile;
			
		if(file_exists($newFile) && file_exists($clientFile)) {			
			$newData = file_get_contents($newFile);
			$pos = strpos($newData, '"');
			$newData = substr($newData, $pos);
			$newData = '{' . str_replace(';', '', $newData);
			$newData = json_decode($newData, true);			
			$newDataArr = ($newData) ? $newData : array();
			
			$clientDataStr = file_get_contents($clientFile);
			$pos = strpos($clientDataStr, '"');
			$clientDataStr = substr($clientDataStr, $pos);
			$clientDataStr = '{' . str_replace(';', '', $clientDataStr);
			$clientData = json_decode($clientDataStr, true);
			$clientDataArr = ($clientData) ? $clientData : array();
			
			$newLables = array_diff_key($newDataArr, $clientDataArr);
			$updatedData = json_encode(array_merge($clientDataArr, $newLables));			
			$updatedData = 'var RIAXEAPP = {};RIAXEAPP.localSettings = ' . $updatedData . ';';
			@file_put_contents($newFile, $updatedData);
		}
	}
	
	
	/**
	* Update Language Json
	*/
	function updateLanguageJSON() {
		global $conn;
		$app_language = 'designer-tool/designer-app/languages';			
		$admin_language = 'designer-tool/designer-admin/languages';			
		
		if (!file_exists($app_language) && !file_exists($admin_language)) {return;}
		$sql = "SELECT value FROM " . TABLE_PREFIX . "app_language WHERE status='1' LIMIT 1";		
		$exe = $conn->query($sql);
		$result = $exe->fetch_assoc();		
		$language = $result['value'];
		
		$admin_language_file = $admin_language . '/locale-' . $language . '.json'; 		
		if (file_exists($admin_language_file)) {
			updateJSON($admin_language_file);
		}
		
		$app_language_file = $app_language . '/locale-' . $language . '.json';
		if (file_exists($app_language_file)) {
			updateJSON($app_language_file);
		}
	}
	
	
	/**
    * Helper function to updateLanguageJson()
	* @param string $newFile with path, which has new updated data
	*/
	function updateJSON($newFile) {
		global $path;
		$newData = file_get_contents($newFile);
		$newData = json_decode($newData, true);		
		
		$clientFile = $path . $newFile;
		$clientData = file_get_contents($clientFile);
		$clientData = json_decode($clientData, true);
		
		$newLables = array_diff_key($newData, $clientData);
		$newLablesArr = array_merge($clientData, $newLables);
		$jsonDataModified = json_encode($newLablesArr, JSON_UNESCAPED_UNICODE);
		@file_put_contents($newFile, $jsonDataModified);
	}
	

	/**
	* Copy and paste corresponding directories/files
	*/
	function updateCodeBase() {
		global $escapeLists, $path, $storeExtPath;
		switch(STORE_TYPE) {
			case 'magento' :
				if(STORE_VERSION == '1.X') {
					$storeExtPath .= 'magento';
					$storePath = $storeExtPath . '/' . STORE_TYPE;
					if (file_exists($storeExtPath) && file_exists($storePath)) {
						if (file_exists($storePath . '/app')) recurseCopy($storePath . '/app', $path . 'app');
						if (file_exists($storePath . '/js')) recurseCopy($storePath . '/js', $path . 'js');
						if (file_exists($storePath . '/skin')) recurseCopy($storePath . '/skin', $path . 'skin');
					}
				}elseif(STORE_VERSION == '2.X') {
					$storeExtPath .= 'magento2';
					$storePath = $storeExtPath . '/' . STORE_TYPE;
					if (file_exists($storeExtPath) && file_exists($storePath)) {
						if (file_exists($storePath . '/app')) recurseCopy($storePath . '/app', $path . 'app');
					}
				}
			break;	
			case 'shopify' :
				$storeExtPath .= 'shopify';
				$storePath = $storeExtPath . '/' . STORE_TYPE;
				if (file_exists($storeExtPath) && file_exists($storePath)) {
					if (file_exists($storePath . '/lib')) recurseCopy($storePath . '/lib', $path . 'shopify/lib');
					if (file_exists($storePath . '/theme')) recurseCopy($storePath . '/theme', $path . 'shopify/theme');
				}
			break;	
			case 'prestashop' :
				if(STORE_VERSION == '1.X') {
					$storeExtPath .= 'prestashop';
					$storePath = $storeExtPath . '/' . STORE_TYPE;
					if (file_exists($storeExtPath) && file_exists($storePath)) {
						recurseCopy($storePath . '/PrestaShop-webservice-lib-master', $path . 'PrestaShop-webservice-lib-master');
						recurseCopy($storePath . '/modules', $path . 'modules');
						recurseCopy($storePath . '/themes', $path . 'themes');
					}
				}elseif(STORE_VERSION == '2.X') {
					$storeExtPath .= 'prestashop17';
					$storePath = $storeExtPath . '/' . STORE_TYPE;
					if (file_exists($storeExtPath) && file_exists($storePath)) {
						recurseCopy($storePath . '/PrestaShop-webservice-lib-master', $path . 'PrestaShop-webservice-lib-master');
						recurseCopy($storePath . '/modules', $path . 'modules');
						recurseCopy($storePath . '/themes', $path . 'themes');
					}
				}
			break;	
			case 'opencart' :
				$storePath = $storeExtPath . '/' . STORE_TYPE;
				if (file_exists($storePath . '/xml')) {
					require_once $path . 'config.php';
					$opencartPath = (stripos($_SERVER['SERVER_PROTOCOL'], 'https') === true) ? HTTPS_SERVER : HTTP_SERVER;
					$url = $opencartPath . 'vcheck.php';
					$ch = curl_init();      
					curl_setopt($ch, CURLOPT_URL, $url);
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

					$version = curl_exec($ch);    
					curl_close($ch);
					if($version >= '2.0.0.0' && $version < '2.1.0.1')
						$ver = '2.0.2';
					elseif($version >= '2.1.0.1' && $version < '2.2.0.0')
						$ver = '2.1.0';
					else
						$ver = '2.2.0';
					@copy($storePath . '/xml/' . $ver . '/Riaxe_Product_Designer.xml', $path . 'vqmod/xml/Riaxe_Product_Designer.xml');
					if (file_exists($storePath . '/feed')) {
						if($version > '2.2.0.0')
							recurseCopy($storePath."/feed/2.3.0", $path."catalog/controller/extension/feed");  
						else
							recurseCopy($storePath."/feed/2.2.0", $path."catalog/controller/feed");
					}  
				}
			break;	
			case 'woocommerce' :
				$storePath = $storeExtPath . '/' . STORE_TYPE;
				if (file_exists($storePath . '/plugins')) {
					recurseCopy($storePath . '/plugins', $path . 'wp-content/plugins');
				}
			break;	
		}
		if (file_exists('frontendlc.php')) @copy('frontendlc.php', $path . 'frontendlc.php');
		if (file_exists('designer-tool')) recurseCopy('designer-tool', $path . 'designer-tool');
		
		if (STORE_TYPE == 'prestashop') {
			if (file_exists($storeExtPath . '/designer-tool/designer-api')) {
				recurseCopy($storeExtPath . '/designer-tool/designer-api', $path . 'designer-tool/designer-api');
			}
		}
		return $storeExtPath;
	}
	
	
	/**
	* Recursively copy all the files & folders
	* @param string $src source directory/file
	* @param string $dst destination directory/file
	*/
	function recurseCopy($src, $dst) {
		global $escapeLists;
		$dir = @opendir($src);
		@mkdir($dst, 0777, true);
		@chmod($dst, 0777);
		while (false !== ($file = readdir($dir))) { 
			if (($file != '.') && ($file != '..') && !in_array($file, $escapeLists['dir'])) { 
				if ( is_dir($src . '/' . $file)) { 
					recurseCopy($src . '/' . $file, $dst . '/' . $file);
				} else { 
					if (!in_array($file, $escapeLists['file'])) {
						@copy($src . '/' . $file, $dst . '/' . $file);
					}
				}
			} 
		} 
		closedir($dir); 
	}
	
	
	/**
	* Update database script
	*/
	function updateDatabase($storePath) {
		global $conn, $newVersion, $currentVersion;
		$schemaVersion = "SELECT schema_version FROM " . TABLE_PREFIX . "version_manage WHERE current_version = '" . $currentVersion . "' LIMIT 1";
		$handler = $conn->query($schemaVersion);
		$row = $handler->fetch_assoc();
			
		$updatedSchemaversion = 0;
		if ($row['schema_version']) {
			$updatedSchemaversion = $row['schema_version'];
			$sqlFilespath = $storePath . '/sql/schema/';
			
			if (is_dir($sqlFilespath) === true) {
				$files = array_diff(scandir($sqlFilespath), array('.', '..'));
				foreach ($files as $file) {
					$arr = explode('-', $file);
					$existingSchemaVersion = intval($arr[0], 10);
					if ($existingSchemaVersion > $row['schema_version']) {
						runSqlFile($sqlFilespath . $file, $conn);
						$updatedSchemaversion = $existingSchemaVersion;
					}
				}
			}
			$sql = "INSERT INTO " . TABLE_PREFIX . "version_manage (current_version, schema_version, updated_on, version_description) VALUES('" . $newVersion . "', '" . $updatedSchemaversion . "', CURDATE(), '')";
			$status = $conn->query($sql);
		} else {
			xeLog("\n" . date("Y-m-d H:i:s") . ': Database has not updated.' . "\n");
		}
	}
	

	/**
	* Execute the basic script required for our designer tool
	* @Param string $fileName with path
	* @param string $conn db connection object
	*/
	function runSqlFile($fileName, $conn) {
		$commands = @file_get_contents($fileName);
		$lines = explode("\n", $commands);
		$commands = '';
		$failedSql = '';
		
		foreach ($lines as $line) {
			$line = trim($line);
			if ($line && !startsWith($line, '--')) {
				$commands .= $line . "\n";
			}
		}
		
		$commands = explode(";", $commands);
		foreach ($commands as $command) {
			if (@trim($command)) {
				$executeStatus = $conn->query($command);
				if ($executeStatus == false) {
					$failedSql .= $command;
				}
			}
		}
		if (strlen($failedSql)) xeLog("\n" . 'Below sql execution failed from the file : ' . $fileName . ':'. "\n" . $failedSql . "\n");
	}
	

	/**
	* This is a helper function to the above function
	* @Param string $subject string to search in.
	* @param string $str to be searched
	*/
	function startsWith($subject, $str) {
		$length = strlen($str);
		return (substr($subject, 0, $length) === $str);
	}
	

	/**
	* To log errors during installation
	* @Param string $text(what to log)
	* @param string $append(whether append or replace)
	* @param string $fileName(where to log)
	*/
	function xeLog($text, $append = true, $fileName = '') {
		global $path;
		$file = $path . 'xetool_log.log'; 
		if ($fileName) $file = $fileName;
		if ($append) @file_put_contents($file, $text.PHP_EOL, FILE_APPEND | LOCK_EX);
		else @file_put_contents($file, $text);
	}