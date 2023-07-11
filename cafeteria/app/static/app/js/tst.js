$("#btn-cargar").click(function (event) {
    event.preventDefault();
    
    var url = "https://fakestoreapi.com/products";
    
    // Generar un número entero aleatorio entre 0 y 2
    const min = 0;
    const max = 2;
    const RAND = Math.floor(Math.random() * (max - min + 1)) + min;
    
    var $RND = RAND; 
    
    
    //   fetch(url)
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    
    
        fetch(url)
            .then(response => response.json())
            .then(data => 
                {
                    var $nombre_cafe = $('<h1>').text(data[$RND].title);
                    var $descripcion = $('<p>').text(data[$RND].description);
                    var $ingredientes = $('<p>').text(data[$RND].ingredients);
                    var $foto_cafe = $("<p><img src='" + data[$RND].image + "'></p>")
                    // para limpiar el contedor antes de desplegar
                    $("#info").empty();
                    $('#info')
                        .append($nombre_cafe)
                        .append($descripcion)
                        .append($ingredientes)
                        .append($foto_cafe);
            
                })
            .catch(error => console.error(error));
    
    
    });
    