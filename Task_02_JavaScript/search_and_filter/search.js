const input = document.getElementById("input");

input.addEventListener("input", function () {
  const filter = input.value.toUpperCase();
  const list = document.getElementById("list");
  const listItem = list.getElementsByTagName("li");
  const no = document.getElementById("no");
  let foundItems = 0;
  for (let i = 0; i < listItem.length; i++) {
    let item = listItem[i];
    let itemText = item.textContent || item.innerText;
    if (itemText.toUpperCase().indexOf(filter) > -1) {
      listItem[i].style.display = "block";
      foundItems ++;
    } else {
      listItem[i].style.display = "none";
    }
  }
  if (foundItems > 0) {
    no.style.display = "none";
  }
  else {
    no.style.display = "block";
  }
})