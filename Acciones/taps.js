// Func Tap Control Formato
function selectFormat(evt, format) {
  dropdawn_element(format);

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

document.getElementById("defaultOpen-indi").click();

function dropdawn_element(format) {
  console.log(format);
  if (format === "vista-tabla") {
    document.getElementById("dropdawn-ordenamiento").style.display = "block";
    document.getElementById("dropdawn-dimension").style.display = "none";
  } else if (format === "vista-mapa") {
    document.getElementById("dropdawn-ordenamiento").style.display = "none";
    document.getElementById("dropdawn-dimension").style.display = "block";
  }
}
