<footer class="ftr-section">
 <div class="container-fluid">
		<div class="row">
			<div class="col-sm-12 p-v-15">
				Copyright <?php echo date("Y"); ?> inkXE. All rights reserved.
			</div>
		</div>
  </div>
</footer>
<script src="wizard/js/jquery-2.1.1.min.js"></script>
<script src="wizard/js/bootstrap.min.js"></script>
<script src="wizard/js/custom.js"></script>
<script type="text/javascript">
    var specialKeys = new Array();
    specialKeys.push(8); //Backspace
    specialKeys.push(9); //Tab
    specialKeys.push(46); //Delete
    specialKeys.push(36); //Home
    specialKeys.push(35); //End
    specialKeys.push(37); //Left
    specialKeys.push(39); //Right
    function IsAlphaNumeric(e) {
        var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
        var ret = (keyCode == 45 || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
        document.getElementById("error").style.display = ret ? "none" : "inline";
        return ret;
    }
</script>
<script>
	jQuery( document ).ready(function() {
		var did = document.getElementById('did').value;
		if(did != 'undefined' && did){
			if(did == 'setdb'){
				 jQuery('#panel0').addClass('in'); jQuery('#panel0').removeClass('collapse');
				// jQuery('.panel-collapse').removeClass('in');
			}
			jQuery(".active").removeClass('active');
			jQuery('#'+did+' div:first').addClass('active');
			jQuery('#'+did+' h3:first').addClass('active');
		}else{
			jQuery('.stage-header head-icon','#step1').addClass('active');
		}
		//jQuery('#allow').hide();
	});
	/*
		@ Purpose : Code to load loader inplace of an alert box.
	*/
	function loadLoader(){
		jQuery('#myLoader').show();
		jQuery('.text_process').show();
	}
	/*
		@ Purpose : Code to check enviorment compatibility in step 1
	*/
	function checkCompatible(){
		jQuery('#msgdiv').html('Please make your settings compatible with the recommended settings.');
		jQuery('#myModal').modal('show');
		var bitwiseValue = document.getElementById('bitwiseValue').value;
		if(parseInt(bitwiseValue) < 45 || parseInt(bitwiseValue) == 45){
			jQuery('#compatibility_msg_div').show();
			if(document.getElementById('ap').value == 1){
				jQuery('#disallow').hide();jQuery('#allow').show();
			}else{
				jQuery('#allow').hide();jQuery('#disallow').show();
				jQuery('#disAllowLink').attr('disabled', 'disabled');
			}
		}else{
			jQuery('#compatibility_msg_div').hide();
		}
	}
	/*
		@ Purpose : Code to validate and submit database info in step4
	*/

	function validateDbInfo(){
		if(document.getElementById('host').value == 'undefined' || (document.getElementById('host').value).trim() == ''){
			jQuery('#msgdiv').html('Please provide "DATABSE HOST NAME".');
			jQuery('#myModal').modal('show');
			jQuery('#host').focus();
			return false;
		}
		if(document.getElementById('dbname').value == 'undefined' || (document.getElementById('dbname').value).trim() == ''){
			jQuery('#msgdiv').html('Please provide "DATABSE NAME".');
			jQuery('#myModal').modal('show');
			return false;
		}
		if(document.getElementById('uid').value == 'undefined' || (document.getElementById('uid').value).trim() == ''){
			jQuery('#msgdiv').html('Please provide "DATABSE USERNAME".');
			jQuery('#myModal').modal('show');
			return false;
		}
		 if(document.getElementById('pwd').value == 'undefined' || (document.getElementById('pwd').value).trim() == ''){
			if(document.getElementById('uid').value != 'root'){
				jQuery('#msgdiv').html('Please provide "DATABSE PASSWORD".');
				jQuery('#myModal').modal('show');
				return false;
			}
		}
		if(document.getElementById('upath').value == 'undefined' || (document.getElementById('upath').value).trim() == ''){
			jQuery('#msgdiv').html('Please provide "DESIGNER ADMIN PATH".');
			jQuery('#myModal').modal('show');
			return false;
		}


		if(document.getElementById('uname').value == 'undefined' || (document.getElementById('uname').value).trim() == ''){
			jQuery('#msgdiv').html('Please provide an email for "INKXE LOGIN ID".');
			jQuery('#myModal').modal('show');
			return false;
		}else{
			var email = jQuery('#uname').val().trim();
			var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			if(!regex.test(email)){
				jQuery('#msgdiv').html('Please provide a valid email for "INKXE LOGIN ID".');
				jQuery('#myModal').modal('show');
				return false;
			}
		}

		if(document.getElementById('upwd').value == 'undefined' || (document.getElementById('upwd').value).trim() == ''){
			jQuery('#msgdiv').html('Please provide "INKXE LOGIN  PASSWORD".');
			jQuery('#myModal').modal('show');
			return false;
		}
		if(document.getElementById('cupwd').value == 'undefined' || (document.getElementById('cupwd').value).trim() == ''){
			jQuery('#msgdiv').html('Please provide "INKXE CONFIRM PASSWORD".');
			jQuery('#myModal').modal('show');
			return false;
		}


		var upwd = jQuery('#upwd').val().trim();
		if(upwd.length == 6 || upwd.length > 6){
			var regex = /^[A-Za-z0-9!@#$%^&*()_-]{6,20}$/;
			if(!regex.test(upwd)){
				jQuery('#msgdiv').html('Please provide a valid "INKXE LOGIN PASSWORD".');
				jQuery('#myModal').modal('show');
				return false;
			}else{
				if(upwd != jQuery('#cupwd').val().trim()){
					jQuery('#msgdiv').html("inkXE LOGIN password mismatch.");
					jQuery('#myModal').modal('show');
					jQuery('cupwd').val('');
					return false;
				}
			}
		}else{
			jQuery('#msgdiv').html('"INKXE LOGIN PASSWORD" should be of minimum 6, maximum 20 characters.');
			jQuery('#myModal').modal('show');
			return false;
		}
		if(document.getElementById('que').value == 'undefined' || (document.getElementById('que').value).trim() == ''){
			jQuery('#msgdiv').html('Please provide "SECURITY QUESTION FOR FORGET PASSWORD".');
			jQuery('#myModal').modal('show');
			return false;
		}
		if(document.getElementById('ans').value == 'undefined' || (document.getElementById('ans').value).trim() == ''){
			jQuery('#msgdiv').html('Please provide "SECURITY ANSWER".');
			jQuery('#myModal').modal('show');
			return false;
		}
		loadLoader();
	}

function setRole(obj){
	var user_id = obj.value;
	if(user_id == 0){
		jQuery('#roletd').html('').hide();
		jQuery('#apiuser').val('');
	}else{
		document.getElementById('roletd').style.display = 'block';
		jQuery('#apiuser').val(jQuery("#user_id option:selected").text());
		var url = 'getRoleList.php?id='+user_id;
		jQuery.post(url,{id:user_id},function(res){
			jQuery('#roletd').html(res);
		});
	}
}

function checkType(obj){
	var ul = parseInt(document.getElementById('ul').value);
	var type = obj.value;

	if(type == 'e'){
		document.getElementById('new').style.display = 'none';
		document.getElementById('existing').style.display = 'block';
		jQuery('#username').val('');
		document.getElementById('fname').value = '';
		document.getElementById('lname').value = '';
		document.getElementById('email').value = '';
		if(ul == 0){
			$('.confdiv').hide();//document.getElementById('confdiv').style.display = 'none';
			document.getElementById('ulDiv').style.display = 'none';
		}else document.getElementById('spanId').style.display = 'none';
	}else if(type == 'n'){
		document.getElementById('new').style.display = 'block';
		document.getElementById('existing').style.display = 'none';
		document.getElementById('user_id').value = 0;

		jQuery('#roletd').html('');
		$('.confdiv').show();//document.getElementById('confdiv').style.display = 'block';
	}
	document.getElementById('api_key').value = '';
	document.getElementById('apipwd').value = '';
}
function checkAttributeType(obj){
	var ul = parseInt(document.getElementById('ul').value);
	var type = obj.value;

	if(type == 'e'){
		document.getElementById('new').style.display = 'none';
		document.getElementById('existing').style.display = 'block';
	}else if(type == 'n'){
		document.getElementById('new').style.display = 'block';
		document.getElementById('existing').style.display = 'none';
	}
}
function attributeList(obj){
	var attributeSetId = obj.value;
	if(attributeSetId == 0){
		document.getElementById('attribute').style.display = 'none';
	}else{
		document.getElementById('attribute').style.display = 'block';
		var url = 'getAttributeList.php?id='+attributeSetId;
		jQuery.post(url,{id:attributeSetId},function(res){
			jQuery('#attribute').html(res);
		});
	}
}

function loadLoader(){
	jQuery('#myLoader').show();
}

function validate_soap(){
	var type = jQuery("#soap_form input[type='radio']:checked").val();
	if(type == 'n'){
		if(document.getElementById('fname').value == 'undefined' || document.getElementById('fname').value == ''){
			jQuery('#msgdiv').html('Please provide "FIRST NAME".');
			jQuery('#myModal').modal('show');
			return false;
		}
		if(document.getElementById('lname').value == 'undefined' || document.getElementById('lname').value == ''){
			jQuery('#msgdiv').html('Please provide "LAST NAME".');
			jQuery('#myModal').modal('show');
			return false;
		}
		if(document.getElementById('username').value == 'undefined' || document.getElementById('username').value == ''){
			jQuery('#msgdiv').html('Please provide "API USER NAME".');
			jQuery('#myModal').modal('show');
			//document.getElementById('username').focus();
			return false;
		}
		if(document.getElementById('email').value == 'undefined' || document.getElementById('email').value == ''){
			jQuery('#msgdiv').html('Please provide "EMAIL".');
			jQuery('#myModal').modal('show');
			return false;
		}else{
			var email = document.getElementById('email').value;
			var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			if(!regex.test(email)){
				jQuery('#msgdiv').html('Please provide a valid "EMAIL".');
				jQuery('#myModal').modal('show');
				return false;
			}
		}
	}else if(type == 'e'){
		var ul = document.getElementById('ul').value;
		if(parseInt(ul) == 0){
			jQuery('#msgdiv').html('Please create new SOAP user & role.');
			jQuery('#myModal').modal('show');
			return false;
		}else{
			if(document.getElementById('user_id').value == 'undefined' || document.getElementById('user_id').value == '0'){
				jQuery('#msgdiv').html('Please "SELECT USER".');
				jQuery('#myModal').modal('show');
				return false;
			}else{
				if(parseInt(document.getElementById('role_id').value) == '0' || parseInt(document.getElementById('role_id').value) == 'NaN'){
					jQuery('#msgdiv').html('Please "SELECT ROLE UNDER THIS USER".');
					jQuery('#myModal').modal('show');
					return false;
				}else{
					if(document.getElementById('apiuser').value == 'undefined' || document.getElementById('apiuser').value == ''){
						jQuery('#msgdiv').html('Please select user.');
						jQuery('#myModal').modal('show');
						return false;
					}
				}
			}
		}
	}
	if(document.getElementById('api_key').value == 'undefined' || document.getElementById('api_key').value == ''){
		jQuery('#msgdiv').html('Please provide "SOAP API KEY".');
		jQuery('#myModal').modal('show');
		return false;
	}/*else{
		var api_key = document.getElementById('api_key').value;

		if(api_key.length == 6 || api_key.length > 6){
			var regex = /^[A-Za-z0-9!@#$%^&*()_]{6,40}$/;
			if(!regex.test(api_key)){
				jQuery('#msgdiv').html('Please provide a valid "API KEY".');
				jQuery('#myModal').modal('show');
				return false;
			}
		}else{
			jQuery('#msgdiv').html('"API KEY" should be of minimum 6 characters.');
			jQuery('#myModal').modal('show');
			return false;
		}
	}*/
	if(document.getElementById('apipwd').value == 'undefined' || document.getElementById('apipwd').value == ''){
		jQuery('#msgdiv').html('Please provide your "MAGENTO ADMIN PASSWORD".');
		jQuery('#myModal').modal('show');
		return false;
	}/*else{
		var apipwd = document.getElementById('apipwd').value;
		var regex = /^[A-Za-z0-9!@#$%^&*()_]{4,40}$/;
		if(!regex.test(apipwd)){
			jQuery('#msgdiv').html('Please provide the correct "PASSWORD".');
			jQuery('#myModal').modal('show');
			return false;
		}
	}*/
	loadLoader();
}
</script>