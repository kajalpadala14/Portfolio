emailjs.init("5Yec7AKHs2hm8iyWC");

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_r1rso14', 'template_joir4tc', this)
        .then(function() {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); 
        }, function(error) {
            console.log('Failed to send message:', error);
            alert('Failed to send message. Please try again.');
        });
});