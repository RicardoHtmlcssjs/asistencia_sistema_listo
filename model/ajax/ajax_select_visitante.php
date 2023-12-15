<?php
	include("../class_usuario_model.php");
	include("../class_limpiar_cadena.php");
	$ci_visi = $class->limpiar_cadena($_POST["ci"]);
	$cl_usuario = new Usuario("","");
	$result = $cl_usuario->select_visitante($ci_visi);
	echo $result;
?>