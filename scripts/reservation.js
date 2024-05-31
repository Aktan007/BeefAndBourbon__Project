document.getElementById("popupBtn").addEventListener("click", function () {
  var popupMenu = document.getElementById("popupMenu");
  popupMenu.style.display =
    popupMenu.style.display === "none" ? "block" : "none";
});

document.getElementById("decrease").addEventListener("click", function () {
  const peopleInput = document.getElementById("people");
  let value = parseInt(peopleInput.value, 10);
  if (value > 1) {
    peopleInput.value = value - 1;
  }
});

document.getElementById("increase").addEventListener("click", function () {
  const peopleInput = document.getElementById("people");
  let value = parseInt(peopleInput.value, 10);
  peopleInput.value = value + 1;
});
