// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var output = '';
  if (typeof obj === 'string') {
    output += '"' + obj + '"';
  } else if (obj === null) {
    output += 'null';
  } else if (Array.isArray(obj)) {
    output += '[';
    for (var i = 0; i < obj.length; i++) {
      output += stringifyJSON(obj[i]) + ',';
    }
    if (output.length > 1) {
      output = output.slice(0, output.length - 1);
    } 
    output += ']';
  } else if (typeof obj === 'object' && !Array.isArray(obj) && typeof obj !== 'function') {
    output += '{';
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        output += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
      }
    }
    if (output.length > 1) {
      output = output.slice(0, output.length - 1);
    }
    output += '}';
  } else if (typeof obj === 'boolean') {
    obj === true ? output += 'true' : output += 'false';
  } else if (typeof obj === 'number') {
    output += obj.toString();
  }

  return output;
};
