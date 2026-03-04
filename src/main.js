import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Navigation bar -->
  <nav class="navbar">
    <div class="container flex justify-between items-center">
      <div class="logo">
        <i class="fas fa-rocket"></i> ApexPrep
      </div>
      <ul class="nav-links">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#features" class="nav-link">Features</a></li>
        <li><a href="#exams" class="nav-link">Popular Exams</a></li>
        <li><a href="#pricing" class="nav-link">Pricing</a></li>
      </ul>
      <div class="nav-links">
        <a href="#" class="nav-link">Log In</a>
        <a href="#" class="btn btn-primary">Sign Up</a>
      </div>
      <button class="mobile-menu-btn" id="mobile-menu-toggle">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <header id="home" class="hero">
    <div class="container">
      <h1>Crack Your Dream Exam <br/> <span class="hero-gradient-text">With Confidence</span></h1>
      <p>ApexPrep brings you top-tier educators, interactive mock tests, and personalized analytics to help you ace the toughest competitive exams.</p>
      <div class="hero-cta">
        <a href="#exams" class="btn btn-primary">Explore Courses</a>
        <a href="#features" class="btn btn-outline">Learn More</a>
      </div>
    </div>
  </header>

  <!-- Features Section -->
  <section id="features" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Why Choose ApexPrep?</h2>
        <p class="section-subtitle">We provide a comprehensive ecosystem designed specifically for competitive exam success.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
        <!-- Feature Card 1 -->
        <div class="feature-card with-img">
          <div class="feature-img-wrapper">
             <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800&h=500" alt="Expert Faculty" class="feature-img">
             <div class="feature-icon-floating"><i class="fas fa-chalkboard-teacher"></i></div>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Expert Faculty</h3>
            <p class="feature-desc">Learn from top educators who have mentored top rankers in premium institutes across the country.</p>
          </div>
        </div>
        <!-- Feature Card 2 -->
        <div class="feature-card with-img">
          <div class="feature-img-wrapper">
             <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=500" alt="Live Classes" class="feature-img">
             <div class="feature-icon-floating"><i class="fas fa-laptop-code"></i></div>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Live & Recorded Classes</h3>
            <p class="feature-desc">Attend live interactive sessions or catch up with recorded lectures anytime, anywhere.</p>
          </div>
        </div>
        <!-- Feature Card 3 -->
        <div class="feature-card with-img">
          <div class="feature-img-wrapper">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500" alt="Performance Analytics" class="feature-img">
             <div class="feature-icon-floating"><i class="fas fa-chart-line"></i></div>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">Performance Analytics</h3>
            <p class="feature-desc">Identify your weak spots with our AI-driven detailed test analysis and personalized feedback loops.</p>
          </div>
        </div>
        <!-- Feature Card 4 -->
        <div class="feature-card with-img">
          <div class="feature-img-wrapper">
             <img src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=800&h=500" alt="Study Material" class="feature-img">
             <div class="feature-icon-floating"><i class="fas fa-book-reader"></i></div>
          </div>
           <div class="feature-content">
            <h3 class="feature-title">Premium Study Material</h3>
            <p class="feature-desc">Access high-quality notes, DPPs (Daily Practice Problems), and previous year question papers.</p>
           </div>
        </div>
        <!-- Feature Card 5 -->
        <div class="feature-card with-img">
          <div class="feature-img-wrapper">
             <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=500" alt="Mock Tests" class="feature-img">
             <div class="feature-icon-floating"><i class="fas fa-tasks"></i></div>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">All India Mock Tests</h3>
            <p class="feature-desc">Compete with thousands of students Nationwide to gauge your true preparation level.</p>
          </div>
        </div>
        <!-- Feature Card 6 -->
        <div class="feature-card with-img">
          <div class="feature-img-wrapper">
             <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800&h=500" alt="Doubt Resolution" class="feature-img">
             <div class="feature-icon-floating"><i class="fas fa-comments"></i></div>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">24/7 Doubt Resolution</h3>
            <p class="feature-desc">Get your doubts solved within minutes by subject matter experts round the clock.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Popular Exams Section -->
  <section id="exams" class="section" style="background-color: var(--background-white);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Popular Exams</h2>
        <p class="section-subtitle">Targeted preparation modules for India's toughest competitive examinations.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
        <!-- Exam Card 1 -->
        <div class="exam-card">
          <div class="exam-banner">JEE Main & Adv</div>
          <div class="exam-content">
            <h3 class="exam-title">Engineering Entrance</h3>
            <p class="exam-details">Comprehensive physics, chemistry, and mathematics preparation for IIT aspirants.</p>
            <div class="exam-meta">
              <span><i class="fas fa-users"></i> 50k+ Enrolled</span>
              <a href="#" class="text-primary font-bold">View Course &rarr;</a>
            </div>
          </div>
        </div>
        <!-- Exam Card 2 -->
        <div class="exam-card">
          <div class="exam-banner" style="background: linear-gradient(135deg, #10b981, #34d399);">NEET UG</div>
          <div class="exam-content">
            <h3 class="exam-title">Medical Entrance</h3>
            <p class="exam-details">Specialized biology, physics, and chemistry modules for aspiring doctors.</p>
            <div class="exam-meta">
              <span><i class="fas fa-users"></i> 80k+ Enrolled</span>
              <a href="#" class="text-primary font-bold">View Course &rarr;</a>
            </div>
          </div>
        </div>
        <!-- Exam Card 3 -->
        <div class="exam-card">
          <div class="exam-banner" style="background: linear-gradient(135deg, #f59e0b, #fbbf24);">UPSC CSE</div>
          <div class="exam-content">
            <h3 class="exam-title">Civil Services</h3>
            <p class="exam-details">Extensive coverage of prelims and mains syllabus by ex-bureaucrats.</p>
            <div class="exam-meta">
              <span><i class="fas fa-users"></i> 30k+ Enrolled</span>
              <a href="#" class="text-primary font-bold">View Course &rarr;</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center" style="margin-top: var(--spacing-xl);">
         <a href="#" class="btn btn-outline" style="padding: 1rem 2rem; font-size: 1.1rem;">Explore All 50+ Exams</a>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section" style="background-color: var(--primary-color); color: white; text-align: center;">
    <div class="container">
      <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">Ready to start your journey?</h2>
      <p style="font-size: 1.25rem; max-width: 600px; margin: 0 auto 2rem; color: #e0e7ff;">Join thousands of successful students who trusted ApexPrep for their preparation.</p>
      <a href="#" class="btn" style="background: white; color: var(--primary-color); padding: 1rem 2.5rem; font-size: 1.125rem;">Start Free Trial</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="logo" style="color: white; margin-bottom: 1rem;">
            <i class="fas fa-rocket"></i> ApexPrep
          </div>
          <p style="color: #94a3b8; margin-bottom: 1rem;">Empowering students to achieve their dreams through quality education and technology.</p>
          <div class="flex gap-md" style="font-size: 1.5rem;">
            <a href="#" style="color: #94a3b8;"><i class="fab fa-twitter"></i></a>
            <a href="#" style="color: #94a3b8;"><i class="fab fa-facebook"></i></a>
            <a href="#" style="color: #94a3b8;"><i class="fab fa-instagram"></i></a>
            <a href="#" style="color: #94a3b8;"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h3>Exams</h3>
          <div class="footer-links">
            <a href="#">JEE Main</a>
            <a href="#">JEE Advanced</a>
            <a href="#">NEET</a>
            <a href="#">UPSC</a>
            <a href="#">GATE</a>
          </div>
        </div>
        <div class="footer-col">
          <h3>Company</h3>
          <div class="footer-links">
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div class="footer-col">
          <h3>Legal</h3>
          <div class="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} ApexPrep Education. All rights reserved.</p>
      </div>
    </div>
  </footer>
`

// Simple mobile menu toggle functionality
const mobileBtn = document.getElementById('mobile-menu-toggle');
mobileBtn.addEventListener('click', () => {
  // Normally you'd toggle a class on the nav-links container to show/hide it
  // For this simple demo, we'll just alert
  alert('Mobile menu toggle triggered!');
});
