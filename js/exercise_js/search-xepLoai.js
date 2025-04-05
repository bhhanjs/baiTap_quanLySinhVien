const searchXepLoai= function(arrNV, nhanVien, truongPhong, sep, classify, removeTones, render){
  document.getElementById("btnTimNV").onclick= function(){
    let search= document.getElementById("searchName").value
    let dataSearch = removeTones(search.toLowerCase())
  
    let sort= arrNV.filter(nv =>{
      let {gioLam} = nv
      let xepLoai = classify(gioLam)
      let dataXepLoai= removeTones(xepLoai.toLowerCase())

      if (dataXepLoai == dataSearch){
        return nv
      }
    })
  
    render(nhanVien, truongPhong, sep, sort)
    document.getElementById("searchName").value = ""
  }
}

export default searchXepLoai