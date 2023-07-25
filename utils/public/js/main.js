const form = document.getElementById("myForm");
const peopleList = document.getElementById("peopleList");
async function getAllUsers() {
  try {
    const peopleList = document.getElementById("peopleList");
    const res = await axios.get("http://localhost:3000/get/users");
    // console.log(res);
    res.data.forEach((user) => {
      const li = document.createElement("li");
      li.className =
        "list-group-item list-group-item-action list-group-item-dark w-75 m-2";
      li.appendChild(
        document.createTextNode(
          `${user.userName} ${user.contact} ${user.email}`
        )
      );
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      editButton.innerHTML = "edit";
      deleteButton.innerHTML = "delete";
      editButton.className =
        "btn btn-outline-secondary float-end mx-2 btn-sm edit";
      deleteButton.className = "btn btn-outline-danger btn-sm float-end delete";
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      peopleList.appendChild(li);
    });
  } catch (err) {
    console.log(err);
  }
}

async function deleteUser(e) {
  try {
    if (e.target.classList.contains("delete")) {
      let id;
      let userdata = e.target.parentNode.firstChild.wholeText.split(" ");
      const contact = userdata[userdata.length - 2];
      const email = userdata[userdata.length - 1];
      const userInfo = { contact, email };
      const res = await axios.get(`http://localhost:3000/get/users`);
      res.data.forEach((user) => {
        console.log(userdata);
        if (user.contact == contact && user.email == email) {
          console.log("enters");
          console.log(user.id);
          id = user.id;
        }
      });
      const deleteUser = await axios.get(
        `http://localhost:3000/get/deleteUser/${id}`
      );
      window.location.reload();
    }
  } catch (err) {
    console.log(err);
  }
}

document.addEventListener("DOMContentLoaded", getAllUsers);

peopleList.addEventListener("click", (e) => {
  deleteUser(e);
});
