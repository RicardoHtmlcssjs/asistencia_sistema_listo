<?php
	include("../class_usuario_model.php");
	include("../class_limpiar_cadena.php");
	$cl_usuario = new Usuario("","");
	$result = $cl_usuario->trans_usu_adm();
	echo $result;
?>