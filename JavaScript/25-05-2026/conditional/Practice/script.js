// Comparison Operator
    let x = 5;
    document.getElementById("demo1").innerHTML = (x != 8);

    // 2. else if
    const time = 39;
    let greeting;

    if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }

    document.getElementById("demo2").innerHTML = greeting;

    // 3. if condition
    let age1 = 18;
    let text1 = "You can Not drive!";

    if (age1 >= 18) {
      text1 = "You can drive!";
    }

    document.getElementById("demo3").innerHTML = text1;

    // 4. if else
    const hour = 24;
    let greeting2;

    if (hour < 20) {
      greeting2 = "Good day";
    } else {
      greeting2 = "Good evening";
    }

    document.getElementById("demo4").innerHTML = greeting2;

    // 6. Nested if
    let age2 = 15;
    let country = "USA";
    let text3 = "You can Not drive!";

    if (country == "USA") {

      if (age2 >= 16) {
        text3 = "You can drive!";
      }

    }

    document.getElementById("demo6").innerHTML = text3;

    // 7. Switch Statement
    let text4;

    switch (new Date().getDay()) {

      case 4:
      case 5:
        text4 = "Soon it is Weekend";
        break;

      case 0:
      case 6:
        text4 = "It is Weekend";
        break;

      default:
        text4 = "Looking forward to the Weekend";
    }

    document.getElementById("demo7").innerHTML = text4;

    // 8. Ternary Operator
    let age3 = 19;

    let text5 = (age3 < 18) ? "Minor" : "Major";

    document.getElementById("demo8").innerHTML = text5;
