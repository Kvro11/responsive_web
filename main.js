// // Function to load HTML into a container
// async function loadHTML(containerId, filePath) {
//   const container = document.getElementById(containerId);
//   if (container) {
//     const response = await fetch(filePath);
//     const html = await response.text();
//     container.innerHTML = html;
//   }
// }

// // Load the header and footer
// loadHTML('header', './components/Header/index.html');
// // loadHTML('footer', 'footer.html');


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
  console.log("Current Path: ", currentPath); // Debugging the current path

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    console.log("Link Path: ", linkPath); // Debugging the href attribute

    if (linkPath.includes(currentPath)) {  // Make the match flexible
      link.classList.add('active');
      console.log("Active Link:", link);
    } else {
      link.classList.remove('active');
    }
  });
}

// Load the header and footer
loadHTML('header', '/components/Header/index.html');
loadHTML('footer', '/components/Footer/index.html');
