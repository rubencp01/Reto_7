

var regex_pref = /^(\+{1})(\d{1,4})$/;
var regex_correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var validado = false;
function comprobarCosas(){
    var nombre = document.getElementById("nom").value;
    var apellidos = document.getElementById("apes").value;
    var correo = document.getElementById("email").value;
    var pref_tel = document.getElementById("pref_tel").value;
    var num_tel = document.getElementById("num_tel").value;
    var usuario = document.getElementById("usuario").value;
    var dia_nac = document.getElementById("dia_nac").value;
    var mes_nac = document.getElementById("mes_nac").value;
    var anio_nac = document.getElementById("anio_nac").value;
    var contra = document.getElementById("contra").value;
    var repite_contra = document.getElementById("repite_contra").value;
    var tratamiento_datos = document.getElementById("tratamiento_datos");
    if(!validado){
        if(nombre===""){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "Introduce un nombre";
        }
        if(apellidos===""){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>Introduce unos apellidos";
        }
        if(num_tel===null||num_tel<100000000||num_tel>999999999){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>El número es incorrecto";
        }
        if(usuario===""){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>Introduce un nombre de usuario";
        }
        if(!regex_correo.test(correo)){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>El correo es incorrecto";
        }
        if(!(contra===repite_contra)){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>Las contraseñas no coinciden";
        }
        if(!regex_pref.test(pref_tel)){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>El prefijo no es correcto";
        }
        if(!validarFecha(dia_nac,mes_nac,anio_nac)){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>La fecha no es correcta";
        }
        validado = true;
    }else{
        validado = false
        tratamiento_datos.innerHTML = " ";
    }
}
function validarFecha ( d, m, a ){
    var ok = true;
    if( (a < 1900) || (a > 2050) || (m < 1) || (m > 12) || (d < 1) || (d > 31) ){
       ok = false;
    }else{
       if((a%4 != 0) && (m == 2) && (d > 28)){
          ok = false;
       }else{
          if( (((m == 4) || (m == 6) || (m == 9) || (m==11)) && (d>30)) || ((m==2) && (d>29)) ){
            ok = false;
          }
       }
    }
    return ok;
}

