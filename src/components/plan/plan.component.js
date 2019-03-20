import React, { Component } from 'react';

class PlanComponent extends Component {
    render(){
        return (
            <section id="two" class="wrapper style3 fade-up">
    <div class="inner">
      <h2>Serviços</h2>
      {/* <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p> */}
      <div class="features">
        <section>
          <span class="icon major fa-code"></span>
          <h3>Abertura de Empresa e Conta</h3>
          <p>Abertura de contas Integradas com instituições financeira on line juntamente com a abertura de sua empresa.</p>
        </section>
        <section>
          <span class="icon major fa-lock"></span>
          <h3>Seguros</h3>
          <p>Seguros tanto no ramo de seguros pessoa jurídica e fisica.</p>
        </section>
        <section>
          <span class="icon major fa-cog"></span>
          <h3>Consultoria financeira</h3>
          <p>Elaboração de plano de vendas, orçamento fluxo de caixa.</p>
        </section>
        <section>
          <span class="icon major fa-desktop"></span>
          <h3>Assessoria Jurídica</h3>
          <p>Conte com nossos advogados nas áreas Civil, trabalhista e tributaria.</p>
        </section>
        {/* <section>
          <span class="icon major fa-chain"></span>
          <h3>Urna quis bibendum</h3>
          <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
        </section>
        <section>
          <span class="icon major fa-diamond"></span>
          <h3>Aliquam urna dapibus</h3>
          <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
        </section> */}
      </div>
      <ul class="actions">
        <li><a href="generic.html" class="button">Learn more</a></li>
      </ul>
    </div>
  </section>
        );
    }
    
}

export default PlanComponent;