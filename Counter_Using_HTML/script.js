let count = 0;

const countText = document.getElementById("countText");
const errorText = document.getElementById("error");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const clearBtn = document.getElementById("clearBtn");

function updateUI() {
  countText.innerHTML = "Your Current Count is : " + count;

  if (count > 0) {
    clearBtn.style.display = "inline-block";
  } else {
    clearBtn.style.display = "none";
  }
}

incrementBtn.addEventListener("click", function () {
  count++;
  errorText.style.display = "none";
  updateUI();
});

decrementBtn.addEventListener("click", function () {
  if (count === 0) {
    errorText.style.display = "block";
  } else {
    count--;
    errorText.style.display = "none";
    updateUI();
  }
});

clearBtn.addEventListener("click", function () {
  count = 0;
  errorText.style.display = "none";
  updateUI();
});
