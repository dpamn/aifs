export const Dashboard = {
    render: () => `
    <div class="container section">
      <div class="test-header flex justify-between items-center" style="margin-bottom: var(--spacing-xl);">
        <div>
          <h2 class="section-title" style="margin-bottom: 0;">Welcome, Aryan</h2>
          <p class="text-muted">Target Exam: JEE Advanced 2026</p>
        </div>
        <button class="btn btn-primary"><i class="fas fa-play"></i> Start Daily Quiz</button>
      </div>

      <!-- Stats Overview Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-lg" style="margin-bottom: var(--spacing-xl);">
        <div class="glass" style="padding: var(--spacing-md); border-radius: var(--radius-md); border-left: 4px solid var(--primary-color);">
          <p class="text-muted" style="font-size: 0.875rem; text-transform: uppercase;">Total Tests Taken</p>
          <p style="font-size: 2rem; font-weight: bold; color: var(--text-main);">42</p>
        </div>
        <div class="glass" style="padding: var(--spacing-md); border-radius: var(--radius-md); border-left: 4px solid var(--secondary-color);">
          <p class="text-muted" style="font-size: 0.875rem; text-transform: uppercase;">Average Score</p>
          <p style="font-size: 2rem; font-weight: bold; color: var(--text-main);">78%</p>
        </div>
        <div class="glass" style="padding: var(--spacing-md); border-radius: var(--radius-md); border-left: 4px solid #f59e0b;">
          <p class="text-muted" style="font-size: 0.875rem; text-transform: uppercase;">Current Streak</p>
          <p style="font-size: 2rem; font-weight: bold; color: var(--text-main);"><i class="fas fa-fire" style="color: #f59e0b;"></i> 14 Days</p>
        </div>
        <div class="glass" style="padding: var(--spacing-md); border-radius: var(--radius-md); border-left: 4px solid #ef4444;">
          <p class="text-muted" style="font-size: 0.875rem; text-transform: uppercase;">Weakest Subject</p>
          <p style="font-size: 1.5rem; font-weight: bold; color: var(--text-main); padding-top: 0.5rem;">Organic Chem</p>
        </div>
      </div>

      <!-- Charts & Activity Area -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-lg">
        <!-- Improvement Graph Placeholder -->
        <div class="glass md:col-span-2" style="padding: var(--spacing-lg); border-radius: var(--radius-lg);">
          <h3 style="margin-bottom: var(--spacing-md);">Performance Trend (Last 5 Tests)</h3>
          <div style="height: 250px; display: flex; align-items: flex-end; justify-content: space-around; padding-top: 2rem; border-bottom: 2px solid var(--border-color); border-left: 2px solid var(--border-color);">
            <div style="width: 40px; height: 40%; background: var(--primary-color); border-radius: 4px 4px 0 0; position: relative;">
              <span style="position: absolute; top: -25px; left: 50%; transform: translateX(-50%); font-size: 0.8rem;">40%</span>
            </div>
            <div style="width: 40px; height: 55%; background: var(--primary-color); border-radius: 4px 4px 0 0; position: relative;">
               <span style="position: absolute; top: -25px; left: 50%; transform: translateX(-50%); font-size: 0.8rem;">55%</span>
            </div>
            <div style="width: 40px; height: 50%; background: var(--primary-color); border-radius: 4px 4px 0 0; position: relative;">
               <span style="position: absolute; top: -25px; left: 50%; transform: translateX(-50%); font-size: 0.8rem;">50%</span>
            </div>
            <div style="width: 40px; height: 75%; background: var(--primary-color); border-radius: 4px 4px 0 0; position: relative;">
               <span style="position: absolute; top: -25px; left: 50%; transform: translateX(-50%); font-size: 0.8rem;">75%</span>
            </div>
            <div style="width: 40px; height: 85%; background: var(--secondary-color); border-radius: 4px 4px 0 0; position: relative;">
               <span style="position: absolute; top: -25px; left: 50%; transform: translateX(-50%); font-size: 0.8rem; font-weight: bold; color: var(--secondary-color);">85%</span>
            </div>
          </div>
          <div style="display: flex; justify-content: space-around; margin-top: 1rem; color: var(--text-muted); font-size: 0.8rem;">
            <span>Test 1</span>
            <span>Test 2</span>
            <span>Test 3</span>
            <span>Test 4</span>
            <span>Test 5</span>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="glass" style="padding: var(--spacing-lg); border-radius: var(--radius-lg);">
          <h3 style="margin-bottom: var(--spacing-md);">Recent Activity</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 1rem 0; border-bottom: 1px solid var(--border-color);">
              <p style="font-weight: bold; margin-bottom: 0.2rem;">Full Stack Basics Mock</p>
              <div style="display: flex; justify-content: space-between; font-size: 0.875rem; color: var(--text-muted);">
                <span>Score: 3/3</span>
                <span>Today</span>
              </div>
            </li>
            <li style="padding: 1rem 0; border-bottom: 1px solid var(--border-color);">
              <p style="font-weight: bold; margin-bottom: 0.2rem;">Daily Quiz: Physics</p>
              <div style="display: flex; justify-content: space-between; font-size: 0.875rem; color: var(--text-muted);">
                <span>Score: 4/5</span>
                <span>Yesterday</span>
              </div>
            </li>
            <li style="padding: 1rem 0;">
              <p style="font-weight: bold; margin-bottom: 0.2rem;">Math: Calculus Notes read</p>
              <div style="display: flex; justify-content: space-between; font-size: 0.875rem; color: var(--text-muted);">
                <span>Duration: 45m</span>
                <span>2 days ago</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
    after_render: () => { }
};
