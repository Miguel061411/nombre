document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;

    var mensaje = "Tu nombre es " + nombre + " y tienes " + edad + " años.";
    
    document.getElementById('mensaje').innerText = mensaje;
});