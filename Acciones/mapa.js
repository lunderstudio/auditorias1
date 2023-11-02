const radio_color_avance = {
  Incipiente: "radio-avance-incipiente",
  Intermedio: "radio-avance-intermedio",
  "Mayor avance": "radio-avance-mayor",
};

$(document).ready(function () {
  cargar_dts_dimension();
  $("input[type=radio][name=options-base]").change(function () {
    var _idEdicion = this.getAttribute("data-idEdicion");
    var _idEstado = this.getAttribute("data-idEstado");
    var _idAvance = this.getAttribute("data-idAvance");
    var _idDimension = this.getAttribute("data-idDimension");
    console.log(
      _idEdicion + " : " + _idEstado + " : " + _idAvance + " : ",
      _idDimension
    );
  });
});

function cargar_dts_dimension() {
  var _resultados_dimension = [];
  var _idEdicion = "1";
  var _idDimension = "1";

//   Toma los datos de avance de la edicion
  _resultados_dimension = this.DatosAvance.filter(
    (x) => x.IdEdicion === _idEdicion
  );

//   Toma los datos de la dimension seleccionada
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
  });

  // Genera los radio buttons
  function generar_radio_btns(
    idEdicion,
    idEstado,
    Abrev,
    idAvance,
    IdDimension
  ) {
    var _radio = `
    <input type="radio" class="btn-check" name="options-base" id="opt-` +
      Abrev + `" autocomplete="off" data-idEdicion="`+idEdicion +`" 
    data-idEstado="` +idEstado+`" 
    data-idAvance="` +idAvance+`" 
    data-idDimension="` +IdDimension+`">
    <label class="btn ` +radio_color_avance[idAvance]+
      `" for="opt-` +Abrev + `"> 
    <div class="lbl-estado">` +Abrev + `</div>
    </label>`;

    return _radio;
  }
}
