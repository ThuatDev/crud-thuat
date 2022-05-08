function redirectStudent() {
  var listStudent = localStorage.getItem("list-student");
  var thongtin = JSON.parse(listStudent);
  var tt;
  // var nguoinhan = new Array(thongtin.name, thongtin.address);
  let nguoinhan = Object.entries(thongtin);

  for (let i = 0; i < nguoinhan.length; i++) {
    localStorage.setItem(`nguoinhan${i}`, JSON.stringify(nguoinhan[i]));
    console.log(nguoinhan);
    //   tt = `<tr>
    // <td>${nguoinhan[i][0]}</td>
    // <td>${nguoinhan[i][1]}</td>
    // <td><img src="${nguoinhan[i][3]}"with="0px" alt=""></td>
    // </tr>`;
    tt = `<tr>
  <td>${nguoinhan[i][0]}</td>
  <td>${nguoinhan[i][1]}</td>
  <td><img src="${nguoinhan[i][2]}"with="100px" alt=""></td>
  </tr>`;
  }
  let ttz = document.getElementById("thongtinnhanhang");
  ttz.innerHTML += tt;
}
