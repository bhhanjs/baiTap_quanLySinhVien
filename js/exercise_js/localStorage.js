const saveNVLocal = function(dataName,arrNV){
  let toStringJS= JSON.stringify(arrNV)
  localStorage.setItem(dataName, toStringJS)
}
const getNVLocal = function(dataName){
  let data= localStorage.getItem(dataName)
  return data? JSON.parse(data) : []
}

export {saveNVLocal, getNVLocal}