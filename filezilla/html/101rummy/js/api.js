const errorMessage = () => { alert('Something went wrong!!, please try again later'); };
// signup form validation
$(document).ready(() => {
  $('#errorMsg').hide();
  $('#successMsg').hide();
  $('#lsuccess').hide();
  $('#lerror').hide();
  $("#joinForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 4,
        maxlength: 30
      },
      email: {
        minlength: 5,
        maxlength: 30,
        required: true,
        email: true
      },
      mobile: {
        minlength: 6,
        maxlength: 16,
        required: true,
        number: true
      },
      password: {
        required: true,
        minlength: 8,
        maxlength: 15,
      },
      /* ConfirmPassword: {
          equalTo: "#password"
      },
      dob: {
          required: true
      },
      CurrencyCode: {
          required: true
      } */
    },
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Username should be of atleast 4 characters",
        maxlength: "Username should have max 30 characters"
      },
      email: {
        required: "Please enter valid Email Address",
        email: "This email address is invalid",
        minlength: "Email should be of atleast 5 characters",
        maxlength: "Email should have max 30 characters"
      },
      mobile: {
        minlength: "Mobile number should have atleast 6 digits ",
        maxlength: "Mobile number should have max 16 digits",
        required: "Please enter your number",
        number: "Mobile number should ne number"
      },
      password: {
        required: "Please enter password",
        minlength: "Enter at-least 8 characters",
        maxlength: "Password should have max 15 characters"
      },
      /* ConfirmPassword: {
          equalTo: "Must match with Password"
      },
      dob: {
          required: "Please enter date of birth"
      },
      CurrencyCode: {
          required: "Please add currency"
      } */
    },
  })
  // Login Form Validation 
  $('#loginForm').validate({
    rules: {
      username: {
        required: true,
        minlength: 4,
        maxlength: 30
      },
      password: {
        required: true,
        minlength: 8,
        maxlength: 15,
      },
    },
    messages: {
      username: {
        required: "Please specify your name",
        minlength: "Username should be of atleast 4 characters",
        maxlength: "Username should have max 30 characters"
      },
      password: {
        required: "Please enter password",
        minlength: "Enter at-least 8 characters",
        maxlength: "Password should have max 15 characters"
      },
    }
  })
  $('#loginform').validate({
    rules: {
      Username: {
        required: true,
        minlength: 4,
        maxlength: 30
      },
      Password: {
        required: true,
        minlength: 8,
        maxlength: 15,
      },
    },
    messages: {
      Username: {
        required: "Please specify your name",
        minlength: "Username should be of atleast 4 characters",
        maxlength: "Username should have max 30 characters"
      },
      Password: {
        required: "Please enter password",
        minlength: "Enter at-least 8 characters",
        maxlength: "Password should have max 15 characters"
      },
    }
  })
})

let submit = true; // Let the user click the button
const form = document.querySelector('form[name="joinForm"]');
// Signup Api
$('#joinForm').on('submit', function (e) {
  e.preventDefault()
  if ($('#joinForm').valid()) {
    if (submit) {
      $('#submitBtn').attr('disabled', true);
      errorMessage
      $.ajax({
        type: "POST",
        contentType: 'application/json',
        dataType: "json",
        url: "./api.php?api=registration",
        data: {
          "name": form.elements['name'].value,
          "email": form.elements['email'].value,
          "mobile": form.elements['mobile'].value,
          "password": form.elements['password'].value,
          "currency_id": 68,
          "country": "IN",
          "password_confirmation": form.elements['password'].value,
          "username": form.elements['name'].value,
          "dob": "1979-01-01",
          "acceptance": true
        },
        success: function (response) {
          if (response.data) {
            $('#successMsg').show()
            $('#successMsgSpan').text('Successfully registered, logging you in');
            window.location.replace(response.data.url);
          } else if (response.errors) {
            var err = [];
            if (response.errors.username) {
              if (response.errors.username) {
                err.push(response.errors.username[0])
              }
              if (response.errors.email) {
                err.push(response.errors.email[0])
              }
              if (response.errors.mobile) {
                err.push(response.errors.mobile[0])
              }
              $('#errorMsg').show();
              for (values in err) {
                $('#errorMsgSpan').append(`<p>=>  ${err[values]}</p>`);
              }
              setTimeout(() => {
                $('#errorMsg').fadeOut('slow');
              }, 3000);
              setTimeout(() => {
                $('#errorMsgSpan').text('');
              }, 3500);
              $('#submitBtn').attr('disabled', false);
            }
          }
        }, error: function () {
          errorMessage
        }
      })
    }
  }
})

// Login Api call
const Lform = document.querySelector('form[name="loginForm"]');
const lform = document.querySelector('form[name="loginform"]');
$('#loginForm').on('submit', function (e) {
  e.preventDefault();
  if ($('#loginForm').valid()) {
    $.ajax({
      type: "POST",
      contentType: 'application/json',
      dataType: "json",
      url: "./api.php?api=login",
      data: {
        "password": Lform.elements['password'].value,
        "username": Lform.elements['username'].value,
      },
      success: function (response) {
        if (response.message) {
          let message = JSON.parse(response.message)
          $('#lerror').show();
          $('#lerrorMessage').text(message.message);
          setTimeout(() => {
            $('#lerror').fadeOut('slow');
          }, 2000)
        } else if (response[0].url) {
          $('#lsuccess').show();
          $('#lsuccessMessage').text('Login Successful');
          window.location.replace(response[0].url);
        }
      },
      error: function (err) {
        errorMessage
      }
    });
  }
});
$('#loginform').on('submit', function (e) {
  e.preventDefault();
  if ($('#loginform').valid()) {
    $.ajax({
      type: "POST",
      contentType: 'application/json',
      dataType: "json",
      url: "./api.php?api=login",
      data: {
        "password": lform.elements['Password'].value,
        "username": lform.elements['Username'].value,
      },
      success: function (response) {
        if (response.message) {
          let message = JSON.parse(response.message)
          $('#lerror').show();
          $('#lerrorMessage').text(message.message);
          setTimeout(() => {
            $('#lerror').fadeOut('slow');
          }, 2000)
        } else if (response[0].url) {
          $('#lsuccess').show();
          $('#lsuccessMessage').text('Login Successful');
          window.location.replace(response[0].url);
        }
      },
      error: function (err) {
        errorMessage
      }
    });
  }
});