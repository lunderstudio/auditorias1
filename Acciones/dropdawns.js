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
        ${option.IdDimension} ${option.Título} 
      </option>`
    );
  });

  load_option_event_change();
}

// Agrega el evento a los dropdawns
function load_option_event_change() {
  // Evento change dimension
  $("#select-dimension").change(function () {
    // var _value = $(this).val();
    cargar_vista_mapa();
    cargar_vista_tabla();

    var _idEstado = localStorage.getItem("_estado");
    var _idAvance = localStorage.getItem("_avance");
    var _idEdicion = $("#select-edicion option:selected").val();
    var _idDimension = $("#select-dimension option:selected").val();

    fill_card_resumen(_idEdicion, _idEstado, _idAvance, _idDimension);
    fill_card_evaluacion(_idEdicion, _idEstado, _idAvance, _idDimension);
  });

  // Avento change Edicion
  $("#select-edicion").change(function () {
    var _value = $(this).val();
    var _edicion_dimension = DatosAvance.filter(
      (x) => x.IdEdicion == _value
    );

    if(_edicion_dimension.length == 0)
      clean_cards();

    cargar_vista_mapa();
    cargar_vista_tabla();
  });

   // Avento change Ordenamiento
   $("#select-ordenamiento").change(function () {
    cargar_vista_tabla();
  });
}
