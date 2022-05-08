function redirectStudent() {
  var listStudent = localStorage.getItem("list-student");
  var thongtin = JSON.parse(listStudent);
  var tt = "";
  console.log(thongtin);
  thongtin = new Array(thongtin.name, thongtin.address);
  console.log(thongtin);
  tt += `<tr>
            <th>ID</th>
            <th>Name</th>
            <th>IMG</th>
            <th>Action</th>
             <td><img src="${thongtin[0]}"with="100px" alt=""></td>
          </tr>`;
  let ttz = document.getElementById("thongtinnhanhang");
  ttz.innerHTML += tt;
}
