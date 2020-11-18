

var regex_pref = "/^+(\d{1-4})$/";
var regex_correo = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/"
function comprobarCosas(){
    var nombre = document.getElementById("nom");
    var apellidos = document.getElementById("apes");
    var correo = document.getElementById("email");
    var pref_tel = document.getElementById("pref_tel");
    var num_tel = document.getElementById("num_tel");
    var usuario = document.getElementById("usuario");
    var dia_nac = document.getElementById("dia_nac");
    var mes_nac = document.getElementById("mes_nac");
    var anio_nac = document.getElementById("anio_nac");
    var enviar = document.getElementById("enviar");
    var contra = document.getElementById("contra");
    var repite_contra = document.getElementById("repite_contra");
    var tratamiento_datos = document.getElementById("tratamiento_datos");
    console.log(pref_tel.value);
    if(pref_tel.value.match(regex_correo)){
        tratamiento_datos.innerHTML = "todo puta madre"
    }else{
        tratamiento_datos.innerHTML = "El correo es incorrecto";
    }
    if(contra==repite_contra){
        tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>Las contraseñas coinciden";
    }else{
        tratamiento_datos.innerHTML = tratamiento_datos.innerHTML + "<br>Las contraseñas no coinciden";
    }
}

