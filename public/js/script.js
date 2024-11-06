/* eslint-disable no-undef */
function resetForm() {
  $("#modalForm")[0].reset();
}

$(document).ready(function () {
  $("#clear-form").click(function () {
    console.log("reset");
    resetForm();
  });

});


