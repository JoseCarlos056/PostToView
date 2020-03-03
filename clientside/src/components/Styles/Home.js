import styled, { createGlobalStyle, keyframes   } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
export const Page = styled.div`
position: absolute;
`;
export const Profile = styled.div`
position: fixed;
width: 200px;
height: 100%;
top: 70px;
right: 20px;
.contentProfile{
    text-align: center;
    border-radius: 5px;
    position: absolute;
    width: 100%;
    background-color: #6666CC;
    height: 80%;
    
    .circleProfile{
        width: 115px;
        height: 115px;
        background-color: #3E3E87;
        border-radius: 80px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
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
    margin: auto !important;
    left: 0 !important;
    position: fixed;
    width: 500px;
    height: 100%;
    top: 70px;
    right: 0;
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