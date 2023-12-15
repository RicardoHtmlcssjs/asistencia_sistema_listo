<?php 
	include("../class_usuario_model.php");
	include("../class_limpiar_cadena.php");
	$id_visi = $class->limpiar_cadena($_POST["id_visi"]);
	$cl_usuarios = new Usuario("", "");
	
	$result = $cl_usuarios->marcar_sali_tarde($id_visi);
	
	echo $result;
?>