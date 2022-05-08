function resetInput() {
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
}
//CRUD
function validateInput() {
  //  document.getElementById("save").style.display="inline-block";
  let formElement = document.querySelector(".form");
  let inputElement = formElement.querySelectorAll(".form-input");
  let ten = document.getElementById("name").value;
  let img = document.getElementById("address").value;
  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value === "") {
      inputElement[i].parentElement.querySelector(
        ".error-message"
      ).innerText = ` Please enter your ${inputElement[i].id}`;
      inputElement[i].style.border = "3px solid red";
    } else {
      inputElement[i].parentElement.querySelector(".error-message").innerText =
        "";
    }
  }
  var nguoinhan = new Array(ten, img);
}

function addNew() {
  validateInput();
  let formElement = document.querySelector(".form");
  let errorElement = formElement.querySelectorAll(".form-input");
  let arrErrorElement = [];
  for (let i = 0; i < errorElement.length; i++) {
    arrErrorElement.push(errorElement[i].innerText);
  }
  let checkErrorElement = arrErrorElement.every((value) => value === "");
  if (checkErrorElement) {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    // let listStudent = LocalStorage.getItem("list-student")
    //   ? JSON.parse(localStorage.getItem("List-student"))
    //   : [];
    // let listStudent = [];
    let listStudent = localStorage.getItem("list-student")
      ? JSON.parse(localStorage.getItem("list-student"))
      : [];
    listStudent.push({
      name: name,
      address: address,
    });
    localStorage.setItem("list-student", JSON.stringify(listStudent));
    renderStuden();
    resetInput();
  }
}
function renderStuden() {
  let listStudent = localStorage.getItem("list-student")
    ? JSON.parse(localStorage.getItem("list-student"))
    : [];

  let student = `<tr>
          <th>ID</th>
          <th>Name</th>
          <th>IMG</th>
          <th>Action</th>
        </tr>`;
  listStudent.map((value, index) => {
    student += `<tr>
          <td>${index + 1}</td>
          <td>${value.name}</td>
          <td><img src="${value.address}" alt=""width="250px"></td>
          <td>
            <button onclick="editStudent(${index})">edit</button>
            <button onclick="deleteStudent(${index})">delete</button>
             <button onclick="redirectStudent()">TRANG CHU</button>
            </td>
        </tr>`;
  });
  document.getElementById("tableContent").innerHTML = student;
}

function editStudent(index) {
  let listStudent = localStorage.getItem("list-student")
    ? JSON.parse(localStorage.getItem("list-student"))
    : [];
  document.getElementById("name").value = listStudent[index].name;
  document.getElementById("address").value = listStudent[index].address;
  document.getElementById("index").value = index;
  document.getElementById("save").style.display = "none";
  document.getElementById("update").style.display = "inline-block";
}

function changeStudent() {
  let listStudent = localStorage.getItem("list-student")
    ? JSON.parse(localStorage.getItem("list-student"))
    : [];
  let index = document.getElementById("index").value;
  listStudent[index] = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
  };
  localStorage.setItem("list-student", JSON.stringify(listStudent));
  renderStuden();
  document.getElementById("save").style.display = "inline-block";
  document.getElementById("update").style.display = "none";
  document.getElementById("error-message").style.color = "red";
  resetInput();
  renderStuden();
}
function deleteStudent(index) {
  let listStudent = localStorage.getItem("list-student")
    ? JSON.parse(localStorage.getItem("list-student"))
    : [];
  listStudent.splice(index, 1);
  localStorage.setItem("list-student", JSON.stringify(listStudent));
  renderStuden();
}
// function Redirect(this) {
//   let listStudent = localStorage.getItem("list-student")
//     ? JSON.parse(localStorage.getItem("list-student"))
//     : [];
//   let student = ``;
//   listStudent.map((value, index) => {
//     student += `<tr>
//           <td>${index + 1}</td>
//           <td>${value.name}</td>
//           <td><img src="${value.address}" alt=""width="250px"></td>
//           <td>
//             <button onclick="editStudent(${index})">edit</button>
//             <button onclick="deleteStudent(${index})">delete</button>
//              <button onclick="Redirect(${index})">TRANG CHU</button>
//             </td>
//         </tr>`;
//   });
//   document.getElementById("tableContent").innerHTML = student;
//   window.location.href = "sanpham.html";
// }
function redirectStudent() {
  window.location.assign("sanpham.html");
  var nguoinhan = localStorage.getItem("list-student");
  var thongtin = JSON.parse(nguoinhan);
  var tt = ` <img src="${thongtin[2]}"with="0px" alt=""> `;
  let ttz = document.getElementById("thongtinnhanhang");
  ttz.innerHTML = tt;
}
