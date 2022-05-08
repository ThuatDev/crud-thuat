function redirectStudent() {
  var listStudent = localStorage.getItem("list-student");
  var thongtin = JSON.parse(listStudent);
  var tt = "";
  console.log(thongtin);
  thongtin = new Array(thongtin.name, thongtin.address);
  console.log(thongtin);
  tt += `<tr>
             <td><img src="${thongtin[2]}"with="100px" alt=""></td>
          </tr>`;
  let ttz = document.getElementById("thongtinnhanhang");
  ttz.innerHTML += tt;
}
