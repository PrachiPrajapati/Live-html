<?php
require_once 'function.php';
$step = array(3, 3);
require_once 'header.php';
$adminPath = checkAdminPath();
$upath = '../../index.html?pid=2&pt=1';
$apath = '../../admin/index.html';
$apath = str_replace('admin', $adminPath, $apath);
checkStepStatus(array('checkStartInstall', 'checkWriteXMLToApp'), $lastStep = true);
?>
<div class="content-box">
    <div class="row">
        <div class="col-sm-12">
            <h3>Congratulations !! inkXE Designer Tool  is successfully installed in your store. <br /><br />

                Open <a target="_blank" href="<?php echo $upath ?>" class="text-u-l">inkXE designer Tool</a>.<br>
            </h3>
        </div>
        <div class="col-sm-12">
            <h3> <a target="_blank" href="<?php echo $apath ?>" class="text-u-l">Login to inkXE admin</a>. </h3>
        </div>
        <div class="col-sm-12">
            <h3> Thank you!! </h3>
        </div>
    </div>
</div>
</div>
<?php require_once 'footer.php'; ?>
</body>
</html>
