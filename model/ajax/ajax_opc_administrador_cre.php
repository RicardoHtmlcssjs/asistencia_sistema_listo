<?php
	include("../class_usuario_model.php");
	$cl_usuario = new Usuario("","");
	$result = $cl_usuario->opc_administrador_cre();
	echo $result;
?>