const input = document.getElementById("input");

input.addEventListener("input", function () {
    const filter = input.value.toUpperCase();
    const list = document.getElementById("list");
    const listItem = list.getElementsByTagName("li");

    for (let i = 0; i < listItem.length; i++) {
      let item = listItem[i];
      let itemText = item.textContent || item.innerText;
      if (itemText.toUpperCase().indexOf(filter) > -1) {
        listItem[i].style.display = "";
      } else {
        listItem[i].style.display = "none";
      }
    }
})