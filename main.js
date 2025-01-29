// Function to load HTML into a container
async function loadHTML(containerId, filePath) {
  const container = document.getElementById(containerId);
  if (container) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error(`Failed to load ${filePath}`);
      const html = await response.text();
      container.innerHTML = html;

      // Call the function to set the active link after content is loaded
      if (containerId === 'header') setActiveNavLink();
    } catch (error) {
      console.error(error);
    }
  }
}

// Function to set the active navigation link
function setActiveNavLink() {
  const navLinks = document.querySelectorAll('#header li a');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.endsWith(linkPath)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Load the header and footer
loadHTML('header', '/components/Header/index.html');
loadHTML('footer', '/components/Footer/index.html');