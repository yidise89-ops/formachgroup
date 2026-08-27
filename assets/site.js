// Formach Group - shared behaviour
document.addEventListener('DOMContentLoaded', function () {
  // build email address at runtime (light spam protection)
  var email = 'info' + '@' + 'formachgroup.com';
  document.querySelectorAll('.email-link').forEach(function (el) {
    el.href = 'mailto:' + email;
    if (!el.dataset.keepText) el.textContent = email;
  });
  // mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
});

// contact form (demo submit - no backend yet)
function submitForm() {
  var name = document.getElementById('f-name').value;
  var email = document.getElementById('f-email').value;
  if (!name || !email) {
    alert(document.documentElement.lang === 'fr'
      ? 'Veuillez remplir votre nom et votre adresse email.'
      : 'Please fill in your name and email address.');
    return;
  }
  document.getElementById('form-success').style.display = 'block';
  document.querySelector('.form-submit').style.display = 'none';
}
