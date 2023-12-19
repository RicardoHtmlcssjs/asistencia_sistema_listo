<?php
	include("../class_usuario_model.php");
	include("../class_limpiar_cadena.php");
	$usu_n = $class->limpiar_cadena($_POST["usu_n"]);
	$usu_nom = $class->limpiar_cadena($_POST["usu_nom"]);
	$usu_ci = $class->limpiar_cadena($_POST["usu_ci"]);
	$usu_opc_adm = $class->limpiar_cadena($_POST["usu_opc_adm"]);
	$usu_email = $class->limpiar_cadena($_POST["usu_email"]);
	$cl_usuario = new Usuario("","");
	$result = $cl_usuario->agregar_usu($usu_n, $usu_nom, $usu_ci, $usu_opc_adm, $usu_email);
	echo $result;
?>