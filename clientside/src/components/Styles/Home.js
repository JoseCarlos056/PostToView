import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
export const TodoContent = styled.div`
position: fixed;
    top: 70px;
    /* background: blue; */
    height: 100vh;
    left: 2px;
    right: 2px;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
`;
export const Friends = styled.div`
position: relative;
width: 300px;
background-color: #3E3E87;
.searchFriend{
    border-bottom: 1px solid white;
    margin-bottom: 5px;
    margin: 0px 5px;
    label{
        margin: 5px;
        border-radius: 5px;
        background-color: #F2F2F2;
        height: 40px;
        display: flex;
        align-items: center;
        input{
            height: 30px;
            width: 90%;
            border: none;
            border-radius: 5px;
            background-color: #F2F2F2;
            outline: none;
            margin: 3px;
}
        }
      
    }
}
.friends{
    .singlefriends{
        display: flex;
        align-items: center;
        margin: 10px;
        box-shadow: -1px 5px 8px -4px rgba(0,0,0,0.69);
        border-radius: 5px;
        padding: 5px;
        color: #F2F2F2;
        font-weight: bold;
        transition: background-color .3s linear;
        .img{
                    height: 40px;
                    width: 40px;
                    background: blue;
                    border-radius: 30px;
                    margin-right: 15px;
        }
        .info{
            width: 60%;
        }
        .userSlash{
            &:hover{
                svg{
                width: 1.65em;
                height:1.3em;
        }
            }
           
        }
        &:hover{
            background: #3E3EAE;
        }
    }
}
`;
export const Page = styled.div`
position: absolute;
`;
export const Profile = styled.div`
position: relative;
width: 200px;
height: 100%;
.contentProfile{
    text-align: center;
    border-radius: 5px;
    position: absolute;
    width: 100%;
    background-color: #6666CC;
    height: 80%;
    
    .circleProfile{
        ${props => {return console.log(props)}}
        width: 115px;
        height: 115px;
        background-color: #3E3E87;
        border-radius: 80px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        background-image: url(${props => props.image});
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        .uploadImage{
            display: none;
            border-radius: 80px;
            width: 100%;
            height: 100%;
            position: relative;
            background-color: rgba(153, 153, 153, 0.9);
            justify-content: center;
            align-items: center;
            svg{
                color: white;
                width: 30px;
                height: 30px;
            }
            input{
                display: none;
            }
        }
        &:hover{
            .uploadImage{
            display: flex;

            }
        }
    }
    .infoProfile{
        width: 173px;
        height: 285px;
        background: #3E3E87;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        ul{
            padding: 0;
            outline: none;
            text-decoration: none;
            list-style-type: none;
            margin-left: auto;
            margin-right: auto;
            color:  #ECECEF;
            li{
                margin-bottom: 4px;
            }
            
        }
    }
}
`;

export const Navbar = styled.div`
position: fixed;
width: 100%;
height: 60px;
display:flex;
justify-content: center;
align-items: center;
background-color: #6666CC;
.logo{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    img{
        width: auto;
        height: 40px; 
    }
}
.search{
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    
    width: 60%;
    .label-input{
        display: flex;
        align-items: center;
        background: #3E3E87;
        border-radius: 5px;
        input{
        margin: 1px;
        background: #3E3E87;
        outline: none;
        border: none;
        border-radius: 5px;
        height: 35px;
        width: 300px;
        color: white;
    }
    .svg{
        padding: 10px;
        cursor: pointer;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 12%;
        background-color: #ECECEF;
        height: 37px;
      
    }
    }
  
}
.logout{
    width: 20%;
    svg{
        cursor: pointer;
    color: #ECECEF;
    float: right;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    &:hover{
        color:#3E3E87;
    }
    }
}
`;
export const Content = styled.div`
    position: relative;
    width: 500px;
    background-color: #f2f2f2;
    
    .post{
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        background-color: #FFFF;
        width: 95%;
        .profile{
            display: flex;
            .profileInfo{
                display: flex;
                .img{
                    height: 40px;
                    width: 40px;
                    background: blue;
                    border-radius: 30px;
                    margin-right: 15px;
                }
            }
        }
        .contentPost{
            .imgPost{
                border-radius: 5px;
                background: blue;
                height: 400px;
            }

        }
    }
`;