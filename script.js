      function sendEmail() {
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "astra9anonymous@gmail.com",
          Password: "767CF4586F06EBC12A83676FEFD90AAF948B",
          To: "astra9anonymous@gmail.com",
          From: document.getElementById("email").value,
          Subject: "New contact form enquire",
          Body:
            "Name: " +
            document.getElementById("name").value +
            "<br> Mail: " +
            document.getElementById("email").value +
            "<br> Phone: " +
            document.getElementById("phone").value +
            "<br> Message: " +
            document.getElementById("message").value,
        }).then((message) => alert(message));
      }