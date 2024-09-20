const opt = document.querySelectorAll(".opt");
let table = document.getElementsByTagName("input")[0];
const multiplier = document.querySelector(".multiplier");
const indexElement = document.querySelector(".index");

let random = (value) => Math.floor(Math.random() * value) + 1;
(() => {
  indexElement.innerHTML = random(10);
  multiplier.innerHTML = 1;
  table.value = 1;
})();
let slot = [parseInt(multiplier.innerHTML) * parseInt(indexElement.innerHTML)];
// slot_array_gen();

//
function removeElement(x, arr) {
  tem = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      continue;
    } else {
      tem.push(arr[i]);
    }
  }
  return tem;
}
//
// function slot_array_gen() {
function choice_gen() {
  for (let i = 0; i < 4; i++) {
    let value = random(10);
    let sum = parseInt(multiplier.innerHTML) * value;
    if (slot.includes(sum)) {
      i--;
    } else {
      slot.push(sum);
    }
  }
  // }
  let sloptPosition = 0;
  let r = 5;
  for (j = 0; j < 5; j++) {
    let index = random(r) - 1;
    r--;
    opt[sloptPosition].innerHTML = slot[index];
    slot = removeElement(slot[index], slot);
    sloptPosition++;
  }
}
choice_gen();
//
let reg = /^[0-9]+$/;
//

table.addEventListener("change", (e) => {
  if (
    e.target.value == "" ||
    e.target.value > 20 ||
    !reg.test(e.target.value)
  ) {
    multiplier.innerHTML = 1;
  } else if (e.target.value == 0) {
    opt.forEach((e) => {
      e.innerHTML = 0;
    });
  } else {
    table.blur();
    multiplier.innerHTML = e.target.value;
    slot = [parseInt(multiplier.innerHTML) * parseInt(indexElement.innerHTML)];
    // slot_array_gen();
    choice_gen();
  }
});
//

//
//
opt.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    let sum = parseInt(multiplier.innerHTML) * parseInt(indexElement.innerHTML);
    if (sum == e.target.innerHTML) {
      ind = random(10);
      indexElement.innerHTML = ind;
      slot = [
        parseInt(multiplier.innerHTML) * parseInt(indexElement.innerHTML),
      ];
      choice_gen();
    }
  });
});
