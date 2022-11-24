var traverseDomAndCollectElements = function(matchFunc, startEl= document.body) {
  var resultSet = [];



  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl)

  for (let i = 0; i < startEl.children.length; i++) {
    let res = traverseDomAndCollectElements(matchFunc,startEl.children[i])
resultSet=[...resultSet,...res]
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if (selector[0] === '.') return 'class';
  if(selector.split('.').length > 1) return 'tag.class';
  return 'tag';
};


// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  const selectorType = selectorTypeMatcher(selector);
  let matchFunction;
  if (selectorType === "id") { 
   matchFunction=function(elem){
    return "#" + elem.id === selector
   }
  } else if (selectorType === "class") {
    matchFunction=function(elem){
      for(let i=0;i<elem.classList.length;i++){
        if("."+elem.classList[i]===selector)return true
      }
      return false
    }
  } else if (selectorType === "tag") {
    matchFunction=function(elem){
      return elem.tagName === selector.toUpperCase()
    }
  } else if (selectorType === "tag.class") {
    matchFunction=function(elem){
      let[tag,clase] = selector.split(".")
      return matchFunctionMaker(tag)(elem) && matchFunctionMaker("."+clase)(elem)
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
