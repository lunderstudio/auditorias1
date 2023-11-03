$(document).ready(function () {
  addOptionSelect();
  load_option_event_change();
});

// Rellena los dropdawns
function addOptionSelect() {
  this.DatosDimensiones.forEach((option) => {
    $("#select-dimension").append(
      `<option value="${option.IdDimension}">
        ${option.Título} 
      </option>`
    );
  });
}

// Agrega el evento a los dropdawns
function load_option_event_change() {
  $("#select-dimension").change(function () {
    // var _value = $(this).val();
    cargar_dts_dimension()
  });
  
  $("#select-edicion").change(function () {
    // var _value = $(this).val();
    cargar_dts_dimension()
  });
}
