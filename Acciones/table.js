// VARIABLES GLOBALES
const btn_color_avance = {
  Incipiente: "btn-avance-incipiente",
  Intermedio: "btn-avance-intermedio",
  "Mayor avance": "btn-avance-mayor",
};

// Generar Tabla Dinamica
const table = document.getElementById("tableBody");
DatosAvance.map((dimension) => {
  let row = table.insertRow();

  let estado = row.insertCell(0);
  let dimension1 = row.insertCell(1);
  let dimension2 = row.insertCell(2);
  let dimension3 = row.insertCell(3);
  let dimension4 = row.insertCell(4);
  let dimension5 = row.insertCell(5);
  let dimension6 = row.insertCell(6);
  let dimension7 = row.insertCell(7);
  let dimension8 = row.insertCell(8);
  let dimension9 = row.insertCell(9);
  let dimension10 = row.insertCell(10);

  estado.innerHTML = DatosEstados.find(
    (id) => id.IdEstado === dimension.IdEstado
  ).Estado;
  estado.className = "row-estado";

  dimension1.innerHTML = crear_botones(
    dimension.IdEdicion,
    dimension.IdEstado,
    dimension[1],
    1
  );
  dimension1.className = "row-dimension";

  dimension2.innerHTML = crear_botones(
    dimension.IdEdicion,
    dimension.IdEstado,
    dimension[2],
    2
  );
  dimension2.className = "row-dimension";

  dimension3.innerHTML = crear_botones(
    dimension.IdEdicion,
    dimension.IdEstado,
    dimension[3],
    3
  );
  dimension3.className = "row-dimension";

  dimension4.innerHTML = crear_botones(
    dimension.IdEdicion,
    dimension.IdEstado,
    dimension[4],
    4
  );
  dimension4.className = "row-dimension";

  dimension5.innerHTML = crear_botones(
    dimension.IdEdicion,
    dimension.IdEstado,
    dimension[5],
    5
  );
  dimension5.className = "row-dimension";

  dimension6.innerHTML = crear_botones(
    dimension.IdEdicion,
    dimension.IdEstado,
    dimension[6],
    6
  );
  dimension6.className = "row-dimension";

  dimension7.innerHTML = crear_botones(
    dimension.IdEdicion,
    dimension.IdEstado,
    dimension[7],
    7
  );
  dimension7.className = "row-dimension";

  dimension8.innerHTML = crear_botones(
    dimension.IdEdicion,
    dimension.IdEstado,
    dimension[8],
    8
  );
  dimension8.className = "row-dimension";

  dimension9.innerHTML = crear_botones(
    dimension.IdEdicion,
    dimension.IdEstado,
    dimension[9],
    9
  );
  dimension9.className = "row-dimension";

  dimension10.innerHTML = crear_botones(
    dimension.IdEdicion,
    dimension.IdEstado,
    dimension[10],
    10
  );
  dimension10.className = "row-dimension";
});

function crear_botones(idEdicion, idEstado, idAvance, IdDimension) {
  var _button =
    `<div class="div-btn-avance">
      <button class="btn ` +btn_color_avance[idAvance] +`"
        data-idEdicion="` +idEdicion +`" 
        data-idEstado="` +idEstado +`" 
        data-idAvance="` +idAvance +`" 
        data-idDimension="` +IdDimension +`"
        onclick="select_dimencion(this)">
      </button></div>`;
  return _button;
}

function select_dimencion(data) {
  var _idEdicion = data.getAttribute("data-idEdicion");
  var _idEstado = data.getAttribute("data-idEstado");
  var _idAvance = data.getAttribute("data-idAvance");
  var _idDimension = data.getAttribute("data-idDimension");

  fill_card_resumen(_idEdicion, _idEstado, _idAvance, _idDimension);
}

function fill_card_resumen(_idEdicion, _idEstado, _idAvance, _idDimension) {
  var _estado = DatosEstados.find((id) => id.IdEstado === _idEstado).Estado;
  var _desc_dimension = DatosDimensiones.find(
    (id) => id.IdDimension === _idDimension
  );
  var _dimension_titulo = _desc_dimension.Título;
  var _dimension_desc = _desc_dimension.Descripción;

  $("#resumen_estado").text(_estado);
  $("#resumen_titulo_dimension").text(_dimension_titulo);
  $("#resumen_avance_dimension").text(_idAvance);
  $("#resumen_desc_dimension").text(_dimension_desc);
}
