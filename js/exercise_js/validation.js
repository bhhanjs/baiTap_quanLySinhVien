const isEmpty = function(value, spanError, errMsg){
  if (value.trim() == ""){
    if(spanError.classList){
      spanError.classList.add("displayBlock")
    }

    spanError.innerHTML = errMsg
    return false
  } else{
    spanError.innerHTML = ""
    return true
  }
}

export {isEmpty}