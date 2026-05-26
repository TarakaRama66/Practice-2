// NORMAL FUNCTION

function showMessage(){
    document.getElementById("demo1").innerHTML =
    "Welcome to JavaScript";
    }

// FUNCTION WITH PARAMETERS

function add(a, b){
      return a + b;
    }
    function addNumbers(){
      let num1 =
        Number(document.getElementById("num1").value);
      let num2 =
        Number(document.getElementById("num2").value);
      let result = add(num1, num2);
      document.getElementById("demo2").innerHTML =
        "Result: " + result;
    }

    // FUNCTION WITH RETURN

    function square(num){
      return num * num;
    }
    function showSquare(){
      let result = square(5);
      document.getElementById("demo3").innerHTML =
        "Square is: " + result;
    }

// ARROW FUNCTION

const greet = () => {
  let hour = new Date().getHours();
  if(hour < 12){
    return "Good Morning";
  }
  else if(hour < 17){
    return "Good Afternoon";
  }
  else{
    return "Good Evening";
  }
};
function showGreeting(){
  document.getElementById("demo4").innerHTML =
    greet();
}
// CALLBACK FUNCTION
function processData(callback){
    let data = "Data Processed Successfully";
    callback(data);
    }

function displayResult(result){
    document.getElementById("demo5").innerHTML =
    result;

    }
