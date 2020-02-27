import React from 'react';
import logo from './Styles/img/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSearch} from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle, Navbar, Page, Profile, Content } from './Styles/Home'
export default class Home extends React.Component{
    constructor(){
        super();
        this.state= {
               
        }
	}

    render(){
   
        return(
        <Page>
             	<GlobalStyle/>

 <Navbar>
             <div className="logo">
            <img src={logo} alt="PostToView" />
             </div>
             <div className="search">
                 <form>
                 <label className="label-input" >
                 <input type='text' />
                 <div className="svg">
                 <FontAwesomeIcon icon={faSearch} />
                 </div>
                     </label>
                 </form>
             </div>
             <div className="logout">
             <FontAwesomeIcon icon={faSignOutAlt} />
             </div>
         </Navbar>
         <Profile>
            <div className="contentProfile">
            <div className="circleProfile">
                
                </div>
                <h3>Name of User</h3>
                <div className="infoProfile">
                    <ul>
                        <li>Amigos</li>
                        <li>Notificações</li>
                        <li>Convites</li>
                        <li>Posts</li>
                    </ul>
                </div>
            </div>
         </Profile>
         <Content>

         </Content>
        </Page>
        
        )
    }
}