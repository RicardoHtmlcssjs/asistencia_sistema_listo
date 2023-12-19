// -------------LOGIN-------------
//boton logearse

$('#entrar').on("click", function(){
	usuario.login_usuario();
});
// CLICK EN MI PERFIL
// $("#opnb_perfil").on("click", function(){
// 	usuario.mi_perfil();
// })	

// click nabvar opcion 1 acceso en la mañana
$("#opnb1").on("click", function(){
	usuario.mostrar_personal_mañana();
})	
// click nabvar opcion 2 acceso en la tarde
$("#opnb2").on("click", function(){
	usuario.mostrar_personal_tarde();
})	
// btn agregar acceso de mañana
function agre_mañana(){
	let hora = accion.obtener_hora();
	if(hora >= 12){
		alert("De las 12:00 PM en adelante debes agregar al visitante en, acceso de tarde")
	}else{
		$("#exampleModal1").modal("show");
		$("#sele_visi").val("");
		$("#ci").val("");
		$("#direccion_visi").val("");
		$("#motivo_visi").val("");
		$("#cargo_visi").val("");
		$("#error_soli_exp1").html("");
	}
}
// AGREGAR VISITANTE EN EL ORARIO DE LA TARDE
function agre_tarde(){
	let hora = accion.obtener_hora();
	if(hora <= 11){
		alert("Desde las 11:59 AM o antes, debe agregarse el visitante en el acceso de mañana");
	}else{
		$("#exampleModal1").modal("show");
			$("#sele_visi").val("");
			$("#ci").val("");
			$("#direccion_visi").val("");
			$("#motivo_visi").val("");
			$("#cargo_visi").val("");
			$("#error_soli_exp1").html("");
	}
}
$("#ci").on("keyup", function(){
	usuario.selec_visitante($("#ci").val());
})

// boton de enviar formulario del modal agregar visitante
$("#guargar_visi").on("click", function(){
	let cedula_visi = $("#sele_visi").val();
	let direccion_visi = $("#direccion_visi").val();
	let motivo_visi = $("#motivo_visi").val();
	let cargo_visi = $("#cargo_visi").val();
	hora_act = accion.obtener_hora();
	usuario.guardar_visi(cedula_visi, direccion_visi, motivo_visi, hora_act, cargo_visi);
	
})
// marcar hora salida de la mañana
function marcar_sali_manana(id_visi){
	usuario.marcar_sali_manana(id_visi);
}
// marcar hora de salida en  la tarde
function marcar_sali_tarde(id_visi){
	usuario.marcar_sali_tarde(id_visi);
}

// boton de administrador 1 usuarios mostrar usuarios tabla
$("#opc_adm_1").on("click",()=>{	
	usuario.usus_login();
});

// BOTON EDITAR REGISTROS DE LOS USUARIOS
function editar_usu(id){
	$("#exampleModal3").modal("show");
	let id_usu_act = $("#id_usu").val("");
	let usu_usu_act = $("#usu_adm").val(""); 
	let nom_usu_act = $("#nom_adm").val("");
	let ci_usu_act = $("#ci_adm").val("");
	let adm_usu_act = $("#adm_adm").val("");
	let email_usu_act = $("#email_adm").val("");
	let error_usu_act = $("#error_soli_exp3").html("");
	usuario.editar_usu(id);
}
// SELECT DE OPCIONES DE ADMINISTRADOR
function sel_mos_per(){
	$("#adm_adm").val($("#opc_adm").val());
}

// BOTON DE ACTUALIZAR USUARIO COMO ADMINISTRADOR
$("#btn_acttualizar_usu").on("click", function(){
	let id_usu_act = $("#id_usu").val();
	let usu_usu_act = $("#usu_adm").val(); 
	let nom_usu_act = $("#nom_adm").val();
	let ci_usu_act = $("#ci_adm").val();
	let adm_usu_act = $("#adm_adm").val();
	let email_usu_act = $("#email_adm").val();
	if(expresiones_re.email(email_usu_act)){
		usuario.act_usuario_adm(id_usu_act, usu_usu_act, nom_usu_act, ci_usu_act, adm_usu_act, email_usu_act);
	}else{
		$("#error_soli_exp3").html((accion.mensaje_alerta("danger", "Correo no permitido", "view/images/icono_danger.png")));
	}
	
	
});
// BOTOBN MODAL AGREGAR USUARIO
function nv_usu(){
	$("#exampleModal4").modal("show");
	$("#usu_nv").val("");
	$("#usu_nom").val("");
	$("#usu_ci").val("");
	$("#usu_email").val("");
	$("#error_soli_exp4").html("")
	$('#btn_agre_usu').attr("disabled", false);
	usuario.opc_administrador_cre();
};

// BOTON DE AGREGAR USUARIO COMO ADMINISTRADIR
$("#btn_agre_usu").on("click", function(){
	let usu_n = $("#usu_nv").val();
	let usu_nom = $("#usu_nom").val();
	let usu_ci = $("#usu_ci").val();
	let usu_opc_adm = $("#usu_adm_nv").val();
	let usu_email = $("#usu_email").val();
	
	usuario.nuev_usu(usu_n, usu_nom, usu_ci, usu_opc_adm, usu_email);
	// $('#btn_agre_usu').attr("disabled", true);
});
// CAMBIAR CONTRASEÑA COMO ADMINISTRADOR
function camb_con_u(id_usu){
	usuario.cambio_con_usu(id_usu);
}
// OPCION 2 COMO ADMINISTRADOR TRANSACCIONES COMO ADMINISTRADOR
$("#opc_adm_2").on("click", function(){
	usuario.trans_usus_login_adm();
});
