const envoltorio = document.querySelector('.envoltorio');
const enlacelogin = document.querySelector('.enlace-login');
const enlaceregister = document.querySelector('.enlace-registro');
const botonPopup = document.querySelector('.botonlogin');
const iconocerrar = document.querySelector('.icono-cerrar');


enlaceregister.addEventListener('click', ()=> {
    envoltorio.classList.add("active");
});

enlacelogin.addEventListener('click', ()=> {
    envoltorio.classList.remove("active");
});

botonPopup.addEventListener('click', ()=> {
    envoltorio.classList.add("active-popup");
});

iconocerrar.addEventListener('click', ()=> {
    envoltorio.classList.remove("active-popup");


    const camposEntrada = envoltorio.querySelectorAll('input');
    camposEntrada.forEach(campo => {
        campo.value = '';


        const checkboxRecuerdame = envoltorio.querySelector('input[type="checkbox"]');
        checkboxRecuerdame.checked = false;
    });
});


function iniciarSesion(){

  // asignar los valores introducidos a variables locales
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  var http = new XMLHttpRequest();
  http.open("GET","http://localhost:8080/Proyecto_FarmaChip/LoginServlet?email=" + email + "&password="+ password,true);

  http.onreadystatechange = function(){
      // Verifica si el estado de la respuesta es 200 ( que signica éxito) para continuar .
      if(this.readyState== 4 && http.status==200){
          //Obtiene el texto de la respuesta de la solicitud HTTP
          var session = http.responseText;
          if(session !==null){
              //Almacena el valor de la sesión en el almacenamiento de sesión del navegador y lo mismo pasa con el email
              sessionStorage.setItem("session",session)
              sessionStorage.setItem("email",email);
              // Se pone página de gestión,ya que el login ha sido un exito
              window.location.href = "gestion.html";
          } else{
              alert("Sesion interrumpida.Vuelva a intentarlo.")
          }
      }
  }
  http.send();
}

const iconoPassword = document.getElementById('icono-password');
const passwordInput = document.getElementById('password');

iconoPassword.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    iconoPassword.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon> <ion-icon name="lock-closed"></ion-icon>';
  } else {
    passwordInput.type = 'password';
    iconoPassword.innerHTML = '<ion-icon name="eye-outline"></ion-icon> <ion-icon name="lock-closed"></ion-icon>';
  }
});

