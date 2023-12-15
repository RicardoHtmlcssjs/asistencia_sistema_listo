class Acciones{
	mensaje_alerta(color, mensaje, ruta){
		let mens_dan = "<div class='container' style='margin-top: 20px;'><div id='cont_2do_mensaje' class='alert alert-"+color+" text-center men_tam_comp' role='alert'>"+mensaje+"<img src='"+ruta+"' class='ml-1 img_mens'></div>";
		return mens_dan;
	}
	boton(texto, color, funcion){
		let agregar_btn = "<div class='cont_btn_agregar'><button id='most_mod_agr' class='btn btn-"+color+"'  '"+ funcion +"'>"+texto+" <img src='view/images/icono_expediente.png' class='img_btn_a'></button></div>";
		return agregar_btn;
	}
	boton2(texto, color, ruta, id, accion){
		let agregar_btn = "<div class='cont_btn_agregar'><button id='"+ id +"' class='btn btn-"+color+"' onclick='"+accion+"'>"+texto+" <i class='"+ ruta +"'></i></button></div>";
		return agregar_btn;
	}
	obtener_hora(){
		const ahora = new Date();
		const hora = ahora.getHours();
		return hora;
	}
};
let accion = new Acciones();
 