// FOR LOOP

function forLoop(){
  let text = "";
  for(let i = 1; i <= 5; i++){
    text += i + " ";
  }
  document.getElementById("demo1").innerHTML =
    text;

}

// WHILE LOOP

function whileLoop(){
  let i = 5;
  let text = "";
  while(i >= 1){
    text += i + " ";
    i--;
  }
  document.getElementById("demo2").innerHTML =
    text;
}


// DO WHILE LOOP

function doWhileLoop(){
  let attempt = 1;
  let text = "";
  do{

    text +=
      "Login Attempt " + attempt + "<br>";
    attempt++;

  }while(attempt <= 3);

  document.getElementById("demo3").innerHTML =
    text;

}


// FOR OF LOOP

function forOfLoop(){

  const fruits = [

    "Apple",
    "Mango",
    "Banana",
    "Guava",
    "Pine Apple"

  ];

  let text = "";
  for(let fruit of fruits){
    text += fruit + "<br>";
  }

  document.getElementById("demo4").innerHTML =
    text;

}

// FOR IN LOOP

function forInLoop(){

  const user = {

    name: "Gupta",
    age: 23,
    role: "Developer",
    company: "NYB Infotech"

  };
  let text = "";
  for(let key in user){
    text +=
      key + " : " + user[key] + "<br>";
  }
  document.getElementById("demo5").innerHTML =
    text;

}

// FOREACH LOOP

function forEachLoop(){

  const prices = [

    500,
    1000,
    1500

  ];
  let text = "";
  prices.forEach(function(price){
    text +=
      "Price: " + price + "<br>";
  });
  document.getElementById("demo6").innerHTML =
    text;

}