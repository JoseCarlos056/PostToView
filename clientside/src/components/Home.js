import React from 'react';
import logo from './Styles/img/logo.png'
import jwtdecode from 'jwt-decode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSearch, faUserAltSlash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle, Navbar, Page, Profile, Content, TodoContent, Friends } from './Styles/Home'
import { UploadImage, UpdateUser } from './functions/UserFunctions'
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            imageProfile: jwtdecode(localStorage.token).image
        }
    }
    onChange=(e)=>{
  if(!e.target.files[0])
  return;
       const formData = new FormData();
       formData.append('image',e.target.files[0]);
       UploadImage(formData).then(response=>{
           if(response.status === 200)
           return  this.setState({imageProfile : response.data.link},()=>{
            UpdateUser({newProfileImage: this.state.imageProfile}, localStorage.token).then(res =>{
                console.log(res, true)
            })
           })
           window.alert('Erro ao realizar o upload')
           console.log(response, 'repso')
       })
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
                <TodoContent>
                    <Friends>
                        <div className="searchFriend">
                            <label>
                                <input></input>
                                <FontAwesomeIcon icon={faSearch} />
                            </label>
                        </div>
                        <div className="friends">
                            <div className="singlefriends">
                                <div className="img">
                                    <img alt=''></img>
                                </div>
                                <div className="info">
                                    <p>Name User</p>
                                </div>
                                <div className="userSlash">
                                    <FontAwesomeIcon icon={faUserAltSlash} />
                                </div>

                            </div>
                            <div className="singlefriends">
                                <div className="img">
                                    <img alt=''></img>
                                </div>
                                <p>Name User1</p>
                            </div>
                            <div className="singlefriends">
                                <div className="img">
                                    <img alt=''></img>
                                </div>
                                <p>Name User2</p>
                            </div>
                            <div className="singlefriends">
                                <div className="img">
                                    <img alt=''></img>
                                </div>
                                <p>Name User3</p>
                            </div>
                            <div className="singlefriends">
                                <div className="img">
                                    <img alt=''></img>
                                </div>
                                <p>Name User4</p>
                            </div>
                        </div>
                    </Friends>
                    <Content>
                        <div className="post">
                            <div className="profile">
                                <div className="profileInfo">
                                    <div className="img">
                                        <img src='https://www.ufrgs.br/naucln/wp-content/uploads/2018/07/person.png' alt=''></img>
                                    </div>
                                    <p>Name</p>
                                </div>
                            </div>
                            <div className="contentPost">
                                Description
                    <div className="imgPost">
                                    <img alt=''></img>
                                </div>
                            </div>

                        </div>
                    </Content>
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
                </TodoContent>

            </Page>

        )
    }
}