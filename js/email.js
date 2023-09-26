document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("emailForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Get form data
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Perform form validation here (e.g., check if required fields are filled)

      // Assuming a simple validation for demonstration
      if (!firstName || !lastName || !email || !subject || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      // Send the form data to your server or perform any desired actions here
      // You can use JavaScript Fetch API or other methods to send data to your server

      // Create a custom alert message using the form data, this is just a stand-in
      const alertMessage = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
      `;

      // Show the custom alert message
      alert(alertMessage);

      // After successful submission, you can clear the form fields
      form.reset();

      // You can also show a success message to the user
      alert("Form submitted successfully!");
  });
});
