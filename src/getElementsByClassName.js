// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  
  var traverse = function(node) {
    if (_.contains(node.classList, className)) {
      output.push(node);
    }

    _.each(node.childNodes, function(childNode) {
      traverse(childNode);
    });
  };
  
  traverse(document.body);

  return output;
};
