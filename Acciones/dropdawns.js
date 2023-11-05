

// Rellena los dropdawns
function cargar_dropdawns() {

  // Cargan datos de edicion dropdawn
  this.DatosEdiciones.forEach((option) => {
    $("#select-edicion").append(
      `<option value="${option.IdEdicion}">
        ${option.Edicion} 
      </option>`
    );
  });

  // Cargan datos de dimencion dropdawn
  this.DatosDimensiones.forEach((option) => {
    $("#select-dimension").append(
      `<option value="${option.IdDimension}">
        ${option.Título} 
      </option>`
    );
  });

  load_option_event_change();
}

// Agrega el evento a los dropdawns
function load_option_event_change() {
  $("#select-dimension").change(function () {
    // var _value = $(this).val();
    cargar_vista_mapa();
    cargar_vista_tabla();
  });
  
  $("#select-edicion").change(function () {
    // var _value = $(this).val();
    cargar_vista_mapa();
    cargar_vista_tabla();
  });
}
