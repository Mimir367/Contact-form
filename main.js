document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      
      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const email = document.getElementById('email');
      const queryTypes = document.getElementsByName('queryType');
      const message = document.getElementById('message');
      const consent = document.getElementById('consent');
      
      document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
      });

      const showError = (elementId) => {
        document.getElementById(elementId).classList.add('error');
        isValid = false;
      };

      if (!firstName.value.trim()) showError('firstNameGroup');
      if (!lastName.value.trim()) showError('lastNameGroup');
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        document.getElementById('emailErrorMsg').innerText = "This field is required";
        showError('emailGroup');
      } else if (!emailRegex.test(email.value)) {
        document.getElementById('emailErrorMsg').innerText = "Please enter a valid email address";
        showError('emailGroup');
      }

      const isQuerySelected = Array.from(queryTypes).some(radio => radio.checked);
      if (!isQuerySelected) showError('queryGroup');

      if (!message.value.trim()) showError('messageGroup');

      if (!consent.checked) showError('consentGroup');

      if (isValid) {
        const toast = document.getElementById('successToast');
        toast.classList.add('show');
        
        this.reset();
        
        setTimeout(() => {
          toast.classList.remove('show');
        }, 4000);
      }
    });
