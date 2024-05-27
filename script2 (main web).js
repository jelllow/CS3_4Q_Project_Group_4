document.getElementById("fn").innerHTML = "FIRST NAME: " + window.localStorage.getItem('firstname', fn) + "</br>";
            document.getElementById("ln").innerHTML = "LAST NAME: " + window.localStorage.getItem('lastname', ln) + "</br>";
            document.getElementById("sx").innerHTML = "SEX: " + window.localStorage.getItem('sex', sx) + "</br>";
            document.getElementById("em").innerHTML = "EMAIL: " + window.localStorage.getItem('email', em) + "</br>";
            document.getElementById("rs").innerHTML = "REASON IN SUPPORTING THE CAMPAIGN: " + window.localStorage.getItem('reason', rs) + "</br>";