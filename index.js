var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = {}
  newObject = Object.assign({key: value}, object)
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value 
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject.key
  return newObject
}

var object = { key: 1 }

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key 
  return object
}