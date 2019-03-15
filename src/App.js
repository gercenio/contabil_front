import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import ContactComponent from './components/contact/contact.component';
import LoginComponent from './components/login/login.component';
import PlanComponent from './components/plan/plan.component';
import ServicesComponent from './components/services/services.component';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <HeaderComponent/>
        <div id="wrapper">
            <section id="intro" class="wrapper style1 fullscreen fade-up">
            <div class="inner">
            <h1>Contabil Easy</h1>
            <p>Just another fine responsive site template designed by <a href="http://html5up.net">HTML5 UP</a><br />
            and released for free under the <a href="http://html5up.net/license">Creative Commons</a>.</p>
            <ul class="actions">
              <li><a href="#one" class="button scrolly">Learn more</a></li>
            </ul>
            </div>
            </section>
          <ServicesComponent/>>
          <PlanComponent/>
          <ContactComponent/>
          <LoginComponent/>
        </div>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
