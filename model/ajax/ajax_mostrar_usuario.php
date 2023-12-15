<?php
	include("../class_usuario_model.php");
	$cl_usuario = new Usuario("","");
	$result = $cl_usuario->mostrar_usuario_perso();
	echo $result;
?>