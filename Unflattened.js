function unflatten(flatObject) {
  const result = {};

  for (let key in flatObject) {
      if (flatObject.hasOwnProperty(key)) {
          const keys = key.split('.');
          let currentLevel = result;

          keys.forEach((currentKey, index) => {
              if (!currentLevel[currentKey]) {
                  if (index === keys.length - 1) {
                      currentLevel[currentKey] = flatObject[key];
                  } else {
                      currentLevel[currentKey] = {};
                  }
              }

              currentLevel = currentLevel[currentKey];
          });
      }
  }

  return result;
  
}

// Example usage:
const flatObject = {
  "flatJSON": false,
  "i.am.not.so.flat": true,
  "i.am.not.so.unflat": false,
  "i.am.a": "tree",
  "dates.0.day": 1,
  "dates.1.day": 8947
};

const unflatObject = unflatten(flatObject);
console.log(unflatObject);
