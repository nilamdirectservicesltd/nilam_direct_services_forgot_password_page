const forgotPasswordForm = document.getElementById('forgotPasswordForm');

forgotPasswordForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission from refreshing the page

  // Get the form input value
  const email = document.querySelector('input[name="email"]').value;

  // Here, you can handle the form submission logic, such as sending a reset password email to the user

  // Redirect to the reset success page
  window.location.href = "https://nilamdirectservicesltd.github.io/nds-reset-success-page/";
});
