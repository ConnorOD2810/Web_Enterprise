$(function(){



  });

function login(e){
  console.log("eat my ass");
  e.preventDefault();

    $.post(window.location.href+"/php/login.php",

    {
      username: $("#username").val(),
      password: $("#password").val()
    },
    function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });

}

function addFeed(feed){
    $.post("../php/addFeed.php",
    {
        feed: feed
      },
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
}

function delFeed(feed){
    $.post("../php/delFeed.php",
    {
        feed: feed
      },
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
}

function getFeeds(feeds){
    $.get("../php/getFeed.php?feeds="+feeds.join(","),
    {
        feed: $("#feed").val()
      },
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      });
}

function checkChange(e){
  e.preventDefault();
  if (e.target.checked) {
    addFeed(e.target.id);
  } else {
    delFeed(e.target.id);
  }
}
