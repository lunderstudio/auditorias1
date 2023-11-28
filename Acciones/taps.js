// Func Tap Control vistao
function select_vista(evt, vista) {
  hide_show_dropdawn(vista);
  change_img(vista);
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
  document.getElementById(vista).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// Funct Tap Control Vista (evaluacion o resumen)
function select_card(evt, vista) {
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

// Muestra y quita los dropdawns cuando seleccionas el vistao de vista
function hide_show_dropdawn(vista) {
  if (vista === "vista-tabla") {
    document.getElementById("dropdawn-ordenamiento").style.display = "block";
    document.getElementById("dropdawn-dimension").style.display = "none";
  } else if (vista === "vista-mapa") {
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

function change_img(vista) {
  if (vista === "vista-tabla") {
    $("#img_tabla").attr("src", "src/tabla_active.svg");
    $("#img_mapa").attr("src", "src/map_default.svg");
  } else if (vista === "vista-mapa") {
    $("#img_tabla").attr("src", "src/tabla_default.svg");
    $("#img_mapa").attr("src", "src/map_active.svg");
  }
  localStorage.removeItem("_edicion");
  localStorage.removeItem("_estado");
}

function descargar_ficha(){
  var _idEdicion = localStorage.getItem("_edicion");
  var _idEstado = localStorage.getItem("_estado");

  if(_idEstado != null){
    link = DatosFichas.find(
      (x) =>
        x.idEdicion == _idEdicion &&
        x.idEstado == _idEstado
    );
    if(link.vinculo != "null")
      window.open(link.vinculo);
    
  }
}