// VARIABLES GLOBALES
const btn_color_avance = {
  Incipiente: "btn-avance-incipiente",
  Intermedio: "btn-avance-intermedio",
  "Mayor avance": "btn-avance-mayor",
};

function cargar_vista_tabla() {
  var _idEdicion = $("#select-edicion option:selected").val();
  var _ordenamiento = $("#select-ordenamiento option:selected").val();
  this.clean_tabla();
  // Generar Tabla Dinamica
  const table = document.getElementById("tableBody");
  //   Toma los datos de avance de la edicion

  var _edicion_dimension = this.DatosAvance.filter(
    (x) => x.IdEdicion == _idEdicion
  );

  if (_edicion_dimension.length > 0) {
    DatosEstados.forEach((estado) => {
      var _index = estado[_ordenamiento] - 1;
      var _idEstado = DatosEstados[_index].IdEstado - 1;
      var _estado = DatosEstados[_index].Estado;
      var _dimension = _edicion_dimension[_idEstado];

      let row = table.insertRow();
      // For para crear 11 celdas
      for (let index = 0; index <= 10; index++) {
        if (index === 0) {
          let name_estado = row.insertCell(index);
          name_estado.innerHTML = _estado;
          name_estado.className = "row-estado";
        } else {
          let dimension = row.insertCell(index);
          dimension.innerHTML = crear_btns_tabl(
            _dimension.IdEdicion,
            _dimension.IdEstado,
            _dimension[index],
            index
          );
        }
      }
    });
  }
}

function crear_btns_tabl(idEdicion, idEstado, idAvance, IdDimension) {
  var _button =
    `<div class="div-btn-avance">
      <button class="btn ` +
    btn_color_avance[idAvance] + `"data-idEdicion="` +
    idEdicion + `"data-idEstado="` +
    idEstado + `"data-idAvance="` +
    idAvance + `"data-idDimension="` +
    IdDimension + `"onclick="select_estado_dimension(event,this)">
      </button>
    </div>`;
  return _button;
}

function select_estado_dimension(event, data) {
  $(".div-btn-avance button").removeClass("active");
  event.currentTarget.className += " active";
  
  var _idEdicion = data.getAttribute("data-idEdicion");
  var _idEstado = data.getAttribute("data-idEstado");
  var _idAvance = data.getAttribute("data-idAvance");
  var _idDimension = data.getAttribute("data-idDimension");

  localStorage.setItem("_edicion", _idEdicion);
  localStorage.setItem("_estado", _idEstado);
  localStorage.setItem("_avance", _idAvance);

  fill_card_resumen(_idEdicion, _idEstado, _idAvance, _idDimension);
  fill_card_evaluacion(_idEdicion, _idEstado, _idAvance, _idDimension);
}

function fill_card_resumen(_idEdicion, _idEstado, _idAvance, _idDimension) {
  var _estado = DatosEstados.find((id) => id.IdEstado === _idEstado).Estado;
  var _desc_dimension = DatosDimensiones.find(
    (id) => id.IdDimension === _idDimension
  );
  var _dimension_titulo = _desc_dimension.IdDimension + " " + _desc_dimension.Título;
  var _dimension_desc = _desc_dimension.Descripción;

  $("#resumen_estado").text(_estado);
  $("#resumen_titulo_dimension").text(_dimension_titulo);
  $("#resumen_avance_dimension").text(_idAvance);
  $("#resumen_desc_dimension").text(_dimension_desc);
}

function fill_card_evaluacion(_idEdicion, _idEstado, _idAvance, _idDimension) {
  var _estado = DatosEstados.find((id) => id.IdEstado === _idEstado).Estado;
  var _datos_indicadores = DatosIndicadores.filter(
    (data) => data.IdDimension === _idDimension
  );
  var _titulo_indicador = "";
  var _respuesta;

  $("#resultados_evaluacion").html("");
  _datos_indicadores.forEach((element, index) => {
    var _indicador = "Indicador" + (index + 1);
    _titulo_indicador = element.TítuloIndicador;
    _respuesta = DatosResultados.find(
      (x) =>
        x.IdEdicion == _idEdicion &&
        x.IdDimension == _idDimension &&
        x.IdEstado == _idEstado
    );

    $("#evaluacion_estdo").text(_estado);
    var _evaluaciones = `
    <div class="div-datos-evaluacion">
      <p class="div-pregunta-evaluacion">` +
      _titulo_indicador +
      `</p>
      <p class="div-respuesta-evaluacion">` +
      _respuesta[_indicador] +
      `</p>
    </div>`;
    $("#resultados_evaluacion").append(_evaluaciones);
  });
}

function clean_tabla() {
  $("#tableBody").empty();
}