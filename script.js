//Color de los enlaces en la barra de navegacion
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Función para cambiar el color del texto
    function changeTextColor(element, color) {
      element.style.color = color;
    }
  
    // Añadir los eventos de mouseover y mouseout a cada enlace
    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => changeTextColor(link, 'black'));
      link.addEventListener('mouseout', () => changeTextColor(link, 'white')); // Color original
    });
  });

//Para resetear el formulario
/* <script>
  function resetForm() {
    document.getElementById('Contacto').reset();
    alert("Formulario enviado y reseteado!");
}
</script> */
  //Boton de Formulario
document
.querySelector('button[type="submit"]')
.addEventListener("click", function (event) {
  event.preventDefault(); // Evita el envío del formulario para demostración
  alert("Formulario enviado!");
});
  