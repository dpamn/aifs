export const Features = {
    render: () => `
    <section id="features" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose ApexPrep?</h2>
          <p class="section-subtitle">We provide a comprehensive ecosystem designed specifically for competitive exam success.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div class="feature-card with-img">
            <div class="feature-img-wrapper">
               <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800&h=500" alt="AI Generated Practice Questions" class="feature-img">
               <div class="feature-icon-floating"><i class="fas fa-robot"></i></div>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">AI Generated Practice Questions</h3>
              <p class="feature-desc">Dynamic questions generated specifically to target your weak areas.</p>
            </div>
          </div>
          <div class="feature-card with-img">
            <div class="feature-img-wrapper">
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=500" alt="Real Time Mock Tests" class="feature-img">
               <div class="feature-icon-floating"><i class="fas fa-stopwatch"></i></div>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Real Time Mock Tests</h3>
              <p class="feature-desc">Experience the exact exam interface with our timed, all-India mock tests.</p>
            </div>
          </div>
          <div class="feature-card with-img">
            <div class="feature-img-wrapper">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500" alt="Performance Analytics Dashboard" class="feature-img">
               <div class="feature-icon-floating"><i class="fas fa-chart-line"></i></div>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Performance Analytics</h3>
              <p class="feature-desc">Identify your weak spots with our AI-driven detailed test analysis.</p>
            </div>
          </div>
          <div class="feature-card with-img">
            <div class="feature-img-wrapper">
               <img src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=800&h=500" alt="Smart Study Planner" class="feature-img">
               <div class="feature-icon-floating"><i class="fas fa-calendar-alt"></i></div>
            </div>
             <div class="feature-content">
              <h3 class="feature-title">Smart Study Planner</h3>
              <p class="feature-desc">Structured learning paths that adapt as your progress.</p>
             </div>
          </div>
          <div class="feature-card with-img">
            <div class="feature-img-wrapper">
               <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800&h=500" alt="Previous Year Papers" class="feature-img">
               <div class="feature-icon-floating"><i class="fas fa-file-alt"></i></div>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Previous Year Papers</h3>
              <p class="feature-desc">Extensive archive of official past papers with detailed video solutions.</p>
            </div>
          </div>
          <div class="feature-card with-img">
            <div class="feature-img-wrapper">
               <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800&h=500" alt="Topic Wise Quizzes" class="feature-img">
               <div class="feature-icon-floating"><i class="fas fa-tasks"></i></div>
            </div>
            <div class="feature-content">
              <h3 class="feature-title">Topic Wise Quizzes</h3>
              <p class="feature-desc">Micro-learning challenges to master individual concepts quickly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    after_render: () => { }
};
