import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faLock,faEnvelope,faUser} from '@fortawesome/free-solid-svg-icons'
import { Container,GlobalStyle } from './Styles/Login';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state= {

        }
	}
	showSignIn=_=>{
		console.log('x')
		document.body.classList.remove('sign-up-js');
		document.body.classList.add('sign-in-js');
	}
	showSignUp=_=>{
		document.body.classList.remove('sign-in-js');
		document.body.classList.add('sign-up-js');
	}
    render(){
        return(
            
			<Container>
				<GlobalStyle/>
			<div className="content first-content">
				<div className="first-column">
					<h2 className="title title-primary">Bem vindo de volta!</h2>
					<p className="description description-primary">Para manter-se conectado conosco</p>
					<p className="description description-primary">faça o login com suas informações pessoais</p>
					<button id="signin" className="btn btn-primary"  onClick={this.showSignIn}>Entrar</button>
				</div>    
				<div className="second-column">
					<h2 className="title title-second">Criar Conta</h2>
					<div className="social-media">
						<ul className="list-social-media">
							<a className="link-social-media" href="#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faFacebook} />
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faGooglePlusG} />
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faLinkedinIn} />
								</li>
							</a>
						</ul>
					</div>
					<p className="description description-second">ou se cadastre com outras contas:</p>
					<form className="form">
						<label className="label-input" for="">
						<FontAwesomeIcon icon={faUser} />
							<input type="text" placeholder="Name" />
						</label>
						
						<label className="label-input" for="">
						<FontAwesomeIcon icon={faEnvelope} />
							<input type="email" placeholder="Email" />
						</label>
						
						<label className="label-input" for="">
						<FontAwesomeIcon icon={faLock} />
							<input type="password" placeholder="Password" />
						</label>
						
						
						<button className="btn btn-second">Cadastrar</button>        
					</form>
				</div>
			</div>
			<div className="content second-content">
				<div className="first-column">
					<h2 className="title title-primary">Olá, amigo!</h2>
					<p className="description description-primary">Coloque suas informações</p>
					<p className="description description-primary">e aproveite!</p>
					<button id="signup" className="btn btn-primary" onClick={this.showSignUp}>Cadastrar</button>
				</div>
				<div className="second-column">
					<h2 className="title title-second">Entre no PostToView</h2>
					<div className="social-media">
						<ul className="list-social-media">
							<a className="link-social-media" href="#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faFacebook} />
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faGooglePlusG} />
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={faLinkedinIn} />
								</li>
							</a>
						</ul>
					</div>
					<p className="description description-second">se prefirir usar outras contas:</p>
					<form className="form">
					
						<label className="label-input" for="">
						<FontAwesomeIcon icon={faEnvelope} />
							<input type="email" placeholder="Email" />
						</label>
					
						<label className="label-input" for="">
						<FontAwesomeIcon icon={faLock} />
							<input type="password" placeholder="Password" />
						</label>
					
						<a className="password" href="#">esqueceu a senha?</a>
						<button className="btn btn-second">entrar</button>
					</form>
				</div>
			</div>
		</Container>

        )
    }
}