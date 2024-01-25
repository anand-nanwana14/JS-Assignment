function flatten(unflatObject) {
  const result = {};

  function recurse(obj, currentKey = '') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = currentKey ? `${currentKey}.${key}` : key;

             if (typeof obj[key] === 'object' && obj[key] !== null) {
              recurse(obj[key], newKey);
          } else {
              result[newKey] = obj[key];
              }
          }
      }
  }

  
  recurse(unflatObject);
  return result;
}

// Example usage:
const nestedObject = {
  a: 1,
  b: {
      c: 2,
      d: {
          e: 3,
          f: {
              g: 4
          }
      }
  },
  h: 5
};

const flattenedObject = flatten(nestedObject);
console.log(flattenedObject);