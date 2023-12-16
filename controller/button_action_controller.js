// -------------LOGIN-------------
//boton logearse

$('#entrar').on("click", function(){
	usuario.login_usuario();
});

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
	}
}
// AGREGAR VISITANTE EN EL ORARIO DE LA TARDE
function agre_tarde(){
	let hora = accion.obtener_hora();
	if(hora <= 11){
		alert("Desde las 11:59 AM o antes, debe agregarse el visitante en el acceso de mañana");
	}else{
		$("#exampleModal1").modal("show");
			$("#ci").val("");
			$("#direccion_visi").val("");
			$("#motivo_visi").val("");
			$("#cargo_visi").val("");
	}
}
$("#ci").on("keyup", function(){
	usuario.selec_visitante($("#ci").val());
})

// boton de enviar formulario del modal agregar visitante
$("#guargar_visi").on("click", function(){
	let cedula_visi = $("#ci").val();
	let direccion_visi = $("#direccion_visi").val();
	let motivo_visi = $("#motivo_visi").val();
	let cargo_visi = $("#cargo_visi").val();
	hora_act = accion.obtener_hora();
	usuario.guardar_visi(cedula_visi, direccion_visi, motivo_visi, hora_act, cargo_visi);
	$("#exampleModal1").modal("hide");
})
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