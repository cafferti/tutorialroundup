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

function cartadd(){
    text = document.querySelector(`.ep`) 
    btn = document.querySelector(`.js-cartbtn`) 
    const added = function(){
        text.innerHTML = `Added`
    }
    const removetext = function(){
        text.innerHTML = ``
    }

    setTimeout(added, 1000)
    setTimeout(removetext, 3000)
    
}
