var array = [1, 2, 3, 4];

var sum = array.reduce((pre, cur) => {
  return pre + cur;
});

console.log(sum);