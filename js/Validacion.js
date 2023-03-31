// objeto.metodo(json)
$("#formulario1").validate({
    rules: {
        "txtNombre":{
            required: true
        },
        "txtApellido":{
            required: true
        },
        "txtEmail": {
            required: true,
            email: true
        },
        "txtTelefono":{
            
        },
        "txtContrasena": {
            required: true,
            minlength: 5
        },
        "txtRepetirContrasena": {
            required: true,
            equalTo: '#id_txtContrasena'
        }
    }, // --> Fin de reglas
    messages: {
        
        "txtNombre":{
            required: 'ingrese su nombre!'
        },
        "txtApellido":{
            required: 'ingrese su apellido!'
        },
        "txtEmail": {
            required: 'Ingrese email!!!',
            email: 'No cumple formato'
        },
        "txtContrasena": {
            required: 'Ingrese Password!!!',
            minlength: 'Min. 5 caract'
        },
        "txtRepetirContrasena": {
            required: 'Repita el Password!!',
            equalTo: ' deben ser iguales!!!!'
        }
    } //-->Fin de mensajes

});