/** LOADING PAGE EVENT
 * - Getting data from localStorage => tranform data into an array
 * - Check if data is false, arrayNV = []
 * - Check if data is true, assign data array to arrayNV => Render data to UI
 */


/** BUTTONS EVENT: 
 * - Adding nv info
 * - Updating nv info
 * - Deleting nv info
 * - Searching to sort button
 */


/** ADDING NV EVENT
 * 1. Getting nv data from the form 
 * - Dom to the adding nv button => add onlick event
 * - Dom to the form tag, select all the inputs and selects by querySelectorAll => return a Nodelist of DOMs 
 * - Create an empty nv object
 * - Loop through the Nodelist => get id and value attribute to add into nv object the => object[id] = value
 * - Push the new objet into the arrayNv (already created in global)
 * 
 * 2. Validation 
 * - Validating data in the new object nv => return true/ false
 * - If false => return and show span alerts
 * - If true => adding object into the arrayNV
 * 
 * 3. Local Storage
 * - Store the arrayNV into the localStorage
 * 
 * 4. Rendering nv data on table 
 * a. Calculate salary nv
 * b. Classify nv
 * - Loop through the arrNV => getting object data to create the html content 
 * + Way 1: Using map() + join()
 * + Way 2: Using loop for of + operator: content +=
 * - Dom to table element => render data by innerHTML
 * - Reset the form data empty
 */


/** UPDATING NV EVENT: 2 UPDATE EVENTS
 * 1. Getting data of the updated nv and render on the form
 * - Get the id of the nv that need to be updated
 * - Use the id to find the index of updated nv in arrayNV => findIndex()
 * - Getting the object of updated nv
 * - Open the form modal
 * - Dom to the form filled up value of the form by the updated nv object
 * - Prevent user modify TKNV by setting readOnly attribute = true
 * 
 * 2. 
 */


/** DELETING NV EVENT
 * - Get the id of the nv that need to be delete 
 * - Use the id the looking for the index of the nv that we want to delete in arrayNV
 * - Use the splice(index, number element to delete) to delete the nv
 * - Save/ Update change to localStorage
 * - Re-render the arrayNV to UI
 */


/** SEARCHING NV BASE ON CLASSIFICATION
 * - Getting search key word when the user click search
 * - Transform data: toLowerCase, remove vietnamese tones 
 * - Loop through the arrayNV with filter ()
 * - In the filter callback function. Get the attribute gio lam of each nv => computing into xep loai data =>  Compare xep loai data and search data => return into an new array
 * - rendering the new array into UI
 */


/** VALIDATION
 * - Create a flag variable to check boolean value true/ false 
 * - Validating empty by & operator => change flag into true or false 
 * - Validating each input by operator => change flag value into true or false again
 * - Flag false => return
 * - Flage true => keep processing
 * 
 */

/////////////////////////////////////////////
// VARIBALE & SUPPORT FUNCTION
import {DATA_NAME_LOCAL, SEP, TRUONG_PHONG, NHAN_VIEN, ERROR_MSG, REGEX_ACCOUNT, REGEX_EMAIL, REGEX_NAME, REGEX_PASSWORD, REGEX_DATE} from "./data.js"

import { saveNVLocal, getNVLocal } from "./localstorage.js"
import renderListNV, {classifyNV} from "./renderUI.js"
import resetForm from "./resetForm.js"
import removeVietnameseTones from "../../util/util.js"
import { notEmpty, validInputs, rangeNumber, validPosition} from "./validation.js"
import searchXepLoai from "./search-xepLoai.js"
import cleanCloseModal from "./cleanCloseModal.js"



// LOADING PAGE
let arrNhanVien= getNVLocal(DATA_NAME_LOCAL)
if (arrNhanVien.lenth !== 0){
  renderListNV(NHAN_VIEN, TRUONG_PHONG, SEP, arrNhanVien)
}


// ADDING NEW NV eventListener
document.getElementById("btnThemNV").onclick = function(){
  // 1. Getting nv data from the form 
  let arrFiels = document.querySelectorAll("#form-modal input, #form-modal select")
  let newNhanVien= {}
  for (let field of arrFiels){
    let {id, value} = field
    newNhanVien[id]= value
  }

  // 2. Validation 
  let tbTKNV = document.getElementById("tbTKNV")
  let tbTen = document.getElementById("tbTen")
  let tbEmail = document.getElementById("tbEmail")
  let tbMatKhau = document.getElementById("tbMatKhau") 
  let tbNgay = document.getElementById("tbNgay")
  let tbLuongCB = document.getElementById("tbLuongCB")
  let tbChucVu = document.getElementById("tbChucVu")
  let tbGiolam = document.getElementById("tbGiolam")
  let valid // flag variable 

  // Validating empty
  let empty = notEmpty(newNhanVien.tknv, tbTKNV, ERROR_MSG)
  & notEmpty(newNhanVien.name, tbTen, ERROR_MSG)
  & notEmpty(newNhanVien.email,tbEmail, ERROR_MSG)
  & notEmpty(newNhanVien.password,tbMatKhau, ERROR_MSG)
  & notEmpty(newNhanVien.datepicker,tbNgay, ERROR_MSG)
  & notEmpty(newNhanVien.luongCB,tbLuongCB, ERROR_MSG)
  & notEmpty(newNhanVien.chucvu,tbChucVu, ERROR_MSG)
  & notEmpty(newNhanVien.gioLam,tbGiolam, ERROR_MSG)
  console.log(empty)
  valid = empty === 1? true : false
  if(!valid) return

 // Validating each input
  const multiValids=  function(){
    let valids = validInputs(newNhanVien.tknv, tbTKNV, "Tài khoản tối đa 4 - 6 ký số", REGEX_ACCOUNT) 
    & validInputs(newNhanVien.name, tbTen, "Tên nhân viên phải là chữ", REGEX_NAME) 
    & validInputs(newNhanVien.email,tbEmail, "Email phải đúng định dạng", REGEX_EMAIL) 
    & validInputs(newNhanVien.password,tbMatKhau, "mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)", REGEX_PASSWORD)
    & validInputs(newNhanVien.datepicker,tbNgay, "định dạng mm/dd/yyyy",REGEX_DATE)
    & rangeNumber(newNhanVien.luongCB, tbLuongCB, "Lương cơ bản 1 000 000 - 20 000 000", 1000000, 20000000)
    & rangeNumber(newNhanVien.gioLam, tbGiolam, "Số giờ làm trong tháng 80 - 200 giờ",80, 200)
    & validPosition(newNhanVien.chucvu,tbChucVu, "Chức vụ phải chọn chức vụ hợp lệ", removeVietnameseTones)
    return valids === 1? true :false
  }
  valid = multiValids()

  if (!valid) return
  if (valid) {
    // 3. LocalStorage 
    arrNhanVien.push(newNhanVien)
    saveNVLocal(DATA_NAME_LOCAL, arrNhanVien)

    // 4. Rendering nv data on table  
    renderListNV(NHAN_VIEN, TRUONG_PHONG, SEP,arrNhanVien)
    resetForm()
  }
}


// DETETING NV DATA eventlistener
document.getElementById("tableDanhSach").addEventListener("click", function(event){
  if(!event.target.classList.contains("btn-xoa")) return  // Since we attach the event listener to the parent element => we need to make sure that the event handling will only happen when the user click on the child element which is the button has the class named "btn-xoa", otherwise it will be return

  let element= event.target.closest("tr") // Dom the closest parent element which is <tr></tr>

  if (!element) return // Another logic check to make sure that the element exist

  let elementID= element.id // RenderUI.js
  
  let indexNv = arrNhanVien.findIndex(nv=> nv.tknv == elementID)
  if(indexNv == -1) return 
  arrNhanVien.splice(indexNv, 1) 

  saveNVLocal(DATA_NAME_LOCAL, arrNhanVien)
  renderListNV(NHAN_VIEN, TRUONG_PHONG, SEP,arrNhanVien)
})



// UPDATING NV DATA eventlistener
// Getting nv data from arrNV and display on UI
document.getElementById("tableDanhSach").addEventListener("click", function(event){
  if(!event.target.classList.contains("btn-capNhat")) return
  let element = event.target.closest("tr")
  if(!element) return
  let elementID = element.id
  let indexNV = arrNhanVien.findIndex(nv => nv.tknv == elementID)
  if(indexNV == -1) return

  let elementUpdate= arrNhanVien[indexNV]

  // document.getElementById("btnThem").click()
  // let modal = new bootstrap.Modal(document.getElementById("myModal"))
  // modal.show()
  $('#myModal').modal('show');

  let arrFields = document.querySelectorAll("#form-modal input, #form-modal select")
  for (let field of arrFields ){
    let {id} = field
    field.value = elementUpdate[id]
    if(id === "tknv"){
      field.readOnly = true
    }
  }

  document.getElementById("btnThemNV").disabled = true;
})

// Getting Modify data and update data
document.getElementById("btnCapNhat").onclick = function(){
  let arrFields = document.querySelectorAll("#form-modal input, #form-modal select")
  let updateNV = {}
  for( let field of arrFields){
    let {id, value} = field
    updateNV[id] = value

    if(id == "tknv"){
      field.readOnly = false
    }
  }
  let index= arrNhanVien.findIndex(nv => nv.tknv == updateNV.tknv)
  if(index === -1) return
  arrNhanVien[index] = updateNV

  saveNVLocal(DATA_NAME_LOCAL, arrNhanVien)
  resetForm()
  $('#myModal').modal('hide');
  renderListNV(NHAN_VIEN, TRUONG_PHONG, SEP, arrNhanVien)
  document.getElementById("btnThemNV").disabled = false;
}


// SEARCHING NV BASE ON CLASSIFICATION
searchXepLoai(arrNhanVien, NHAN_VIEN, TRUONG_PHONG, SEP, classifyNV, removeVietnameseTones, renderListNV)


// CLOSE BUTTON
// cleaning the form when the modern is close
cleanCloseModal()
