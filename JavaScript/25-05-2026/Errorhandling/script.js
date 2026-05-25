
    function login() {

      try {

        let username =
          document.getElementById("username").value;

        let password =
          document.getElementById("password").value;

        // Username validation
        if (username === "") {
          throw "Username is required";
        }

        // Password validation
        if (password.length < 6) {
          throw "Password must be at least 6 characters";
        }

        // Success
        document.getElementById("message").style.color = "green";

        document.getElementById("message").innerHTML =
          "Login Successful";

      }

      catch(error) {

        document.getElementById("message").style.color = "red";

        document.getElementById("message").innerHTML =
          "Error: " + error;

      }

      finally {

        console.log("Login process completed");

      }

    }
