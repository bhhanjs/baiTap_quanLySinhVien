const isEmpty = function(value, spanError, errMsg){
  if (value.trim() == ""){
    console.log(spanError)
    let displays= document.querySelectorAll(".sp-thongbao")
    for(let display of displays){
      // if(display.id == "tbMatKhau"){
      //   console.log(display)
      //   for (let el of display){
      //     let realspan = el.querySelector("span")
      //     if (realspan){
      //       realspan.style.display = "block"
      //     }
      //     break
      //   }
      // } else{
      //   display.style.display = "block"
      // }
      display.style.display = "block"
    }
    
    spanError.innerHTML = errMsg
    return false
  } else{
    spanError.innerHTML = ""
    return true
  }
}

export {isEmpty}