'use strict';

function objectifyForm (form) {
  let obj = {};
  let i = 0;
  let count = form.elements.length;

  for (i; i < count; i++) {
    let el = form.elements[i];
    if (el.nodeName === 'button' || el.type === 'submit') {
      continue;
    }
    obj[el.name] = el.value;
  }

  return obj;
}

export {
  objectifyForm
};
