function redirectStudent() {
  var listStudent = localStorage.getItem("list-student");
  var thongtin = JSON.parse(listStudent);
  var tt = "";
  console.log(thongtin);
  // thongtin = new Array(thongtin.name, thongtin.address);
  console.log(thongtin);
  thongtin.map((value, index) => {
    tt += `<tr class="cot">

  <div class="col-md-4"> ${value.name}</div>
  <td><img src="${value.address}"with="100px" alt=""></td>
  </tr>`;
  });
  document.getElementById("thongtinnhanhang").innerHTML = tt;
}
