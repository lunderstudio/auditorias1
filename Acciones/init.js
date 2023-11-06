$(document).ready(function () {
  cargar_dropdawns();
  cargar_vista_mapa();
  cargar_vista_tabla();
  clean_cards();

  localStorage.removeItem("_estado");
  localStorage.removeItem("_avance");
});

function clean_cards(){
  $("#resumen_estado").text('Seleccione un Indicador.');
  $("#resumen_titulo_dimension").text('Sin seleccion');
  $("#resumen_avance_dimension").text('Sin seleccion');
  $("#resumen_desc_dimension").text('');
  $("#evaluacion_estdo").text('Seleccione un Indicador.');
  $("#resultados_evaluacion").empty();
}