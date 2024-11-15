let result = {};

const insertItem = (key, value) => {
  // insertItem the property with key and value into result
  if (!key) {
    throw new Error('Key is required');
  }
  result[key] = value
  return true;
};

const deleteItem = (key) => {
  // remove the property with key from result
  if (!key in result) {
    return false;
  }
  delete result[key];
  return true;
};

const lookupItem = (key) => {
  // return the value from result that is associated with key
  if (!key in result) {
    return false;
  }
  return result[key];
};

const printItems = () => {
  // return a string of the concatenated key in result, separated by commas
  console.log()
};

insertItem('hello', 'world');
insertItem('lorem', 'ipsum');
insertItem('sit', 'amet');
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'ipsum'

deleteItem('lorem');
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem('lorem'));
// expected: 'Item does not exist'
