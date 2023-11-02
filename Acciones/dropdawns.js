$(document).ready(function () {
  addOptionSelect();

//   $("#select-dimension").change(function () {
//     $("#select-dimension").val($(this).val());
//     // console.log($(this).val());
//     cargar_dts_dimension()
//   });
});
function addOptionSelect() {
  this.DatosDimensiones.forEach((option) => {
    $("#select-dimension").append(
      `<option value="${option.IdDimension}">
        ${option.Título} 
      </option>`
    );
  });
}
