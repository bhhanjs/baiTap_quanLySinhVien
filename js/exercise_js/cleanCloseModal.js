
const cleanCloseModal = function(){
  $('#myModal').on('hidden.bs.modal', function () {
    $('#form-modal').trigger('reset'); // Resets the form fields
  
    let tknv =document.getElementById("tknv")
    if (tknv.readOnly){
      tknv.readOnly = false
    }
  
    let spanErrors = document.querySelectorAll(".sp-thongbao")
    for (let span of spanErrors){
      if (span.classList.contains("displayBlock")){
        span.classList.remove("displayBlock")
      }
    }
  });
} 

export default cleanCloseModal
