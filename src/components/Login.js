import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { Container,GlobalStyle } from './Styles/Login';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state= {

        }
    }
    render(){
        return(
            
			<Container>
				<GlobalStyle/>
			<div className="content first-content">
				<div className="first-column">
					<h2 className="title title-primary">welcome back!</h2>
					<p className="description description-primary">To keep connected with us</p>
					<p className="description description-primary">please login with your personal info</p>
					<button id="signin" className="btn btn-primary">sign in</button>
				</div>    
				<div className="second-column">
					<h2 className="title title-second">create account</h2>
					<div className="social-media">
						<ul className="list-social-media">
							<a className="link-social-media" href="#">
								<li className="item-social-media">
								<FontAwesomeIcon icon={['fab', 'facebook-f']} />
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
									<i className="fab fa-google-plus-g">x</i>
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
									<i className="fab fa-linkedin-in">x</i>
								</li>
							</a>
						</ul>
					</div>
					<p className="description description-second">or use your email for registration:</p>
					<form className="form">
						<label className="label-input" for="">
							<i className="far fa-user icon-modify"></i>
							<input type="text" placeholder="Name" />
						</label>
						
						<label className="label-input" for="">
							<i className="far fa-envelope icon-modify"></i>
							<input type="email" placeholder="Email" />
						</label>
						
						<label className="label-input" for="">
							<i className="fas fa-lock icon-modify"></i>
							<input type="password" placeholder="Password" />
						</label>
						
						
						<button className="btn btn-second">sign up</button>        
					</form>
				</div>
			</div>
			<div className="content second-content">
				<div className="first-column">
					<h2 className="title title-primary">hello, friend!</h2>
					<p className="description description-primary">Enter your personal details</p>
					<p className="description description-primary">and start journey with us</p>
					<button id="signup" className="btn btn-primary">sign up</button>
				</div>
				<div className="second-column">
					<h2 className="title title-second">sign in to developer</h2>
					<div className="social-media">
						<ul className="list-social-media">
							<a className="link-social-media" href="#">
								<li className="item-social-media">
									<i className="fab fa-facebook-f"></i>
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
									<i className="fab fa-google-plus-g"></i>
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
									<i className="fab fa-linkedin-in"></i>
								</li>
							</a>
						</ul>
					</div>
					<p className="description description-second">or use your email account:</p>
					<form className="form">
					
						<label className="label-input" for="">
							<i className="far fa-envelope icon-modify"></i>
							<input type="email" placeholder="Email" />
						</label>
					
						<label className="label-input" for="">
							<i className="fas fa-lock icon-modify"></i>
							<input type="password" placeholder="Password" />
						</label>
					
						<a className="password" href="#">forgot your password?</a>
						<button className="btn btn-second">sign in</button>
					</form>
				</div>
			</div>
		</Container>

        )
    }
}