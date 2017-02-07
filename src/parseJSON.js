// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  

  var output;
  
  var i = 0;

  var cutQuotes = function(str) {
    return str.slice(1, str.length - 1);
  };  

  var parseObject = function(obj) {
    var split = obj.split(':');
    var key = cutQuotes(split[0]);    
    var value = parseJSON(cutQuotes(split[1]));
    var object = new Object;

    object[key] = value;
    return object;
  };

  var parseArray = function(arr) {
    var split = obj.split(',');
    var array = new Array;
    _.each(split, function(item) {
      array.push(parseJSON(cutQuotes(item)));
    });
    return array;
  };
  
  //array
  if (json[i] === '[') {
    if (json[i + 1] === ']') {
      output = [];
    } else {
      output = parseArray(json.slice(1, json.length - 1));
    }
    //object 
  } else if (json[i] === '{') {
    if (json[i + 1] === '}') {
      output = {};
    } else {
      output = parseObject(json.slice(1, json.length - 1));
    }
    } else if (parse)



  // string
  else {
    output = json;
  }
  
  return output;
};


  



  // var parseNumber = function(obj) {

  // };

  

  //   if () {
  //     parseString(obj);
  //   }