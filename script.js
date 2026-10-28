function checkSigns() {
  const boxes = document.querySelectorAll(
    'input[type="checkbox"]'
  );

  let count = 0;

  boxes.forEach(function(box) {
    if (box.checked) {
      count++;
    }
  });

  const result = document.getElementById("result");

  if (count === 0) {
    result.textContent =
      "Please select a warning sign first.";
  } else {
    result.textContent =
      count + " warning sign(s) selected. " +
      "Be careful and verify suspicious requests " +
      "through official channels.";
  }
}
