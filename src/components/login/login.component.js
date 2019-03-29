import React, { Component } from 'react';
//import AuthService from './AuthService';

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
//   constructor(){
//     super();
//     this.handleChange = this.handleChange.bind(this);
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.Auth = new AuthService();
//   }
//   render() {
//       return (
//           <div className="center">
//               <div className="card">
//                   <h1>Login</h1>
//                   <form>
//                       <input
//                           className="form-item"
//                           placeholder="Username goes here..."
//                           name="username"
//                           type="text"
//                           onChange={this.handleChange}
//                       />
//                       <input
//                           className="form-item"
//                           placeholder="Password goes here..."
//                           name="password"
//                           type="password"
//                           onChange={this.handleChange}
//                       />
//                       <input
//                           className="form-submit"
//                           value="SUBMIT"
//                           type="submit"
//                       />
//                   </form>
//               </div>
//           </div>
//       );
//   }

//   handleChange(e){
//       this.setState(
//           {
//               [e.target.name]: e.target.value
//           }
//       )
//   }

//   handleFormSubmit(e){
//     e.preventDefault();
  
//     this.Auth.login(this.state.username,this.state.password)
//         .then(res =>{
//            this.props.history.replace('/');
//         })
//         .catch(err =>{
//             alert(err);
//         })
//   }

//   componentWillMount(){
//     if(this.Auth.loggedIn())
//         this.props.history.replace('/');
//   }
}
export default LoginComponent;