export const Auth = {
    render: () => `
    <div class="container section" style="display: flex; justify-content: center; align-items: center; min-height: 70vh;">
      <div class="glass" style="padding: var(--spacing-xl); border-radius: var(--radius-lg); width: 100%; max-width: 450px; box-shadow: var(--shadow-lg);">
        <div class="text-center" style="margin-bottom: var(--spacing-lg);">
          <div class="logo" style="justify-content: center; font-size: 2rem; margin-bottom: 1rem;">
            <i class="fas fa-rocket text-primary"></i> <span style="color: var(--text-main);">Apex</span><span style="color: var(--primary-color);">Prep</span>
          </div>
          <h2 class="section-title" style="margin-bottom: 0.5rem;" id="auth-title">Welcome Back</h2>
          <p class="text-muted" id="auth-subtitle">Log in to track your progress and access mock tests.</p>
        </div>

        <form id="auth-form" onsubmit="event.preventDefault(); window.location.hash='#/dashboard';">
          <div id="name-field" style="margin-bottom: 1rem; display: none;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Full Name</label>
            <input type="text" placeholder="John Doe" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--background-white); color: var(--text-main); font-family: var(--font-family-body);">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email Address</label>
            <input type="email" placeholder="you@example.com" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--background-white); color: var(--text-main); font-family: var(--font-family-body);">
          </div>
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Password</label>
            <input type="password" placeholder="••••••••" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--background-white); color: var(--text-main); font-family: var(--font-family-body);">
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; padding: 0.75rem; font-size: 1.1rem;" id="auth-btn">Log In</button>
        </form>

        <div class="text-center" style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
          <p class="text-muted" id="auth-switch-text">Don't have an account? <a href="#" id="auth-switch-link" style="color: var(--primary-color); font-weight: 600;">Sign Up</a></p>
        </div>
      </div>
    </div>
  `,
    after_render: () => {
        const switchLink = document.getElementById('auth-switch-link');
        const nameField = document.getElementById('name-field');
        const title = document.getElementById('auth-title');
        const subtitle = document.getElementById('auth-subtitle');
        const btn = document.getElementById('auth-btn');
        const switchText = document.getElementById('auth-switch-text');
        let isLogin = true;

        if (switchLink) {
            switchLink.addEventListener('click', (e) => {
                e.preventDefault();
                isLogin = !isLogin;

                if (isLogin) {
                    nameField.style.display = 'none';
                    title.innerText = 'Welcome Back';
                    subtitle.innerText = 'Log in to track your progress and access mock tests.';
                    btn.innerText = 'Log In';
                    switchText.innerHTML = "Don't have an account? <a href='#' id='auth-switch-link' style='color: var(--primary-color); font-weight: 600;'>Sign Up</a>";
                } else {
                    nameField.style.display = 'block';
                    title.innerText = 'Create Account';
                    subtitle.innerText = 'Join thousands of students cracking top exams.';
                    btn.innerText = 'Sign Up';
                    switchText.innerHTML = "Already have an account? <a href='#' id='auth-switch-link' style='color: var(--primary-color); font-weight: 600;'>Log In</a>";
                }

                // Rebind after DOM update
                MockTest.after_render(); // Reusing the pattern or self contained binder
                // Actually, just calling the outer method again would reset, let's keep it simple: we shouldn't wipe innerHTML, just properties as done above.
                // Rebind inner link
                document.getElementById('auth-switch-link').addEventListener('click', arguments.callee);
            });
        }
    }
};
