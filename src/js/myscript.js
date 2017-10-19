console.log("heeeeeeeeeeeerrrreeeee");
var result = 0;
var operation = '';
var display = false;

var bottons = document.getElementsByClassName("flex-item");
[].forEach.call(bottons, function (botton) {
  botton.onclick = function() {
    keyPressed(botton.textContent);
  };
  
});

document.getElementsByTagName('body')
[0].addEventListener("keypress", function(event) {
  KeyPressed(event.key);
});



    
    
  

var calcResult = function() {
  
  
  let value = parseFloat(document.getElementsByTagName('input')[0].value);
  
  
  if (operation === '±') {
     result = -value;
    
  } else if (operation === '-') {
    result -= value;
  } else if (operation === 'x') {
    result *= value;  
  } else if (operation === '*') {
    result *= value; 
     
  } else if (operation === '÷') {
     result /= value;
  } else if (operation === '/') {
    result /= value;
  } else if (operation === '+' ){
   result += value;
    
  } else {
    result = value;
  }
  document.getElementsByTagName('input')[0].value = result;
};

var keyPressed = function(key){
 if ( /\d/.test(key) || key === '.') {
     
      if (display) {
        document.getElementsByTagName('input')[0].value = key;
        display = false;
      } else {
        document.getElementsByTagName('input')[0].value += key;
      }
   
   
    } else if (key === 'C'){
      result = 0;
      operation = '';
      document.getElementsByTagName('input')[0].value = '0';
    } else {
      calcResult();
      operation = key;
      display = true;
    }
}