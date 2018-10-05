
var recipes = {
};

 function updateObjectWithKeyAndValue(object,key,value){
  
    var obj = {prop: 1 }
    
    recipes.obj= value 
    
    return recipes

}
 
 function updateObjectWithKeyAndValue(object, key, value) {
  
     Object.assign({}, object, {key:value} ) ;
     
     return recipes }
    
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object[key] = value;
  
  return object;
    
  }
  
  function deleteFromObjectByKey(object, key) {
    
  var newObj = Object.assign({}, key);
  
  delete newObj.key;
  
  return newObj;
  
  }
  
  function destructivelyDeleteFromObjectByKey(object, key) {

  delete object[key] ;
  
  return object;
    
    }
  
      var obj = {prop: 1} ;
  
     Object.assign({}, recipes, {key:value} ) ;
     
     return recipes ;
    