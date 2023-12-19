function tabla_asistencia_m(){
	let tab_perso = "<div class='p-3' style='width: 100%;'>";
        // tab_perso += "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 cont_col_tab1' style='padding: 0px;'>";
            tab_perso += "<div id='cont_2_tbl'>";
            tab_perso += "</div>";
            tab_perso += "<table style='width: 100%;' id='datatable_users'>";
                tab_perso += "<thead class='thead_tab1'";
                    tab_perso += "<tr>";
                    tab_perso += "<th class='text-center tit_c_tab1'>Id</th>";
                        tab_perso += "<th class='text-center tit_c_tab1'>Fecha. Reg</th>";
                        tab_perso += "<th class='text-center tit_c_tab1'>Nombre</th>";
                        tab_perso += "<th class='text-center tit_c_tab1'>Cedula</th>";
                        tab_perso += "<th class='text-center tit_c_tab1'>Direccion</th>";
                        tab_perso += "<th class='text-center tit_c_tab1'>Cargo</th>";
                        tab_perso += "<th class='text-center tit_c_tab1'>Motivo</th>";
                        tab_perso +="<th class='text-center tit_c_tab1'>Fecha entrada</th>";
                        tab_perso += "<th class='text-center tit_c_tab1'>Fecha salida</th>";
                        tab_perso += "<th class='text-center tit_c_tab1'>Asistente</th>";
                    tab_perso += "</tr>";
                tab_perso += "</thead>";
                tab_perso += "<tbody class='tbody_tab1' >";
                tab_perso += "</tbody>";
            tab_perso += "</table>";
    tab_perso += "</div>";
    tab_perso += "<div id='sin_fondo'>";
    tab_perso += "</div>";
    tab_perso += "<div id='exp_soli'></div>";
    return tab_perso;
}

function tabla_usuario_login(){
	let tab_perso2 = "<div class='p-3' style='width: 100%;'>";
        // tab_perso2 += "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 cont_col_tab1' style='padding: 0px;'>";
            tab_perso2 += "<div id='cont_2_tbl'>";
            tab_perso2 += "</div>";
            // tab_perso2 += "</div>"; 
            tab_perso2 += "<table style='width: 100%;' id='table_perso_usu' name='table_perso_usu'>";
                tab_perso2 += "<thead class='thead_tab1'";
                    tab_perso2 += "<tr>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Usuario</th>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Nombres</th>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Contraseña</th>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Fecha de registro</th>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Cedula</th>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Administrador</th>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Correo</th>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Editar</th>";
                    tab_perso2 += "</tr>";
                tab_perso2 += "</thead>";
                tab_perso2 += "<tbody class='tbody_tab1' id='tbody_r'>";
                tab_perso2 += "</tbody>";
            tab_perso2 += "</table>";
    tab_perso2 += "</div>";
    tab_perso2 += "<div id='sin_fondo1'>";
    tab_perso2 += "</div>";
    tab_perso2 += "<div id='exp_soli'></div>";
    tab_perso2 += "</div>";

    return tab_perso2;
}
// TABLA DE TRANSACIONES USUARIOS COMOADMINISTRADORES
function tabla_trans_usuario(){
	let tab_perso2 = "<div class='p-3' style='width: 100%;'>";
        // tab_perso2 += "<div class='col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0 cont_col_tab1' style='padding: 0px;'>";
            tab_perso2 += "<div id='cont_2_tbl'>";
            tab_perso2 += "</div>";
            // tab_perso2 += "</div>"; 
            tab_perso2 += "<table style='width: 100%;' id='table_perso_adm_usu' name='table_perso_adm_usu'>";
                tab_perso2 += "<thead class='thead_tab1'";
                    tab_perso2 += "<tr>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Usuario</th>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Administrador</th>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Fecha</th>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Descripcion</th>";
                        tab_perso2 += "<th class='text-center tit_c_tab1'>Hora</th>";
                    tab_perso2 += "</tr>";
                tab_perso2 += "</thead>";
                tab_perso2 += "<tbody class='tbody_tab1' id='tbody_r'>";
                tab_perso2 += "</tbody>";
            tab_perso2 += "</table>";
    tab_perso2 += "</div>";
    tab_perso2 += "<div id='sin_fondo1'>";
    tab_perso2 += "</div>";
    tab_perso2 += "<div id='exp_soli'></div>";
    tab_perso2 += "</div>";

    return tab_perso2;
}