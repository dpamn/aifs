export const Footer = {
    render: () => `
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
              <a href="#/exam/jee">JEE Main</a>
              <a href="#/exam/neet">NEET</a>
              <a href="#/exam/upsc">UPSC</a>
              <a href="#/exam/gate">GATE</a>
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
  `,
    after_render: () => { }
};
