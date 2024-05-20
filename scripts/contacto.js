function validateForm() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var email = document.getElementById("email").value;
  var consulta = document.getElementById("consulta").value;
  var genero = document.querySelector('input[name="genero"]:checked');
  var pais = document.getElementById("paises").value;

  if (
    nombre === "" ||
    apellido === "" ||
    email === "" ||
    consulta === "" ||
    !genero ||
    pais === ""
  ) {
    alert("Por favor complete todos los campos del formulario.");
  } else {
    // Aquí puedes redirigir al usuario a index.html o enviar el formulario
    alert("Muchas gracias! A la brevedad nos contactaremos por su consulta.");
    window.location.href = "../index.html";
  }
}
