const add = function () {
  console.log(2 + 3);
};

function runtwice(func) {
  func();
  func();
}

runtwice(add);

count = 0;
const toggle = () => {
  setInterval(function () {
    btn = document.querySelector(`.js-btn`);
    if (count === 0) {
      btn.innerHTML = `finished`;
      count = 1;
    } else {
      btn.innerHTML = `start`;
      count = 0;
    }
  }, 1000);
};
