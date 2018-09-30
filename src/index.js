module.exports = function getZerosCount(number) {
  const divs = [];
  let multiplier = 1;

  while (divs.slice(-1) && divs.slice(-1) <= number) {
    divs.push(Math.pow(5, multiplier++));
  }

  return divs.reduce((acc, cur) => acc + Math.floor(number / cur), 0);
}