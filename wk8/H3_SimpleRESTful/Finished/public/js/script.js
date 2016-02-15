// DOM Ready =============================================================
$(document).ready(function() {

  // Create User
  $("#usernew").on('click', '.btn-post', createUser);
  // Read User
  $("#userinfo").on('click', '.read', readUser);
  // Update User
  $("#userinfo").on('click', '.update', updateUser);
  // Update User Submit
  $("#userupdate").on('click', ".btn-update", submitUser);
  // Delete User
  $("#userinfo").on('click', '.delete', deleteUser);

});

// Create User
function createUser(event) {
    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#usernew input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {
      var newUser = {
        'firstname': $('input#firstname').val(),
        'lastname': $('input#lastname').val(),
        'age': $('input#age').val(),
        'occupation': $('input#occupation').val()
      };
      // Use AJAX to post the object to our adduser service
      $.ajax({
        type: 'POST',
        data: newUser,
        url: '/person',
        dataType: 'JSON'
      }).done(function( res ) {
        var html = new EJS({url: 'views/persons.ejs'}).render(res);
        $("#userinfo").html(html);
        $("input").val('');
      });
    }
    else {
      // If errorCount is more than 0, error out
      alert('Please fill in all fields');
      return false;
    }
};

// Read User
function readUser(event) {
    event.preventDefault();
    // Use AJAX to post the object to our getuser service
    $.ajax({
      type: 'GET',
      url: '/person/' + $(this).attr('rel')
    }).done(function( res ) {
      var html = new EJS({url: 'views/read.ejs'}).render(res);
      $("#userupdate").html(html);
    });
};

// Update User
function updateUser(event) {
    event.preventDefault();
    // Use AJAX to post the object to our getuser service
    $.ajax({
      type: 'GET',
      url: '/person/' + $(this).attr('rel')
    }).done(function( res ) {
      var html = new EJS({url: 'views/update.ejs'}).render(res);
      $("#userupdate").html(html);
    });
};

// Update User Submit
function submitUser(event) {
  var newUser = {
    'firstname': $('#firstname0').val(),
    'lastname': $('#lastname0').val(),
    'age': $('#age0').val(),
    'occupation': $('#occupation0').val()
  };

  // Use AJAX to put the object to our updateuser service
  $.ajax({
    type: 'PUT',
    data: newUser,
    url: '/person/' + $(this).attr('name'),
    dataType: 'JSON'
  }).done(function( res ) {
    $("#userupdate").html("");
    var html = new EJS({url: 'views/persons.ejs'}).render(res);
    $("#userinfo").html(html);
  });
};

// Delete User
function deleteUser(event) {
    event.preventDefault();
    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/person/' + $(this).attr('rel')
        }).done(function( res ) {
          var html = new EJS({url: 'views/persons.ejs'}).render(res);
          $("#userinfo").html(html);
        });

    }
    else {
        // If they said no to the confirm, do nothing
        return false;
    }
};
