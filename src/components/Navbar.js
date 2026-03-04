export const Navbar = {
    render: () => `
    <nav class="navbar">
      <div class="container flex justify-between items-center">
        <a href="#/" class="logo">
          <i class="fas fa-rocket"></i> ApexPrep
        </a>
        <ul class="nav-links">
          <li><a href="#/" class="nav-link">Home</a></li>
          <li><a href="#/" class="nav-link">Exams</a></li>
          <li><a href="#/mock-test" class="nav-link">Mock Tests</a></li>
          <li><a href="#/" class="nav-link">Study Material</a></li>
          <li><a href="#/dashboard" class="nav-link">Dashboard</a></li>
        </ul>
        <div class="nav-links">
          <a href="#/login" class="nav-link">Log In</a>
          <a href="#/signup" class="btn btn-primary">Sign Up</a>
        </div>
        <button class="mobile-menu-btn" id="mobile-menu-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  `,
    after_render: () => {
        const mobileBtn = document.getElementById('mobile-menu-toggle');
        if (mobileBtn) {
            mobileBtn.addEventListener('click', () => {
                alert('Mobile menu toggle triggered!');
            });
        }
    }
};
