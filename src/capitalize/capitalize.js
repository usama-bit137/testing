function capitalize(args) {
  let string = `${args}`; 
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;