// Mind Body Bloom - custom client-side form validation (no native-only validation)
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('signup-form');
  if (!form) return;

  var successBox = document.getElementById('form-success');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;

    valid = validateRequired('name', 'Please enter your name.') && valid;
    valid = validateEmail('email') && valid;
    valid = validateRequired('goal', 'Please select a health goal.') && valid;
    valid = validateMessage('message') && valid;

    if (valid) {
      form.classList.add('d-none');
      if (successBox) {
        successBox.classList.remove('hidden');
        successBox.textContent = "Thanks! We'll be in touch with tips tailored to your goal.";
      }
    }
  });

  function fieldEls(id) {
    var input = document.getElementById(id);
    var error = document.getElementById(id + '-error');
    return { input: input, error: error };
  }

  function showError(id, message) {
    var els = fieldEls(id);
    if (!els.input) return;
    els.input.classList.add('field-invalid');
    if (els.error) {
      els.error.textContent = message;
      els.error.classList.remove('hidden');
    }
  }

  function clearError(id) {
    var els = fieldEls(id);
    if (!els.input) return;
    els.input.classList.remove('field-invalid');
    if (els.error) {
      els.error.textContent = '';
      els.error.classList.add('hidden');
    }
  }

  function validateRequired(id, message) {
    var els = fieldEls(id);
    if (!els.input) return true;
    if (!els.input.value.trim()) {
      showError(id, message);
      return false;
    }
    clearError(id);
    return true;
  }

  function validateEmail(id) {
    var els = fieldEls(id);
    if (!els.input) return true;
    var value = els.input.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      showError(id, 'Please enter your email address.');
      return false;
    }
    if (!emailPattern.test(value)) {
      showError(id, 'Please enter a valid email address (e.g. name@example.com).');
      return false;
    }
    clearError(id);
    return true;
  }

  function validateMessage(id) {
    var els = fieldEls(id);
    if (!els.input) return true;
    var value = els.input.value.trim();
    if (value.length > 0 && value.length < 10) {
      showError(id, 'Message should be at least 10 characters, or left blank.');
      return false;
    }
    clearError(id);
    return true;
  }
});
