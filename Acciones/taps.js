// Func Tap Control Formato
function selectFormat(evt, format) {
  hide_show_dropdawn(format);
  clean_cards();
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(format).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// Funct Tap Control Vista (evaluacion o resumen)
function selectVista(evt, vista) {
  btn_evaluacion_card(vista);
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent-indi");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks-indi");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(vista).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("btn-ver-resumen").click();

// Muestra y quita los dropdawns cuando seleccionas el formato de vista
function hide_show_dropdawn(format) {
  if (format === "vista-tabla") {
    document.getElementById("dropdawn-ordenamiento").style.display = "block";
    document.getElementById("dropdawn-dimension").style.display = "none";
  } else if (format === "vista-mapa") {
    document.getElementById("dropdawn-ordenamiento").style.display = "none";
    document.getElementById("dropdawn-dimension").style.display = "block";
  }
}

function btn_evaluacion_card(vista) {
  if (vista === "vista-resumen") {
    document.getElementById("btn-ver-resumen").style.display = "none";
    document.getElementById("btn-ver-evaluacion").style.display = "block";
  } else if (vista === "vista-evaluacion") {
    document.getElementById("btn-ver-resumen").style.display = "block";
    document.getElementById("btn-ver-evaluacion").style.display = "none";
  }
}
