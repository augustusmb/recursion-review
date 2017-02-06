// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  
  var traverse = function(node) {
    _.each(node.childNodes, function(el) {
      if (_.contains(el.classList, className)) {
        output.push(el);
      }
      traverse(node.childNodes);
    });
  };
  traverse(document.body);

  return output;
};
