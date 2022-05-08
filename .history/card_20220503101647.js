function redirectStudent() {
  var listStudent = localStorage.getItem("list-student");
  var thongtin = JSON.parse(listStudent);
  var tt = "";

  tt = `<tr>
  <td>${nguoinhan[i][0]}</td>
  <td>${nguoinhan[i][1]}</td>
  <td><img src="${nguoinhan[i].address}"with="100px" alt=""></td>
  </tr>`;

  let ttz = document.getElementById("thongtinnhanhang");
  ttz.innerHTML += tt;
}
