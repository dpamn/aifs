import './styles/style.css'
import { initRouter, registerRoute } from './router.js'
import { Navbar } from './components/Navbar.js'
import { Footer } from './components/Footer.js'
import { Home } from './pages/Home.js'
import { MockTest } from './pages/MockTest.js'
import { Dashboard } from './pages/Dashboard.js'
import { Auth } from './pages/Auth.js'
import { ExamPage } from './pages/ExamPage.js'

// Render Global Layout
document.getElementById('app-header').innerHTML = Navbar.render();
document.getElementById('app-footer').innerHTML = Footer.render();

// Bind global layout events
Navbar.after_render();
Footer.after_render();

// Register Routes
registerRoute('/', Home);
registerRoute('/mock-test', MockTest);
registerRoute('/dashboard', Dashboard);
registerRoute('/login', Auth);
registerRoute('/signup', Auth);
registerRoute('/exam/jee', ExamPage);
registerRoute('/exam/neet', ExamPage); // Using same template for demo
registerRoute('/exam/upsc', ExamPage); // Using same template for demo
registerRoute('/exam/ssc', ExamPage); // Using same template for demo
registerRoute('/exam/banking', ExamPage); // Using same template for demo
registerRoute('/exam/gate', ExamPage); // Using same template for demo

// Initialize Router
initRouter();

