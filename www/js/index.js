$(function(){

    
  
  });

function login(){
    $.post("../php/login.php",
    {
      username: $("#username").value(),
      password: $("#password").value()
    },
    function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });

}

function addFeed(){
    $.post("../php/addFeed.php",
    {
        feed: $("#feed").value()
      },
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
}

function delFeed(){
    $.post("../php/delFeed.php",
    {
        feed: $("#feed").value()
      },
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
}

function getFeeds(){
    $.get("../php/getFeed.php",
    {
        feed: $("#feed").value()
      },
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
}

