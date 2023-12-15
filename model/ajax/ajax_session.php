<?php
	session_start();
	if(isset($_SESSION["id_usu_log_asis"]) && isset($_SESSION["admin_usu_p_asis"])){
		if($_SESSION["admin_usu_p_asis"] == 1){
			$result = 1;
		}else{
			$result = 1.1;
		}
	}else{
		$result = 0;
	}
	echo $result;
?>