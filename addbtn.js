const add = function () {
  console.log(2 + 3);
};

function runtwice(func) {
  func();
  func();
}

runtwice(add);

//setinterval
count = 0;
let looping = 0;
let intervalid;
const myfunction = function () {
  btn = document.querySelector(`.js-btn`);
  if (count === 0) {
    btn.innerHTML = `finished`;
    count = 1;
  } else {
    btn.innerHTML = `start`;
    count = 0;
  }
};

const toggle = () => {
  if (looping === 0) {
    intervalid = setInterval(myfunction, 1000);

    looping = 1;
  } else {
    clearInterval(intervalid);
    looping = 0;
  }
};
//

//setTimeout

function toggled() {
  btn = document.querySelector(`.js-b2tn`);
  const secfunc = function () {
    btn.innerHTML = `loading....`;
  };

  const secfuncfinal = function () {
    btn.innerHTML = `finished!!`;
  };

  setTimeout(secfunc, 1000);
  setTimeout(secfuncfinal, 3000);
}

let timeout1id;
let timeout2id;
let check = 0; //check if the code has reached the end
function cartadd() {
  text = document.querySelector(`.ep`);
  btn = document.querySelector(`.js-cartbtn`);
  const added = function () {
    check = 1;
    text.innerHTML = `Added`;
  };
  const removetext = function () {
    check = 2;
    text.innerHTML = ``;
  };

  if (check === 0) {
    timeout1id = setTimeout(added, 1000);
    timeout2id = setTimeout(removetext, 3000);
  } else {
    clearTimeout(timeout1id);
    clearTimeout(timeout2id);
    timeout1id = setTimeout(added, 1000);
    timeout2id = setTimeout(removetext, 3000);
  }
  check = 0;
}

//Messaging app
let messages = 0;
function dfunction(param) {
  if (param === `send`) {
    messages = messages + 1;
  } else if (param === `delete`) {
    messages = messages - 1;
  }

  if (messages < 0) {
    messages = 0;
    document.title = `App`;
  } else {
    document.title = `(${messages})New messages`;
  }
}

const pagetitle = function (param) {
  setInterval(dfunction(param), 1000);
};
