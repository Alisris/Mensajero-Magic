// Función para obtener parámetros de la URL
function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Función para mostrar el texto recibido
function displayReceivedText() {
  const text = getQueryParameter('text');
  const receivedTextDiv = document.getElementById('received-text');
  
  if (text) {
    receivedTextDiv.innerHTML = `<p><strong>Texto recibido:</strong> ${text}</p>`;
  } else {
    receivedTextDiv.innerHTML = `<p>No se ha recibido texto.</p>`;
  }
}

// Función para volver al Proyecto 1
function goBack() {
  window.location.href = 'https://mi-sitio1.com/index.html';
}

// Llamar a la función que muestra el texto recibido al cargar la página
displayReceivedText();
