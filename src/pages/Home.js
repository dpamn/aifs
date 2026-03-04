import { Hero } from '../components/Hero.js';
import { Features } from '../components/Features.js';
import { Exams } from '../components/Exams.js';

export const Home = {
    render: () => `
    <div>
      ${Hero.render()}
      ${Features.render()}
      ${Exams.render()}
      
      <!-- CTA Section -->
      <section class="section" style="background-color: var(--primary-color); color: white; text-align: center;">
        <div class="container">
          <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">Ready to start your journey?</h2>
          <p style="font-size: 1.25rem; max-width: 600px; margin: 0 auto 2rem; color: #e0e7ff;">Join thousands of successful students who trusted ApexPrep for their preparation.</p>
          <a href="#/signup" class="btn" style="background: white; color: var(--primary-color); padding: 1rem 2.5rem; font-size: 1.125rem;">Start Free Trial</a>
        </div>
      </section>
    </div>
  `,
    after_render: () => {
        Hero.after_render();
        Features.after_render();
        Exams.after_render();
    }
};
