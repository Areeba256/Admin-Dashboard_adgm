$(document).ready(function() {
    $("#Inbox").click(function() {
      $("#dashboard-right").toggle();
    });
  });

  
  
  function fetchData()
  {
    
    let x = document.getElementById("username").value

    console.log(x)
    
    localStorage.setItem("username", x);
  }

  function getData()
  {

    
     let y= localStorage.getItem("username");
     console.log(y , "username")
    
      document.getElementById("username").innerHTML = "Welcome, " + y;
      document.getElementById("userProfile").innerHTML = y;
  }

  function redirect()
  {
    location.replace("index.html")

  
    localStorage.removeItem("username")
  }
  
  