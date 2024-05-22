$(document).ready(function() {
    $('.container').fadeIn('slow'); 
    
    $('#registroForm').submit(function(event) {
        event.preventDefault(); 
        
     
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var edad = $('#edad').val();
        var email = $('#email').val();
        var comuna = $('#comuna').val();
        var direccion = $('#direccion').val();

  
        if (nombre === '' || apellido === '' || edad === '' || email === '' || comuna === '' || direccion === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

       
        var formData = {
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            email: email,
            comuna: comuna,
            direccion: direccion
        };

        
        $.ajax({
            url: 'tu_endpoint_de_registro',
            method: 'POST',
            data: formData,
            success: function(response) {
                console.log('Registro exitoso:', response);
              
                alert('¡Registro exitoso!');
            },
            error: function(xhr, status, error) {
                console.error('Error en el registro:', error);
              
                alert('Error en el registro. Inténtelo de nuevo más tarde.');
            }
        });

        
        $('#registroForm')[0].reset();
    });
});
