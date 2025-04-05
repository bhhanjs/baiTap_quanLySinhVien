// Calculate salary
const calSalary= function(case1, case2, case3,chucVu, basicSalary){
  let salary = 0
  switch(chucVu){
    case case1:
      salary = basicSalary;
      break;
    case case2:
      salary = basicSalary * 2;
      break;
    case case3:
      salary = basicSalary * 3;
      break;
  }
  return salary
}

// Classify nv
const classifyNV= function(gioLam){
  if(gioLam >= 192){
    return "xuất sắc"
  } else if( gioLam < 192 && gioLam >= 176){
    return "giỏi"
  } else if (gioLam < 176 && gioLam >= 160){
    return "khá"
  } else {
    return "trung bình"
  }
}

// rendering data on table 
const renderListNV = function(case1, case2, case3, arrNV){
  let content = arrNV.map((nv, i)=>{
    let {tknv, name, email, password, datepicker, luongCB, chucvu, gioLam} = nv
    let tongLuong= calSalary(case1, case2, case3, chucvu, luongCB)
    let xepLoai= classifyNV(gioLam)

    return `
    <tr id="${tknv}">
      <td>${tknv}</td>
      <td>${name}</td>
      <td>${email}</td>
      <td>${datepicker}</td>
      <td>${chucvu}</td>
      <td>${tongLuong}</td>
      <td>${xepLoai}</td>
      <td>
        <button class="btn-xoa btn btn-danger">Xoá</button>
        <button class="btn-capNhat btn btn-warning">Cập Nhật</button>
      </td>
    </tr>
    `
  }).join("")

  return document.getElementById("tableDanhSach").innerHTML= content
}

export default renderListNV
export {classifyNV}