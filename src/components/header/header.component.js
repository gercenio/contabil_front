import React, { Component } from 'react';

class HeaderComponent extends Component {

    render() {
        return (        
          <section id="sidebar">
                    <div class="inner">
                        <nav>
                            <ul>
                                <li><a href="#intro">Welcome</a></li>
                                <li><a href="#one">Planos</a></li>
                                <li><a href="#two">Serviços</a></li>
                                <li><a href="#three">Fale Conosco</a></li>
                                <li><a href="#for">Login</a></li>
                            </ul>
                        </nav>
                    </div>
            </section>          
            
        );
      }
}

export default HeaderComponent;
