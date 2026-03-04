export const ExamPage = {
    render: () => `
    <div class="container section">
      <div class="test-header glass" style="margin-bottom: var(--spacing-xl); padding: var(--spacing-xl); border-radius: var(--radius-lg); background: linear-gradient(135deg, var(--background-white), var(--background-light)); border-left: 6px solid var(--primary-color);">
        <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; font-family: var(--font-family-heading);">JEE Advanced <span style="font-size: 1rem; vertical-align: middle; background: var(--primary-color); color: white; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); margin-left: 0.5rem;">Engineering</span></h1>
        <p class="text-muted" style="font-size: 1.1rem; max-width: 800px;">The Joint Entrance Examination (Advanced) is an academic examination held annually in India for admission to the Indian Institutes of Technology (IITs). ApexPrep's targeted module prepares you for the high-level application-based questions.</p>
        
        <div class="flex gap-md" style="margin-top: var(--spacing-md);">
           <button class="btn btn-primary"><i class="fas fa-play-circle"></i> View Top Lectures</button>
           <button class="btn btn-outline"><i class="fas fa-download"></i> Download Syllabus PDF</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
        <!-- Main Content -->
        <div class="md:col-span-2">
          
          <h2 class="section-title" style="margin-bottom: var(--spacing-md); font-size: 1.8rem;">Study Material</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-md" style="margin-bottom: var(--spacing-xl);">
            <div class="glass flex items-center gap-md" style="padding: 1rem; border-radius: var(--radius-md);">
               <div style="font-size: 2rem; color: #ef4444;"><i class="fas fa-file-pdf"></i></div>
               <div>
                 <h4 style="font-weight: 600;">Physics Mechanics Notes</h4>
                 <p class="text-muted" style="font-size: 0.8rem;">1.2 MB | Detailed derivation</p>
               </div>
               <button class="btn" style="margin-left: auto; padding: 0.5rem; background: transparent; color: var(--primary-color);"><i class="fas fa-cloud-download-alt"></i></button>
            </div>
            <div class="glass flex items-center gap-md" style="padding: 1rem; border-radius: var(--radius-md);">
               <div style="font-size: 2rem; color: #ef4444;"><i class="fas fa-file-pdf"></i></div>
               <div>
                 <h4 style="font-weight: 600;">Organic Chem Reactions</h4>
                 <p class="text-muted" style="font-size: 0.8rem;">3.4 MB | Memory Maps</p>
               </div>
               <button class="btn" style="margin-left: auto; padding: 0.5rem; background: transparent; color: var(--primary-color);"><i class="fas fa-cloud-download-alt"></i></button>
            </div>
          </div>

          <h2 class="section-title" style="margin-bottom: var(--spacing-md); font-size: 1.8rem;">Leaderboard (This Week)</h2>
          <div class="glass" style="border-radius: var(--radius-md); overflow: hidden;">
            <table style="width: 100%; text-align: left; border-collapse: collapse;">
              <thead style="background: var(--background-alt); border-bottom: 2px solid var(--border-color);">
                <tr>
                  <th style="padding: 1rem;">Rank</th>
                  <th style="padding: 1rem;">Student</th>
                  <th style="padding: 1rem;">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem; font-weight: bold; color: #f59e0b;"><i class="fas fa-trophy"></i> 1</td>
                  <td style="padding: 1rem;">Neha Sharma</td>
                  <td style="padding: 1rem; font-weight: 600;">98.5%</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-color);">
                  <td style="padding: 1rem; font-weight: bold; color: #94a3b8;"><i class="fas fa-medal"></i> 2</td>
                  <td style="padding: 1rem;">Rahul Verma</td>
                  <td style="padding: 1rem; font-weight: 600;">96.0%</td>
                </tr>
                <tr>
                  <td style="padding: 1rem; font-weight: bold; color: #b45309;"><i class="fas fa-medal"></i> 3</td>
                  <td style="padding: 1rem;">Aryan Singh (You)</td>
                  <td style="padding: 1rem; font-weight: 600; color: var(--primary-color);">94.2%</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

        <!-- Sidebar -->
        <div>
          <div class="glass" style="padding: var(--spacing-md); border-radius: var(--radius-md); margin-bottom: var(--spacing-lg);">
            <h3 style="margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">AI Question Generator</h3>
            <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 1rem;">Generate tailored practice questions instantly.</p>
            <select style="width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--background-white); color: var(--text-main);">
              <option>Select Subject</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Mathematics</option>
            </select>
            <select style="width: 100%; padding: 0.5rem; margin-bottom: 1rem; border: 1px solid var(--border-color); border-radius: 4px; background: var(--background-white); color: var(--text-main);">
              <option>Difficulty Level</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <button class="btn btn-primary" style="width: 100%;" onclick="alert('Generating AI Questions...')"><i class="fas fa-magic"></i> Generate Now</button>
          </div>

          <div class="glass" style="padding: var(--spacing-md); border-radius: var(--radius-md); background: linear-gradient(135deg, var(--secondary-color), #059669); color: white;">
             <h3 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;"><i class="fas fa-calendar-alt"></i> Daily Target</h3>
             <p style="font-size: 0.9rem; margin-bottom: 1rem; opacity: 0.9;">Complete 30 Physics questions to maintain your 14-day streak!</p>
             <div style="background: rgba(255,255,255,0.2); height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 0.5rem;">
               <div style="width: 60%; background: white; height: 100%;"></div>
             </div>
             <p style="font-size: 0.8rem; text-align: right;">18/30 Completed</p>
          </div>
        </div>
      </div>
    </div>
  `,
    after_render: () => { }
};
