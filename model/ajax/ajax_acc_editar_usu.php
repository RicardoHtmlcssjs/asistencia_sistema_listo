<?php
	include("../class_usuario_model.php");
	include("../class_limpiar_cadena.php");
	$id_usu_act = $class->limpiar_cadena($_POST["id_usu_act"]);
	$usu_usu_act = $class->limpiar_cadena($_POST["usu_usu_act"]);
	$nom_usu_act = $class->limpiar_cadena($_POST["nom_usu_act"]);
	$ci_usu_act = $class->limpiar_cadena($_POST["ci_usu_act"]);
	$adm_usu_act = $class->limpiar_cadena($_POST["adm_usu_act"]);
    $email_usu_act = $class->limpiar_cadena($_POST["email_usu_act"]);
	$cl_usuario = new Usuario("","");
	$result = $cl_usuario->act_usuario_adm($id_usu_act, $usu_usu_act, $nom_usu_act, $ci_usu_act, $adm_usu_act, $email_usu_act);
	echo $result;
?>