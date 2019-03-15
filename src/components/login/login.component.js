import React, { Component } from 'react';

class LoginComponent extends Component {
    render() {
        return (
            <section id="for" class="wrapper style4 fullscreen fade-up">
                <div class="inner">
                    <h2>Login</h2>
                    <div class="split style1">
                    <section>
                    <form method="post" action="#">
                    <div class="fields">
                      <div class="field">
                        <label for="name">E-mail</label>
                        <input type="text" name="email" id="email" />
                      </div>
                      <div class="field">
                        <label for="email">Senha</label>
                        <input type="password" name="senha" id="senha" />
                      </div>
                    </div>
                    <ul class="actions">
                      <li><a href="" class="button submit">OK</a></li>
                    </ul>
                    </form>
                    </section>
                    </div>
                </div>
            </section>
        );
    }
}
export default LoginComponent;