$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your first name",
      lastname: "Please enter your last name",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 8 characters long",
      },
      email: "Please enter a valid email address",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    // or call a JS function inside the submitHandler
    submitHandler: function (form) {
      form.submit();
    },
  });
});
