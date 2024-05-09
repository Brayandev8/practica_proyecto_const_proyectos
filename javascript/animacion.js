        // Función que se ejecuta al enviar el formulario
        document.getElementById('nombreForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

            // Obtén el nombre ingresado por el usuario
            var nombreMadre = document.getElementById('nombreMadre').value;

            // Personaliza el saludo en la carta con el nombre ingresado
            var saludo = document.getElementById('saludo');
            saludo.textContent = `Querida ${nombreMadre},`;

            // Muestra la carta
            document.getElementById('cartaMadre').style.display = 'block';
        });
