'use strict';

function urlSafeString (str) {
  return str.toLowerCase().replace(/\s/g, '-');
}

export {
  urlSafeString
};
