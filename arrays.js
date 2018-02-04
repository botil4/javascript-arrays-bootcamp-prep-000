var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
  ]
  
  var tomatoSauceIngredients = [
    'tomato',
    'garlic',
    'olive oil',
    'basil',
    'oregano'
    ]
    
    var chocolateBars = [
      'snickers',
      'hundred grand',
      'kitkat',
      'skittles'
      ]
      
      function addElementToBeginningOfArray(array, element) {
        var arrayNew = [element, ...array]
        return arrayNew
      }
      
      function destructivelyAddElementToBeginningOfArray(array, element) {
        array = array.unshitft(element)
        return array
      }