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
            <h1>Contabilidade Easy</h1>
            <p>A Contabilidade Easy traz um novo conceito no seguimento de contabilidade ON-LINE, não
                  apenas de contabilidade geradora de impostos e obrigações, mas também de centro de
                  serviços compartilhados em um “escritório on line”, com diversas soluções, acesse o nosso
                  portal de serviços:</p>
            <ul class="actions">
              <li><a href="#one" class="button scrolly">Saiba mais</a></li>
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
