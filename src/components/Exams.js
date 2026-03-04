export const Exams = {
    render: () => `
    <section id="exams" class="section" style="background-color: var(--background-white);">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Popular Exams</h2>
          <p class="section-subtitle">Targeted preparation modules for India's toughest competitive examinations.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div class="exam-card">
            <div class="exam-banner">JEE</div>
            <div class="exam-content">
              <h3 class="exam-title">Engineering Entrance</h3>
              <p class="exam-details">Comprehensive physics, chemistry, and mathematics preparation for IIT aspirants.</p>
              <div class="exam-meta">
                <span><i class="fas fa-users"></i> 50k+ Enrolled</span>
                <a href="#/exam/jee" class="text-primary font-bold">View Course &rarr;</a>
              </div>
            </div>
          </div>
          <div class="exam-card">
            <div class="exam-banner" style="background: linear-gradient(135deg, #10b981, #34d399);">NEET</div>
            <div class="exam-content">
              <h3 class="exam-title">Medical Entrance</h3>
              <p class="exam-details">Specialized biology, physics, and chemistry modules for aspiring doctors.</p>
              <div class="exam-meta">
                <span><i class="fas fa-users"></i> 80k+ Enrolled</span>
                <a href="#/exam/neet" class="text-primary font-bold">View Course &rarr;</a>
              </div>
            </div>
          </div>
          <div class="exam-card">
            <div class="exam-banner" style="background: linear-gradient(135deg, #f59e0b, #fbbf24);">UPSC</div>
            <div class="exam-content">
              <h3 class="exam-title">Civil Services</h3>
              <p class="exam-details">Extensive coverage of prelims and mains syllabus by ex-bureaucrats.</p>
              <div class="exam-meta">
                <span><i class="fas fa-users"></i> 30k+ Enrolled</span>
                <a href="#/exam/upsc" class="text-primary font-bold">View Course &rarr;</a>
              </div>
            </div>
          </div>
          <div class="exam-card">
            <div class="exam-banner" style="background: linear-gradient(135deg, #ec4899, #f472b6);">SSC</div>
            <div class="exam-content">
              <h3 class="exam-title">Staff Selection</h3>
              <p class="exam-details">Targeted material for CGL, CHSL and other government postings.</p>
              <div class="exam-meta">
                <span><i class="fas fa-users"></i> 90k+ Enrolled</span>
                <a href="#/exam/ssc" class="text-primary font-bold">View Course &rarr;</a>
              </div>
            </div>
          </div>
          <div class="exam-card">
            <div class="exam-banner" style="background: linear-gradient(135deg, #8b5cf6, #a78bfa);">Banking</div>
            <div class="exam-content">
              <h3 class="exam-title">IBPS & SBI</h3>
              <p class="exam-details">Master quantitative aptitude and reasoning for bank PO and clerk exams.</p>
              <div class="exam-meta">
                <span><i class="fas fa-users"></i> 120k+ Enrolled</span>
                <a href="#/exam/banking" class="text-primary font-bold">View Course &rarr;</a>
              </div>
            </div>
          </div>
          <div class="exam-card">
            <div class="exam-banner" style="background: linear-gradient(135deg, #06b6d4, #22d3ee);">GATE</div>
            <div class="exam-content">
              <h3 class="exam-title">Graduate Aptitude</h3>
              <p class="exam-details">In-depth technical subjects coverage for PG admissions and PSUs.</p>
              <div class="exam-meta">
                <span><i class="fas fa-users"></i> 25k+ Enrolled</span>
                <a href="#/exam/gate" class="text-primary font-bold">View Course &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
    after_render: () => { }
};
