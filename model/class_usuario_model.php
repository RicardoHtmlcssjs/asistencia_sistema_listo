<?php
	include("lib/conexion.php");
	class Usuario extends Conexion{
		public function __construct($usuario, $contrasena){
			$this->usu = $usuario;
			$this->con = $contrasena; 
		}
		public function hora_normal($hora){
			$horas = substr($hora, 0, 2);			
			if($horas > 12){
				$horas = $horas - 12;
				$mp = "PM";
			}elseif($horas == 00){
				$horas = 12;
				$mp = "AM";
			}else{
				$mp = "AM";
			}
			$result = $horas . substr($hora, 2, 6) . " " . $mp;

			return $result;
		}
		
		// comprobacion cuando el usuario se logea
		public function login_usuarios(){
			parent::conecta();
			$db = $this->conn;
			$sql = "SELECT id, usuario_asis, password_asis, id_permisos FROM usuarios WHERE usuario_asis = '".$this->usu."'";
			$query = $db->execute($sql);
			foreach ($query as $key) {
				$usuario = $key["usuario_asis"];
				$password = $key["password_asis"];
				$idusuario = $key["id"];
				$permisos = $key["id_permisos"];
			}
			if(empty($this->usu || empty($this->con))){
				return 2;
			}elseif(isset($usuario)){
				if(md5($this->con) == $password){
					session_start();
					$_SESSION["id_usu_log_asis"] = $idusuario;
					$_SESSION["admin_usu_p_asis"] = $permisos;  
					if($permisos == 2){
						return 1.1;
					}else{
						return 1;
					}
				}else{
					return 0;
				} 
			}else{
				return 0;
			}
			// mostrar todo el personal
		}
		// MI PERFIL
		// perfil()
		// // mostrar usuario en el header
		// public function mostrar_usuario(){
		// 	parent::conecta();
		// 	$db = $this->conn;
		// 	session_start();
		// 	$id_usu = $_SESSION["id_usu_log_asis"];
		// 	$query = $db->execute("SELECT usuario_asis from usuarios where id = $id_usu");
		// 	foreach ($query as $key) {
		// 		$usuario = $key['usuario_asis'];
		// 	}
		// 	return $usuario;
		// }
		// mostrar tabla acceso de mañana
		public function mostrar_personal_mañana(){
			parent::conecta();
			$db = $this->conn;
			$query = $db->execute("SELECT sis_asistencia_personal_mañana.id_asistencia_mana, sis_asistencia_personal_mañana.fecha_registro, sis_asistencia_personal_mañana.nombre_visi, sis_asistencia_personal_mañana.cedula_visi, sis_asistencia_personal_mañana.direccion_visi, sis_asistencia_personal_mañana.cargo_visi, sis_asistencia_personal_mañana.motivo_visi, sis_asistencia_personal_mañana.fecha_entrada_visi, sis_asistencia_personal_mañana.fecha_salida_visi, usuarios.usuario_asis FROM sis_asistencia_personal_mañana INNER JOIN usuarios ON sis_asistencia_personal_mañana.asistente_adm = usuarios.id");

			$array = array();
			foreach ($query as $key) {
				$array[] = $key;
			}
			$result = json_encode($array);
			return $result;
		}
		// mostrar tabla de acceso de tarde
		public function mostrar_personal_tarde(){
			parent::conecta();
			$db = $this->conn;
			$query = $db->execute("SELECT sis_asistencia_personal_tarde.id_asistencia_tarde, sis_asistencia_personal_tarde.fecha_registro, sis_asistencia_personal_tarde.nombre_visi, sis_asistencia_personal_tarde.cedula_visi, sis_asistencia_personal_tarde.direccion_visi, sis_asistencia_personal_tarde.cargo_visi, sis_asistencia_personal_tarde.motivo_visi, sis_asistencia_personal_tarde.fecha_entrada_visi, sis_asistencia_personal_tarde.fecha_salida_visi, usuarios.usuario_asis FROM sis_asistencia_personal_tarde INNER JOIN usuarios ON sis_asistencia_personal_tarde.asistente_adm = usuarios.id");

			$array = array();
			foreach ($query as $key) {
				$array[] = $key;
			}
			$result = json_encode($array);
			return $result;
		}
		// mostrar select de visitantes vsaime
		public function select_visitante($ci_visi){
			parent::conecta2();
			$db = $this->conn2;
			$query = $db->execute("SELECT cedula, primer_nombre, primer_apellido FROM dsaime WHERE CAST(cedula AS VARCHAR) LIKE '%$ci_visi%' ORDER BY cedula ASC LIMIT 10");
			$select_vi_cedu = "<select class='form-control' id='sele_visi' name='sele_visi'>";
			
			foreach ($query as $key) {
				$select_vi_cedu .= "<option value='".$key["cedula"]."'>".$key["cedula"]." ".$key["primer_nombre"]." ".$key["primer_apellido"]."</option>";
			}
			$select_vi_cedu .= "</select>";
			return $select_vi_cedu;
		}
		// GUARDAR VISITANTE MAÑANA  Y TARDE
		public function guardar_visitante($cedula_visi, $direccion_visi, $motivo_visi, $hora_act, $cargo_visi){
			// parent::conecta2();
			// $db2 = $this->conn2;
			if(empty($cedula_visi) or empty($direccion_visi) or empty($motivo_visi) or empty($cargo_visi)){
				return 2;
			}
			if($hora_act >= 12){
				// tarde
				parent::conecta2();
				$db2 = $this->conn2;
				$query1 = $db2->execute("SELECT primer_nombre, primer_apellido FROM dsaime WHERE cedula = $cedula_visi");
				foreach ($query1 as $key1){
					$nom_com = $key1["primer_nombre"]. " " .$key1["primer_apellido"];
				}	
				session_start();
				$usu_adm = $_SESSION["id_usu_log_asis"];
				parent::conecta();
				$db = $this->conn;
				$query2 = $db->execute("INSERT INTO sis_asistencia_personal_tarde (fecha_registro, nombre_visi, cedula_visi, direccion_visi, cargo_visi, motivo_visi, fecha_entrada_visi, asistente_adm) VALUES (now(), '".$nom_com."', $cedula_visi, '".$direccion_visi."', '".$cargo_visi."', '".$motivo_visi."', now(), $usu_adm)");
				if($query2){
					return 1;
				}else{
					return 0;
				}
			}elseif($hora_act <= 11) {
				// mañana
				parent::conecta2();
				$db2 = $this->conn2;
				$query1 = $db2->execute("SELECT primer_nombre, primer_apellido FROM dsaime WHERE cedula = $cedula_visi");
				foreach ($query1 as $key1){
					$nom_com = $key1["primer_nombre"]. " " .$key1["primer_apellido"];
				}	
				session_start();
				$usu_adm = $_SESSION["id_usu_log_asis"];
				parent::conecta();
				$db = $this->conn;
				$query2 = $db->execute("INSERT INTO sis_asistencia_personal_mañana (fecha_registro, nombre_visi, cedula_visi, direccion_visi, cargo_visi, motivo_visi, fecha_entrada_visi, asistente_adm) VALUES (now(), '".$nom_com."', $cedula_visi, '".$direccion_visi."', '".$cargo_visi."', '".$motivo_visi."', now(), $usu_adm)");
				if($query2){
					return 1;
				}else{
					return 0;
				}
			}
		}
		// MARCAR SALIDA DEL VISITANTE
		public function marcar_sali_tarde($id_visi){
			parent::conecta();
			$db = $this->conn;
			$query = $db->execute("UPDATE sis_asistencia_personal_tarde SET  fecha_salida_visi = now() WHERE id_asistencia_tarde = $id_visi");
			if($query){
				return 1;
			}else{
				return 0;
			}
		}

		// MARCAR SALIDA DEL VISITANTE
		public function marcar_sali_manana($id_visi){
			parent::conecta();
			$db = $this->conn;
			$query = $db->execute("UPDATE sis_asistencia_personal_mañana SET  fecha_salida_visi = now() WHERE id_asistencia_mana = $id_visi");
			if($query){
				return 1;
			}else{
				return 0;
			}
		}

		// MOSTRAR USUARIOS
		public function mostrar_usuario_perso(){
			parent::conecta();
			$db = $this->conn;
			$query = $db->execute("SELECT usuarios.id, usuarios.usuario_asis, usuarios.nombre_completo, usuarios.fecha_hora_reg, usuarios.ci_asis, permisos.desc_permisos, usuarios.email FROM usuarios INNER JOIN permisos ON usuarios.id_permisos = permisos.id_permisos");
			// $query = $db->execute("SELECT id, usuario_asis FROM usuarios")
			$array = array();
			foreach ($query as $key) {
				$array[] = $key;
			}
			$result = json_encode($array);
			return $result;
		}
		// MOSTRAR DATOS DE EL USUARIO A EDITAR
		public function editar_usu($id){
			parent::conecta();
			$db = $this->conn;
			$query = $db->execute("SELECT usuarios.id, usuarios.usuario_asis, usuarios.nombre_completo, usuarios.ci_asis, permisos.desc_permisos, usuarios.email FROM usuarios INNER JOIN permisos ON usuarios.id_permisos = permisos.id_permisos WHERE id = $id");
			$array = array();
			foreach ($query as $key) {
				$array[] = $key;
			}
			$result = json_encode($array);
			return $result;
		}
		// MOSTRAR OPCIONES DE ADMINISTRADOR EN UN SELECT
		public function opc_administrador(){
			parent::conecta();
			$db = $this->conn;
			$query = $db->execute("SELECT * FROM permisos");
			$result = "";
			$array = array();
			foreach ($query as $key) {
				$result .= "<option value='".$key["desc_permisos"]."'>".$key["desc_permisos"]."</option>";
			}
			return $result;
		}
		// guardar actualizacion de DATOS DEL USUARIO
		public function act_usuario_adm($id_usu_act, $usu_usu_act, $nom_usu_act, $ci_usu_act, $adm_usu_act, $email_usu_act){
			parent::conecta();
			$db = $this->conn;

			// SI UN CAMPO ESTA VACIO 
			if(empty($id_usu_act) || empty($usu_usu_act) || empty($nom_usu_act) || empty($nom_usu_act) || empty($ci_usu_act) || empty($adm_usu_act) || empty($email_usu_act)){
				return(0);
			}
			// SELECT ID DE PERMISOS
			$query2 = $db->execute("SELECT id_permisos FROM permisos WHERE desc_permisos = '".$adm_usu_act."'");
			foreach ($query2 as $key2) {
				$id_per = $key2["id_permisos"]; 
			}

			// DATOS DE EL USUARIO YA ALAMACENADOS
			$query = $db->execute("SELECT * FROM usuarios WHERE id = $id_usu_act");
			foreach ($query as $key) {
				$usu_reg = $key["usuario_asis"];
				$nom_reg = $key["nombre_completo"];
				$ci_reg = $key["ci_asis"];
				$adm_reg = $key["id_permisos"];
				$email_reg = $key["email"];
			}
				$query3 = $db->execute("SELECT * FROM usuarios");
				foreach ($query3 as $key3) {
					if($usu_usu_act == $key3["usuario_asis"] && $key3["usuario_asis"] != $usu_reg){
						return "El usuario ya existe";
					}
					if($ci_usu_act == $key3["ci_asis"] && $key3["ci_asis"] != $ci_reg){
						return "La cedula ya existe";
					}
					if($email_usu_act == $key3["email"] && $key3["email"] != $email_reg) {
						return "El correo electronico ya existe";
					}
				}

			$query5 = $db->execute("UPDATE usuarios SET  usuario_asis = '".$usu_usu_act."', nombre_completo = '".$nom_usu_act."', ci_asis = '".$ci_usu_act."', id_permisos = $id_per, email = '".$email_usu_act."' WHERE id = $id_usu_act");

			$descipcion = "Actualizacion de dato.";
				session_start();
				$id_usu_admin = $_SESSION["id_usu_log_asis"];
				$query6 = $db->execute("INSERT INTO transaccion_usus (id_usu_tran, id_adm_tran, fecha_tran, desc_tran, hora_tran) VALUES ($id_usu_act, $id_usu_admin, now(), '". $descipcion ."', now())");

			if($query5){
				$result = 1;
			}else{
				$result = 2;
			}
			return $result;
		}
		// MOSTRAR SELECT DE ADMINISTRADOR
		public function opc_administrador_cre(){
			parent::conecta();
			$db = $this->conn;
			$query = $db->execute("SELECT * FROM permisos");
			$result = "";
			$array = array();
			foreach ($query as $key) {
				$result .= "<option value='".$key["id_permisos"]."'>".$key["desc_permisos"]."</option>";
			}
			return $result;}
		// AGREAGR USUARIO COMOA ADMINISTRADOR
		public function agregar_usu($usu_n, $usu_nom, $usu_ci, $usu_opc_adm, $usu_email){
			parent::conecta();
			$db = $this->conn;
			
			if(empty($usu_n) || empty($usu_nom) || empty($usu_ci) || empty($usu_opc_adm) || empty($usu_email)){
				return 0;
			}else {
				$query3 = $db->execute("SELECT * FROM usuarios");
				foreach ($query3 as $key3) {
					if($usu_n == $key3["usuario_asis"]){
						return 1;
					}
					if($usu_ci == $key3["ci_asis"]){
						return 2;
					}
					if($usu_email == $key3["email"]) {
						return 3;
					}
				}
				$num_ram = mt_rand(1,1000);
				$nueva_con_ne = $usu_n . $num_ram;
				$nueva_con_en = md5($usu_n . $num_ram);
				$query4 = $db->execute("INSERT INTO usuarios (usuario_asis, password_asis, nombre_completo, fecha_hora_reg, ci_asis, id_permisos, email) VALUES ('".$usu_n."', '".$nueva_con_en."', '".$usu_nom."', now(), $usu_ci, $usu_opc_adm, '".$usu_email."')");

				$query6 = $db->execute("SELECT id FROM usuarios ORDER BY id ASC");
				foreach ($query6 as $key6){
					$id_usu_nv = $key6["id"];
				}
				
				$descipcion = "Creacion de usuario";
				session_start();
				$id_usu_admin = $_SESSION["id_usu_log_asis"];
				$query5 = $db->execute("INSERT INTO transaccion_usus (id_usu_tran, id_adm_tran, fecha_tran, desc_tran, hora_tran) VALUES ($id_usu_nv, $id_usu_admin, now(), '". $descipcion ."', now())");

				include("class_email.php");
				$ema = new Email();			
				$ema->enviar_email($nueva_con_ne, $usu_n, $usu_email);
				return 10;
			}
		}
		// cambio de contraseña como administrador
		public function cam_contra_adm($id){
			parent::conecta();
			$db = $this->conn;
				$query = $db->execute("SELECT usuario_asis, email FROM usuarios  WHERE id = '".$id."'");
				foreach ($query as $key) {
					$usu_n = $key["usuario_asis"];
					$usu_email = $key["email"];
				}
			$num_ram = mt_rand(1,1000);
			$nueva_con_ne = $usu_n . $num_ram; 
			$nueva_con = md5($nueva_con_ne);

			$query2 = $db->execute("UPDATE usuarios SET password_asis = '".$nueva_con."' WHERE id = $id");

			$descipcion = "Dato actualizado: Cambio de contraseña.";
			session_start();
			$id_usu_admin = $_SESSION["id_usu_log_asis"];
			$query3 = $db->execute("INSERT INTO transaccion_usus (id_usu_tran, id_adm_tran, fecha_tran, desc_tran, hora_tran) VALUES ($id, $id_usu_admin, now(), '". $descipcion ."', now())");
			// $cuerpo[]=array("login" => "".$usu."", "con" => "".$nueva_con."");

			if($usu_email == null){
				return 2;
			}else{
				include("class_email.php");
				$ema = new Email();			
				$ema->enviar_email($nueva_con_ne, $usu_n, $usu_email);	
				return 1;
			}			
		}
		// TABLA DE TRANSACCIONES COMO USUARIOS
		public function trans_usu_adm(){
			parent::conecta();
			$db = $this->conn;
			$query = $db->execute("SELECT usuarios.usuario_asis, transaccion_usus.id_adm_tran, transaccion_usus.fecha_tran, transaccion_usus.desc_tran, transaccion_usus.hora_tran  FROM transaccion_usus INNER JOIN usuarios ON  transaccion_usus.id_usu_tran = usuarios.id ORDER BY id_transaccion DESC");
			$array = array();
			foreach ($query as $key) {
				$usu_adm = $key["id_adm_tran"];
				$horas = $this->hora_normal($key['hora_tran']);
				$query2 = $db->execute("SELECT * FROM usuarios WHERE id = $usu_adm");
				foreach ($query2 as $key2) {
					$usuario_adm = $key2["usuario_asis"];
					$array[]=array("usuario_asis" => "".$key['usuario_asis']."", "usu_adm" => "".$key2["usuario_asis"]."", "fecha_tran" => "".$key['fecha_tran']."", "hora_tran" => "".$horas."", "desc_tran" => "".$key['desc_tran']."");
				}
			}
			$result = json_encode($array);
			return $result;
		}
	}
?>