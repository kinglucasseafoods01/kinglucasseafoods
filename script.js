const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-open');
});

sidebarClose.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-open');
});
