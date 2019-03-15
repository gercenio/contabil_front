import React, { Component } from 'react';

class ContactComponent extends Component {

    render() {
        return (        
            <section id="three" class="wrapper style1 fade-up">
            <div class="inner">
              <h2>Entre em Contato</h2>
              <p>Consulte nossa equipe especializada e agende uma Reunião, teremos o prazer de Atende-lo seja em nosso escritório ou na sua empresa, pois temos certeza que agregaremos valor a sua companhia.</p>
              <div class="split style1">
                <section>
                  <form method="post" action="#">
                    <div class="fields">
                      <div class="field half">
                        <label for="name">Nome</label>
                        <input type="text" name="name" id="name" />
                      </div>
                      <div class="field half">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" />
                      </div>
                      <div class="field">
                        <label for="message">Mensagem</label>
                        <textarea name="message" id="message" rows="5"></textarea>
                      </div>
                    </div>
                    <ul class="actions">
                      <li><a href="" class="button submit">Enviar Mensagem</a></li>
                    </ul>
                  </form>
                </section>
                <section>
                  <ul class="contact">
                    <li>
                      <h3>Endereço</h3>
                      <span>Avenida Paulista, 807 - 23° Andar<br />
                      Bela Vista - São Paulo - SP<br />
                      CEP: 01311-915 Brasil</span>
                    </li>
                    <li>
                      <h3>Email</h3>
                      <a href="#">contato@safecont.com.br</a>
                    </li>
                    <li>
                      <h3>Telefone</h3>
                      <span>(11) 3251-1804</span>
                    </li>
                    <li>
                      <h3>Social</h3>
                      <ul class="icons">
                        <li><a href="#" class="fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="#" class="fa-facebook"><span class="label">Facebook</span></a></li>
                        <li><a href="#" class="fa-github"><span class="label">GitHub</span></a></li>
                        <li><a href="#" class="fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="#" class="fa-linkedin"><span class="label">LinkedIn</span></a></li>
                      </ul>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
            
        );
      }

}

export default ContactComponent;