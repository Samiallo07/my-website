window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
});

document.getElementById('myForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const messageDiv = form.querySelector('.form-message');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    submitBtn.disabled = true;
    messageDiv.textContent = "Sending...";
    messageDiv.style.color = "#B2AC88";
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        messageDiv.textContent = "Thank you! We'll contact you soon.";
        messageDiv.style.color = "green";
        form.reset();
      } else {
        throw new Error("Failed to send. Please try again later.");
      }
    } catch (error) {
      messageDiv.textContent = error.message || "Error: Please email us directly at nusratullosamiallo@gmail.com";
      messageDiv.style.color = "red";
    } finally {
      submitBtn.disabled = false;
    }
  });


document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const messageDiv = form.querySelector('.form-message');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Disable button during submission
    submitBtn.disabled = true;
    messageDiv.textContent = "Sending...";
    messageDiv.style.color = "#B2AC88";
    
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw err; });
        }
        return response.json();
    })
    .then(data => {
        messageDiv.textContent = data.message;
        messageDiv.style.color = "green";
        if (data.message.includes("Thank you")) {
            form.reset();
        }
    })
    .catch(error => {
        messageDiv.textContent = error.message || "Could not connect to server. Please try again later or email us directly at nusratullosamiallo@gmail.com";
        messageDiv.style.color = "red";
    })
    .finally(() => {
        submitBtn.disabled = false;
    });
});
