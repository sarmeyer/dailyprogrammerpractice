function p(str) {
  return str.toLowerCase().split('').reverse().join('') === str.toLowerCase() ? true : false;
}

console.log(p('momma'));