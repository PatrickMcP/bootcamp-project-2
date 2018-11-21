console.log("Home.js loaded");

// on click of each button with AJAX call based on predefined routes - look into Google doc for routes
$("#sign-up").on("click", function(event) {
  event.preventDefault();

  $("#sign-up").animateCss("pulse", function() {
    window.location.href = "/signup";
  });
});

$("#sign-in-modal").on("click", function(event) {
  event.preventDefault();
  $("#account-info").modal("show");
});

$("#go-home").on("click", function(event) {
  event.preventDefault();
  console.log("hello");
  $("#go-home").animateCss("pulse", function() {
    window.location.href = "/";
  });
});

$("#sign-in").on("click", function(event) {
  event.preventDefault();

  var user = {
    email: $("#email")
      .val()
      .trim(),
    // eslint-disable-next-line camelcase
    account_key: $("#account_password")
      .val()
      .trim()
  };

  $.post("/login", user, function(results) {
    if (results) {
      $(location).attr("href", "/landing");
    } else {
      $("#account-info").modal("close");
      alert("oops something went wrong, please try again!");
    }
  });
});
