import React from 'react';
import logo from './Styles/img/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSearch, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle, Navbar, Page, Profile, Content, TodoContent, Friends } from './Styles/Home'
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        }
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
                                        <img alt=''></img>
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
                </TodoContent>

            </Page>

        )
    }
}