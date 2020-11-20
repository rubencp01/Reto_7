var regex_pref = /^(\+{1})(\d{1,4})$/;
var regex_correo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var validado = false;
var nombreCorrecto = false;
var apeCorrectos = false;
var correoCorrecto = false;
var contrasCorrecta = false;
var prefCorrecto = false;
var numCorrecto = false;
var usuCorrecto = false;
var fechaCorrecta = false;
var comenCorrecto = false;

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
    var comentario = document.getElementById("comentarios").value;
    var tratamiento_datos = document.getElementById("tratamiento_datos");
    var desbloqueo = document.getElementById("desbloqueo");
    if(!validado){
        if(nombre===""){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "Introduce un nombre";
        }else{
            nombreCorrecto = true;
        }
        if(apellidos===""){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>Introduce unos apellidos";
        }else{
            apeCorrectos = true;
        }
        if(!regex_correo.test(correo)){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>El correo es incorrecto";
        }else{
            correoCorrecto = true;
        }
        if(!(contra===repite_contra||(contra===""&&repite_contra===""))){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>Las contraseñas no coinciden";
        }else{
            contrasCorrecta = true;
        }
        if(!regex_pref.test(pref_tel)){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>El prefijo no es correcto";
        }else{
            prefCorrecto = true;
        }
        if(num_tel===null||num_tel<100000000||num_tel>999999999){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>El número es incorrecto";
        }else{
            numCorrecto = true;
        }
        if(usuario===""){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>Introduce un nombre de usuario";
        }else{
            usuCorrecto = true;
        }
        if(!validarFecha(dia_nac,mes_nac,anio_nac)){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>La fecha no es correcta";
        }else{
            fechaCorrecta = true;
        }
        if(comentario==""){
            tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>Tus comentarios nos ayudan a mejorar, por favor, introduce alguno";
        }else{
            comenCorrecto = true;
        }
        validado = true;
        if(nombreCorrecto&&apeCorrectos&&correoCorrecto&&contrasCorrecta&&prefCorrecto&&numCorrecto&&usuCorrecto&&fechaCorrecta&&comenCorrecto){
            desbloqueo.innerHTML = "Inscripcion completada<br>Enhorabuena, has desbloqueado el minijuego!<br>"+
            "...<br>...<br>...<br>Es broma, hasta ahí no llego :P";
            document.getElementById("nom").value = "";
            document.getElementById("apes").value = "";
            document.getElementById("email").value = "";
            document.getElementById("pref_tel").value = "";
            document.getElementById("num_tel").value = null;
            document.getElementById("usuario").value = "";
            document.getElementById("dia_nac").value = null;
            document.getElementById("mes_nac").value = null;
            document.getElementById("anio_nac").value = null;
            document.getElementById("contra").value = "";
            document.getElementById("repite_contra").value = "";
            tratamiento_datos.innerHTML = " ";
            alert("Registro completado");
        }
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