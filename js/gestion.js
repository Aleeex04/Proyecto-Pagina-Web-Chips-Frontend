  function irAlta() {
  window.location.href = "alta.html";
}

function irLogin() {
  sessionStorage.removeItem('session');
  sessionStorage.removeItem('email');
  window.location.href = "index.html";
}


function verTabla() {
  let email = sessionStorage.getItem('email');
  let session = sessionStorage.getItem('session');
  var http = new XMLHttpRequest();
  http.open("GET", "http://localhost:8080/Proyecto_FarmaChip/ChipServlet?email=" + email + "&session=" + session, true);

  http.onload = function () {
    if (http.status === 200) {
      let responseHtml = http.response;
      let containerButtons = document.querySelector(".container-buttons");
      let tableContainer = document.getElementById("table-container");
      let closeButton = document.getElementById("ocultar-table-btn");
      tableContainer.innerHTML = responseHtml;
      tableContainer.classList.add("show");
      containerButtons.style.display = "none"; 
      closeButton.style.display = "flex"; 
    } else{
      console.error("Error en la solicitud"+ http.status);
    }
  }
  http.send();
}

function ocultarTabla() {
  let containerButtons = document.querySelector(".container-buttons");
  let tableContainer = document.getElementById("table-container");
  let closeButton = document.getElementById("ocultar-table-btn");
  tableContainer.classList.remove("show");
  containerButtons.style.display = "flex";
  closeButton.style.display = "none"; 
}




    