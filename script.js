initialize();

function initialize () {

  var name = document.querySelector("#name");
  var carYear = document.querySelector("#car-year")
  var carMake = document.querySelector("#car-make")
  var carModel = document.querySelector("#car-model")
  var startDate = document.querySelector("#start-date")
  var days = document.querySelector("#days")
  var creditCard = document.querySelector("#credit-card")
  var cvv = document.querySelector("#cvv")
  var expiration = document.querySelector("#expiration")

  name.addEventListener("blur", function(e){
    
    if(isNameValid(e.target.value)) {
      validateField(e.target.id)
  
    } else {invalidateField(e.target.id)}
    
    return
  })
  
  carYear.addEventListener("blur", function(e){

    if(isNameValid(e.target.value)) {
      validateField(e.target.id)
      
    } else {invalidateField(e.target.id)}

    return
  })

  carMake.addEventListener("blur", function(e){

    if(isNameValid(e.target.value)) {
      validateField(e.target.id)
      
    } else {invalidateField(e.target.id)}

    return
  })

  carModel.addEventListener("blur", function(e){

    if(isNameValid(e.target.value)) {
      validateField(e.target.id)
      
    } else {invalidateField(e.target.id)}

    return
  })

  startDate.addEventListener("blur", function(e){

    if(isNameValid(e.target.value)) {
      validateField(e.target.id)
      
    } else {invalidateField(e.target.id)}

    return
  })

  days.addEventListener("blur", function(e){

    if(isNameValid(e.target.value)) {
      validateField(e.target.id)
      
    } else {invalidateField(e.target.id)}

    return
  })

  creditCard.addEventListener("blur", function(e){

    if(isNameValid(e.target.value)) {
      validateField(e.target.id)
      
    } else {invalidateField(e.target.id)}

    return
  })

  cvv.addEventListener("blur", function(e){

    if(isNameValid(e.target.value)) {
      validateField(e.target.id)
      
    } else {invalidateField(e.target.id)}

    return
  })

  expiration.addEventListener("blur", function(e){

    if(isNameValid(e.target.value)) {
      validateField(e.target.id)
      
    } else {invalidateField(e.target.id)}

    return
  })

}
 
  function blank(elementId) {
    if (name === "") 

    var blank = document.querySelector(name ==="");
    if(blank){
      element.parentElement.classList.add("input-invalid")
    } else {
      element.parentElement.classList.remove("input-valid")
    }
  }

  function blank(elementId) {
    if (carYear === "") 

    var blank = document.querySelector(carYear ==="");
    if(blank){
      element.parentElement.classList.add("input-invalid")
    } else {
      element.parentElement.classList.remove("input-valid")
    }
  }

  function blank(elementId) {
    if (carMake === "") 

    var blank = document.querySelector(carMake ==="");
    if(blank){
      element.parentElement.classList.add("input-invalid")
    } else {
      element.parentElement.classList.remove("input-valid")
    }
  }
  function blank(elementId) {
    if (carModel === "") 

    var blank = document.querySelector(carModel ==="");
    if(blank){
      element.parentElement.classList.add("input-invalid")
    } else {
      element.parentElement.classList.remove("input-valid")
    }
  }
  function blank(elementId) {
    if (startDate === "") 

    var blank = document.querySelector(startDate ==="");
    if(blank){
      element.parentElement.classList.add("input-invalid")
    } else {
      element.parentElement.classList.remove("input-valid")
    }
  }
  function blank(elementId) {
    if (days === "") 

    var blank = document.querySelector(days ==="");
    if(blank){
      element.parentElement.classList.add("input-invalid")
    } else {
      element.parentElement.classList.remove("input-valid")
    }
  }
  function blank(elementId) {
    if (creditCard === "") 

    var blank = document.querySelector(creditCard ==="");
    if(blank){
      element.parentElement.classList.add("input-invalid")
    } else {
      element.parentElement.classList.remove("input-valid")
    }
  }
  function blank(elementId) {
    if (cvv === "") 

    var blank = document.querySelector(cvv ==="");
    if(blank){
      element.parentElement.classList.add("input-invalid")
    } else {
      element.parentElement.classList.remove("input-valid")
    }
  }
  function blank(elementId) {
    if (expiration === "") 

    var blank = document.querySelector(expiration ==="");
    if(blank){
      element.parentElement.classList.add("input-invalid")
    } else {
      element.parentElement.classList.remove("input-valid")
    }
  }

  function invalidateField(elementId) {

    var element = document.querySelector("#"+elementId);
    var valid = element.parentElement.classList.contains("input-valid")
    if(valid){
      element.parentElement.classList.remove("input-valid")
    }
      element.parentElement.classList.add("input-invalid")
      
    }
  function validateField(elementId) {

    var element = document.querySelector("#"+elementId);
    var invalid = element.parentElement.classList.contains("input-invalid")
    if(invalid){
      element.parentElement.classList.remove("input-invalid")

    } 
      element.parentElement.classList.add("input-valid")
    
    
    }

    function isBlank(data){
      if(String(data).length > 0){
        return false
      }
      return true
    }

    function isNameValid(name){
      if(!isBlank(name)){
         return true
       }
       return false
    }

    function isNameValid(carYear){
      if(!isBlank(carYear)){
        return true
      }
      return false
    }
      
    function isNameValid(carMake){
      if(!isBlank(carMake)){
         return true
       }
       return false
    }
        
    function isNameValid(carModel){
      if(!isBlank(carModel)){
         return true
       }
       return false
    }

    function isNameValid(startDate){
      if(!isBlank(startDate)){
         return true
       }
       return false
    }

    function isNameValid(days){
      if(!isBlank(days)){
         return true
       }
       return false
    }
    
    function isNameValid(creditCard){
      if(!isBlank(creditCard)){
         return true
       }
       return false
    }

    function isNameValid(cvv){
      if(!isBlank(cvv)){
         return true
       }
       return false
    }

    function isNameValid(expiration){
      if(!isBlank(expiration)){
         return true
       }
       return false
    }
     
    function checkName(elementId){

      document.getElementById("submit-button").addEventListener("submit", function(e){
      if(isNameValid(e.target.value)) {
        validateField(e.target.id)
        
      } else {invalidateField(e.target.id)}
  
      return
    })
  }
