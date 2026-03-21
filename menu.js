// Menu Tab Switcher
function switchTab(tabId, btn) {
  // Hide all panels
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  // Deactivate all buttons
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  // Show selected panel and activate button
  document.getElementById('panel-' + tabId).classList.add('active');
  btn.classList.add('active');
  // Scroll to just below the category buttons smoothly
  const buttonsSection = document.querySelector('.tabs-wrapper');
  const offset = buttonsSection.offsetTop + buttonsSection.offsetHeight;
  window.scrollTo({ top: offset, behavior: 'smooth' });
}
