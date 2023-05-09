$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        "txtNombre" : {
          required: true,
          minlength: 5
        },
        "txtAge": {
          required: true,
          number: true,
          min: 18
        },
        "txtEmail": {
            required: true,
            email: true
        },
        "txtContrasena": {
            required: true,
            minlength: 5
        },
        "txtRepetirContrasena": {
            required: true,
            equalTo: '#id_txtContrasena'
        },
      },
      messages : {
        "txtNombre": {
          required: "Porfavor ingresa tu Nombre",
          minlength: "El nombre tiene que ser 5 caracteres"
        },
        "txtAge": {
          required: "Porfavor ingresa tu edad",
          number: "Porfavor ingresa tu edad con numeros",
          min: "Tienes que tener 18 años"
        },
        "txtEmail": {
            required: 'Ingrese su email!!!',
            minlength: 'Min. 5 caract'
        },
        "txtContrasena": {
            required: 'Ingrese Password!!!',
            minlength: 'Min. 5 caract'
        },
        "txtRepetirContrasena": {
            required: 'Repita el Password!!',
            equalTo: ' deben ser iguales!!!!'
        }
      }
    });
  });