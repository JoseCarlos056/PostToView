import React from 'react';
import logo from './Styles/img/logo.png'
import jwtdecode from 'jwt-decode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSearch, faUpload } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle, Navbar, Page, Profile,  TodoContent } from './Styles/Home'
import { uploadImage, updateUser } from './functions/UserFunctions';
import { Posts } from './Posts';
import { ChatFriends } from './ChatFriends';
import { Chat } from './Chat';
import { Search } from './Search';
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            imageProfile: jwtdecode(localStorage.token).image,
            user :  jwtdecode(localStorage.token),
            search: '',
        }

    }
    onChange=(e)=>{
  if(!e.target.files[0])
  return;
       const formData = new FormData();
       formData.append('image',e.target.files[0]);
       uploadImage(formData).then(response=>{
           if(response.status === 200)
           return  this.setState({imageProfile : response.data.link},()=>{
            updateUser({newProfileImage: this.state.imageProfile, deletehash: response.data.deletehash }, localStorage.token).then(res =>{
                console.log(res, true)
            })
           })
           window.alert('Erro ao realizar o upload')
           console.log(response, 'repso')
       })
    }
    logOut=_=>{
        const { history } = this.props;
        localStorage.clear();
        return history.push('/')

    }
    onChange = (ev) =>{
        this.setState({[ev.currentTarget.name] : ev.currentTarget.value})
    }
    render() {

        return (
            <Page>
                <GlobalStyle />

                <Navbar>
                    <div className="logo">
                        <img src={logo} alt="PostToView" />
                    </div>
                    <div className="search">
                        <form>
                            <label className="label-input" >
                                <input type='text' name='search' value={this.state.search} onChange={this.onChange} />
                                <div className="svg">
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                            </label>
                        </form>
                    </div>
                    <div className="logout">
                        <FontAwesomeIcon icon={faSignOutAlt} onClick={this.logOut} />
                    </div>
                </Navbar>
               {!!this.state.search.length &&  <Search  input={this.state.search}  />}
                <TodoContent>
                    <Chat />
               {/* <ChatFriends /> */}
                  <Posts { ...this.state.user }/>
                    <Profile image={this.state.imageProfile}>
                        <div className="contentProfile">
                            <div className="circleProfile">
                                <div className="uploadImage">
                                    <label for="file-input">
                                        <FontAwesomeIcon icon={faUpload} />
                                    </label>

                                    <input id="file-input" type="file" onChange= {this.onChange} />

                                </div>
                            </div>
                            <h3>{this.state.user.name}</h3>
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
                </TodoContent>

            </Page>

        )
    }
}