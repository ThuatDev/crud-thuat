function redirectStudent() {
  var listStudent = localStorage.getItem("list-student");
  var thongtin = JSON.parse(listStudent);
  var tt;
  var student = `<tr>
  <th>ID</th>
  <th>Name</th>
  <th>IMG</th>
  <th>Action</th>
  </tr>`;
}
