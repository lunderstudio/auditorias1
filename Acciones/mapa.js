const radio_color_avance = {
  Incipiente: "radio-avance-incipiente",
  Intermedio: "radio-avance-intermedio",
  "Mayor avance": "radio-avance-mayor",
};

function cargar_vista_mapa() {
  var _resultados_dimension = [];
  var _idEdicion = $("#select-edicion option:selected").val();
  var _idDimension = $("#select-dimension option:selected").val();

  //   Toma los datos de avance de la edicion
  _resultados_dimension = this.DatosAvance.filter(
    (x) => x.IdEdicion == _idEdicion
  );

  // Valida si hay datos iIEdicion y IdDimension
  this.clean_mapa();
  //   Toma los datos de la dimension seleccionada [Array]
  _resultados_dimension.forEach((dimension) => {
    var _Abrev = this.DatosEstados.find(
      (id) => id.IdEstado === dimension.IdEstado
    ).Abrev;

    // Genera los radio buttons
    var _radio = generar_radio_btns(
      dimension.IdEdicion,
      dimension.IdEstado,
      _Abrev,
      dimension[_idDimension],
      _idDimension
    );
    // Selecciona el div donde se inserta el radio btn
    var _sector = "radio-" + _Abrev;
    $("#" + _sector).append(_radio);
    this.load_map_event_change();
  });
}

function load_map_event_change() {
  $("input[type=radio][name=options-base]").change(function () {

    var _idEdicion = this.getAttribute("data-idEdicion");
    var _idEstado = this.getAttribute("data-idEstado");
    var _idAvance = this.getAttribute("data-idAvance");
    var _idDimension = this.getAttribute("data-idDimension");

    fill_card_resumen(_idEdicion, _idEstado, _idAvance, _idDimension);
    fill_card_evaluacion(_idEdicion, _idEstado, _idAvance, _idDimension);
  });
}

// Genera los radio buttons
function generar_radio_btns(idEdicion, idEstado, Abrev, idAvance, IdDimension) {
  var _radio =
    `<input type="radio" class="btn-check" name="options-base" id="opt-` +
    Abrev +
    `" autocomplete="off" data-idEdicion="` +
    idEdicion +
    `" data-idEstado="` +
    idEstado +
    `" data-idAvance="` +
    idAvance +
    `" data-idDimension="` +
    IdDimension +
    `"><label class="btn ` +
    radio_color_avance[idAvance] +
    `" for="opt-` +
    Abrev +
    `"><div class="lbl-estado">` +
    Abrev +
    `</div></label>`;

  return _radio;
}

function clean_mapa() {
  this.DatosEstados.forEach((estado) => {
    $("#radio-" + estado.Abrev).empty();
  });
}
