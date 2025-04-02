/** CHECK EMPTY VALUE INPUT
 * - Function receieve: value of input, span of alert, and error message
 * - Need to trim() value of input, in case the user just key space and value is still accepted
 * - IF value is empty
 * + Because the spanError has a class to display non the element => create a class in css to display block and add that class to overwride the previous class to show the span alert
 * + Set error message to span alert
 * + rerturn false for the function
 * - IF value is not empty
 * + Do not display block
 * + Set the span alert value into emply 
 * + return true for the function
 */

const notEmpty = function(value, spanError, errMsg){
  if (value.trim() == ""){
    if(spanError.classList){
      spanError.classList.add("displayBlock")
    }

    spanError.innerHTML = errMsg
    return false 
  } else{
    if(spanError.classList){
      spanError.classList.remove("displayBlock")
    }

    spanError.innerHTML = ""
    return true
  }
}


/** CHECK INPUTS BASE ON REGEX
 * - Using REGEX: /^\d{4,6}$/
 * - Checking with same logic as check not empty
 */

const validInputs = function (value, spanError, errMsg, regex){
  if(value.trim() === "") return 

  if (regex.test(value)){
    if(spanError.classList){
      spanError.classList.remove("displayBlock")
    }

    spanError.innerHTML = ""
    return true

  } else {
    if(spanError.classList){
      spanError.classList.add("displayBlock")
    }

    spanError.innerHTML = errMsg
    return false
  }
}

//CHECKING ARRANGE NUMBER
const rangeNumber = function(value, spanError, errMsg, startRange, endRange){
  if(startRange<= value && value <= endRange){
    if(spanError.classList){
      spanError.classList.remove("displayBlock")
    }
    spanError.innerHTML = ""
    return true

  } else{
    if(spanError.classList){
      spanError.classList.add("displayBlock")
    }
    spanError.innerHTML = errMsg
    return false
  }
}

// CHECK POSITION 
const validPosition= function(value, spanError, errMsg, removetTones){
 if(value.trim()==="") return

 console.log(value)
 let newValue = removetTones(value.toLowerCase())
 console.log(newValue)

 if (newValue == "nhan vien" || newValue == "truong phong" || newValue == "sep"){
  if(spanError.classList){
    spanError.classList.remove("displayBlock")
  }
  spanError.innerHTML = ""
  return true
 } else{
  if(spanError.classList){
    spanError.classList.add("displayBlock")
  }
  spanError.innerHTML = errMsg
  return false
 }





}



// CHECK ACCOUNT
// const validAccount = function (account, spanError, errMsg){
//   if(account.trim() === "") return 
//   let regex= /^\d{4,6}$/ // regex for only digits and length between 4 and 6

//   if (!regex.test(account){
//     if(spanError.classList){
//       spanError.classList.add("displayBlock")
//     }

//     spanError.innerHTML = errMsg
//     return false
//   } else {
//     if(spanError.classList){
//       spanError.classList.remove("displayBlock")
//     }

//     spanError.innerHTML = ""
//     return true
//   }
// }


// CHECK ONLY LETTER IN NAME USER
// const validName = function(name, spanError, errMsg){
//   if(name.trim()) return
//   let regex= /^[A-Za-zÀ-Ỹà-ỹ\s]+$/

//   if (!regex.test(name)){
//     if(spanError.classList){
//       spanError.classList.add("displayBlock")
//     }

//     spanError.innerHTML = errMsg
//     return false
//   } else{
//     if(spanError.classList){
//       spanError.classList.remove("displayBlock")
//     }

//     spanError.innerHTML = ""
//     return true
//   }
// }

// CHECK EMAIL IN CORRECT FORMAT 
// const validEmail = function(email, spanError, errMsg){
//   if(email.trim()=== "") return
//   let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

//   if (!regex.test(email.trim())){
//     if( spanError.classList){
//       spanError.classList.add("displayBlock")
//     }

//     spanError.innerHTML = errMsg
//     return false
//   } else{
//     if(spanError.classList){
//       spanError.classList.remove("displayBlock")
//     } 

//     spanError.innerHTML= ""
//     return true
//   }
// }


// CHECK PASSWORD 
// const validPassword = function(password, spanError, errMsg){
//   if (password.trim() === "") return
//   let regex= /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:;<>,.?/~\\-])[A-Za-z\d!@#$%^&*()_+{}:;<>,.?/~\\-]{6,10}$/

//   if (!regex.test(password.trim())){
//     if( spanError.classList){
//       spanError.classList.add("displayBlock")
//     }

//     spanError.innerHTML = errMsg
//     return false
//   } else{
//     if(spanError.classList){
//       spanError.classList.remove("displayBlock")
//     } 

//     spanError.innerHTML= ""
//     return true
//   }

// }



export {notEmpty, validInputs, rangeNumber, validPosition}