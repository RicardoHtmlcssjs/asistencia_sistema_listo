class Usuarios{
	session(){
		$.ajax({
			url: "model/ajax/ajax_session.php",
			type: "POST",
			success: function(result){
				if(result == 1){
					usuario.mostrar_personal_mañana(result);
				}else if(result == 1.1){
					usuario.mostrar_personal_mañana(result);
					// usuario.mostrar_usuario();
				}
			},
			error: function(error){
				console.log(error);
			}

		});
	}
	logout(){
		$.ajax({
			url: "model/ajax/logout_session.php",
			type: "POST",
			success: function(result){
				if(result = 1){
					window.location ="index.php";
				}

			},
			error: function(error){
				console.log(error);
			}

		});
	}
	login_usuario(){
		let usuario_l = $("#usuario").val();
		let contrasena = $("#contrasena").val(); 
		$.ajax({
			url: "model/ajax/ajax_login_user.php",
			type: "POST",
			data: {
				usuario_l: usuario_l, contrasena: contrasena
			},
			datatype: "json",
			success: function(result){
				if (result == 2) {
					$("#resp_login").html((accion.mensaje_alerta("danger", "Algun campo esta vacio", "view/images/icono_danger.png")));
				}else if(result == 1 || result == 1.1){
					usuario.mostrar_personal_mañana(result);
					usuario.mostrar_usuario();
				}else if(result == 0){
					$("#resp_login").html((accion.mensaje_alerta("danger", "Usuario o contraseña son incorrecta", "view/images/icono_danger.png")));
				}else{
					alert(result)
					$("#resp_login").html((accion.mensaje_alerta("danger", "Ha ocurrido un error", "view/images/icono_danger.png")));
				};

			},
			error: function(error){
				console.log(error);
			}

		});
	}
	// mostrar pesonal luego de logearse y btn navbar mañana
	mostrar_personal_mañana(){
				$("#cuerpo").css("width", "80%");
				$("#navbar-le").removeClass("dsp_no");
				$("#btn_cerrar_ss").removeClass("dps_none");
				$("#navbar-le").addClass("fondo_le");
				$("#opnb2").removeClass("opnb");
				$("#opnb_perfil").removeClass("opnb");
				// $("#opc_adm_1").removeClass("opnb");
				// $("#opc_adm_2").removeClass("opnb");
				// $("#opc_adm_3").removeClass("opnb");
				// $("#opc_adm_4").removeClass("opnb");
				$("#opnb1").addClass("opnb"); 

		$("#cuerpo").html(tabla_asistencia_m());
		$("#cont_2_tbl").append(header_table_personal("Acceso en horas de la mañana - 8:00 A.M a 12:00 PM","view/images/expedientes.png"));
		// texto, color, ruta, id
		$("#agre_btn_opc").append(accion.boton2("Agregar visitante", "success", "fa-solid fas fa-user-plus", "btn_agre_visi_mañana", "agre_mañana()"));
		$('#datatable_users').DataTable({
			"ajax":{
				"url": "model/ajax/ajax_mostrar_pers_mañana.php",
				"type": "POST",
				"dataSrc":""
			},
			"columns":[
				{"data": "id_asistencia_mana"},
				{"data": "fecha_registro"},
				{"data": "nombre_visi"},
				{"data": "cedula_visi"},
				{"data": "direccion_visi"},
				{"data": "cargo_visi"},
				{"data": "motivo_visi"},
				{"data": "fecha_entrada_visi"},
				{
	                "data": null,
	                "render": function(data, type, row) {
	                    if (data[8] === null) {
	                        return "<div class='d-flex justify-content-center'><button type='button' class='btn btn-primary btn-sm py-0' id='mar_sali' name='mar_sali'>Marcar salida</button></div>";
	                    } else {
	                        return data[8];
	                    }
	                }
            	},
				{"data": "usuario_asis"}
			],
			ordering: true,
			language: {
				lengthMenu: "Mostrar _MENU_ registros por pagina",
				zeroRecords: "Ningun usuario encontrado",
				info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
				infoEmpty: "Ningun usuario encontrado",
				infoFiltered: "(filtrados desde _MAX_ registros totales)",
				search: "Buscar...",
				loadingRecords: "Cargando...",
				paginate: {
					first: "Primero",
					last: "Ultimo",
					next: "Siguiente",
					previous: "Anterior"
				}
			}
		});
	};
	// mostrar pesonal luego de logearse y btn navbar mañana
	mostrar_personal_tarde(){
				// $("#cuerpo").css("width", "80%");
				$("#navbar-le").removeClass("dsp_no");
				$("#btn_cerrar_ss").removeClass("dps_none");
				$("#navbar-le").addClass("fondo_le");
				$("#opnb1").removeClass("opnb");
				$("#opnb_perfil").removeClass("opnb");
				// $("#opc_adm_1").removeClass("opnb");
				// $("#opc_adm_2").removeClass("opnb");
				// $("#opc_adm_3").removeClass("opnb");
				// $("#opc_adm_4").removeClass("opnb");
				$("#opnb2").addClass("opnb"); 

		$("#cuerpo").html(tabla_asistencia_m());
		$("#cont_2_tbl").append(header_table_personal("Acceso en horas de la tarde - 1:00 P.M a 4:00 PM","view/images/expedientes.png"));
		// texto, color, ruta, id
		$("#agre_btn_opc").append(accion.boton2("Agregar visitante", "success", "fa-solid fas fa-user-plus", "btn_agre_visi_tarde", "agre_tarde()"));
		$('#datatable_users').DataTable({
			"ajax":{
				"url": "model/ajax/ajax_mostrar_pers_tarde.php",
				"type": "POST",
				"dataSrc":""
			},
			"columns":[
				{"data": "id_asistencia_tarde"},
				{"data": "fecha_registro"},
				{"data": "nombre_visi"},
				{"data": "cedula_visi"},
				{"data": "direccion_visi"},
				{"data": "cargo_visi"},
				{"data": "motivo_visi"},
				{"data": "fecha_entrada_visi"},
				{
	                "data": null,
	                "render": function(data, type, row) {
	                    if (data[8] === null) {
	                        return "<div class='d-flex justify-content-center'><button type='button' class='btn btn-primary btn-sm py-0' id='mar_sali' name='mar_sali' onclick='marcar_sali_tarde("+ row.id_asistencia_tarde +")'>Marcar salida</button></div>";
	                    } else {
	                        return data[8];
	                    }
	                }
            	},
				{"data": "usuario_asis"}
			],
			ordering: true,
			language: {
				lengthMenu: "Mostrar _MENU_ registros por pagina",
				zeroRecords: "Ningun usuario encontrado",
				info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
				infoEmpty: "Ningun usuario encontrado",
				infoFiltered: "(filtrados desde _MAX_ registros totales)",
				search: "Buscar...",
				loadingRecords: "Cargando...",
				paginate: {
					first: "Primero",
					last: "Ultimo",
					next: "Siguiente",
					previous: "Anterior"
				}
			}
		});
	};
	// mostrar nombre usuario en el navbar al lado del btn cerrar secion
	mostrar_usuario(){ 
		$.ajax({
			url: "model/ajax/ajax_mostrar_usuario.php",
			type: "POST",
			success: function(result){
				$("#nom_usu_log_header").html("<i class='px-1 mr-4' id='nom_usu_log_header' name='nom_usu_log_header'><b>"+ result +"</b></i>");
			},
			error: function(error){
				console.log(error);
			}

		});
	};
	// MOSTRAR VISITANTE EN EL SELECT DE VSAIME
	selec_visitante(ci){
		$.ajax({
			url: "model/ajax/ajax_select_visitante.php",
			type: "POST",
			data: {				
				ci: ci
			},
			success: function(result){
				$("#select_ci_visi").html(result);
			},
			error: function(error){
				console.log(error);
			}
		});
	}
	guardar_visi(cedula_visi, direccion_visi, motivo_visi, hora_act, cargo_visi){
		$.ajax({
			url: "model/ajax/ajax_agre_visi.php",
			type: "POST",
			data: {				
				cedula_visi: cedula_visi, direccion_visi: direccion_visi, motivo_visi: motivo_visi, hora_act: hora_act, cargo_visi: cargo_visi 
			},
			success: function(result){
				let res = "";
				if(result == 2){
					res = "algun campo esta vacio";
				}else if(result == 1){
					let hora = accion.obtener_hora();
					if(hora <= 11){
						usuario.mostrar_personal_mañana();
					}else{
						usuario.mostrar_personal_tarde();
					}
					res = "Todo bien";

				}else{
					res = "Ha ocurrido un error";
				}
			},
			error: function(error){
				console.log(error);
			}
		});
	}
	// marcar salida del visitante tarde
	marcar_sali_tarde(id_visi){
		$.ajax({
			url: "model/ajax/ajax_marcar_sali_tarde.php",
			type: "POST",
			data: {				
				id_visi: id_visi 
			},
			success: function(result){
				if(result == 1){
					usuario.mostrar_personal_tarde();
				}else{
					alert("Ha ocurrido un error");
				}
			},
			error: function(error){
				console.log(error);
			}
		});
	}
	// mostrar tabla usuarios como administrador
	usus_login(){
		$("#navbar-le").removeClass("dsp_no");
		$("#btn_cerrar_ss").removeClass("dps_none");
		$("#navbar-le").addClass("fondo_le");
		$("#opnb_perfil").removeClass("opnb");
		$("#opnb1").removeClass("opnb");
		$("#opnb2").removeClass("opnb");
		// $("#opc_adm_2").removeClass("opnb");
		// $("#opc_adm_3").removeClass("opnb");
		// $("#opc_adm_3").removeClass("opnb");
		$("#opc_adm_1").addClass("opnb");

		$("#cuerpo").html(tabla_usuario_login());
		$("#cont_2_tbl").append(header_table_personal("Administrador - Usuarios","view/images/expedientes.png"));
		$("#agre_btn_opc").append(accion.boton2("Agregar un usuario", "success", "fa-solid fas fa-user-plus", "btn_agre_visi_tarde", "agre_tarde()"));
		$('#table_perso_usu').DataTable({
			"ajax":{
				"url": "model/ajax/ajax_mostrar_usuario.php",
				"type": "POST",
				"dataSrc":""
			},
			"columns":[
				{"data": "usuario_asis"},
				{"data": "nombre_completo"},
				{
	                "data": null,
	                "render": function(data, type, row) {
	                        return "<div class='d-flex justify-content-center'><button type='button' class='btn btn-primary btn-sm py-0' id='mar_sali' name='mar_sali' onclick='marcar_sali_tarde("+ row.id +")'>Cambiar contraseña</button></div>";
	                }
            	},
				{"data": "fecha_hora_reg"},
				{"data": "ci_asis"},
				{"data": "desc_permisos"},
				{"data": "email"},
				{
	                "data": null,
	                "render": function(data, type, row) {
	                        return "<div class='d-flex justify-content-center'><button type='button' class='btn btn-primary btn-sm py-0' id='mar_sali' name='mar_sali' onclick='editar_usu("+ row.id +")'>Editar</button></div>";
	                }
            	}
			],
			ordering: true,
			language: {
				lengthMenu: "Mostrar _MENU_ registros por pagina",
				zeroRecords: "Ningun usuario encontrado",
				info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
				infoEmpty: "Ningun usuario encontrado",
				infoFiltered: "(filtrados desde _MAX_ registros totales)",
				search: "Buscar...",
				loadingRecords: "Cargando...",
				paginate: {
					first: "Primero",
					last: "Ultimo",
					next: "Siguiente",
					previous: "Anterior"
				}
			}
		});
	}
	// mostarr valos de usuario a editar como administrador
	editar_usu(id){
		$.ajax({
			url: "model/ajax/ajax_editar_usu.php",
			type: "POST",
			data: {				
				id: id
			},
			success: function(result){
				let r = JSON.parse(result);
				$.each(r, function(index, element){
					$("#id_usu").val(element.id);
					$("#usu_adm").val(element.usuario_asis);
					$("#nom_adm").val(element.nombre_completo);
					$("#ci_adm").val(element.ci_asis);
					$("#adm_adm").val(element.desc_permisos);
					$("#email_adm").val(element.email);
				});
				usuario.opc_administrador();
			},
			error: function(error){
				console.log(error);
			}
		});
	}
	// mostrar opciones en el select de actualizar usuario como administrador
	opc_administrador(){
		$.ajax({
			url: "model/ajax/ajax_opc_administrador.php",
			type: "POST",
			success: function(result){
				$("#opc_adm").html(result);
			},
			error: function(error){
				console.log(error);
			}
		});
	}
	// accion de actualizar el usuaruio al eviar el formualrio del modal 
	act_usuario_adm(id_usu_act, usu_usu_act, nom_usu_act, ci_usu_act, adm_usu_act, email_usu_act){
		$.ajax({
			url: "model/ajax/ajax_acc_editar_usu.php",
			type: "POST",
			data: {				
				id_usu_act: id_usu_act, usu_usu_act: usu_usu_act, nom_usu_act: nom_usu_act, ci_usu_act: ci_usu_act, adm_usu_act: adm_usu_act, email_usu_act: email_usu_act
			},
			success: function(result){
				if(result == 1){
					$("#exampleModal3").modal("hide");
					usuario.usus_login();
				}else if(result == 0){
					$("#error_soli_exp3").html((accion.mensaje_alerta("danger", "Algun campo esta vacio", "view/images/icono_danger.png")));
				}else if(result == 2){
					$("#error_soli_exp3").html((accion.mensaje_alerta("danger", "Ha ocurrido un error vacio", "view/images/icono_danger.png")));
				}else{
					$("#error_soli_exp3").html((accion.mensaje_alerta("danger", result, "view/images/icono_danger.png")));
				}
			},
			error: function(error){
				console.log(error);
			}
		});
	}
}
let usuario = new Usuarios();
usuario.session();