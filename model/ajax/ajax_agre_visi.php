<?php
	include("../class_usuario_model.php");
	include("../class_limpiar_cadena.php");
	$cedula_visi = $class->limpiar_cadena($_POST["cedula_visi"]);
	$direccion_visi = $class->limpiar_cadena($_POST["direccion_visi"]);
	$motivo_visi = $class->limpiar_cadena($_POST["motivo_visi"]);
	$hora_act = $class->limpiar_cadena($_POST["hora_act"]);
	$cargo_visi = $class->limpiar_cadena($_POST["cargo_visi"]);
	$cl_usuario = new Usuario("","");
	$result = $cl_usuario->guardar_visitante($cedula_visi, $direccion_visi, $motivo_visi, $hora_act, $cargo_visi);
	echo $result;
?>