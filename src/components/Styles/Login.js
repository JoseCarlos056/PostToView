import styled, { createGlobalStyle  } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const Container = styled.div`
display: flex;
justify-content: center;
align-items:center;
height: 100vh;
background-color: #ecf0f1;
.title{
  font-size:28px;
  font-weight: bold;
  text-transform: capitalize;
}
.title-primary{
  color: #fff;
}
.title-second{
  color: green;
}
.description{
  font-size: 14px;
  font-weight: 300;

  line-height: 30px;
}
.description-primary{
  color: #fff;
}
.description-second{
  color: #7f8c8d;
}
.btn{
  border-radius: 15px;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  padding: 10px 50px;
  font-weight: bold;
  cursor: pointer;
  width: 150px;
  align-self: center;
  outline: none;
  border: none;
}
.btn-primary{
  background-color: transparent;
  border: 1px solid #fff;
&:hover{
  background-color: #fff;
  color: green;
}
}
.btn-second{
  background-color: #58af9b;
  border: 1px solid #58af9b;
&:hover{
  background-color: #fff;
  color: green;
}
}
.first-content{
  display: none !important;
  position: relative;
}

.list-social-media{
  list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  .item-social-media{
    border: 1px solid #bdc3c7;
    border-radius: 50%;
    width: 35px;
    height:35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px; 
    svg{
      color: #95a5a6;
      }
    
  }
  .form{
    display: flex;
    flex-direction: column;
    width: 55%;
    input{
      height: 45px;
      border: none;
      background-color: #ecf0f1;
      margin: 8px;
      width: 100%;
     
    }
  }
 .label-input{
background-color: #ecf0f1;
display:flex;
align-items:center;
margin: 8px;
svg{
  color: #7f8c8d;
  padding: 0 5px;
}
 }
  .content {
    border-radius: 15px;
    background: white;
    width: 960px;
    height: 70%;
    justify-content: space-between;
    align-items:center;
    &:before{
      position: absolute;
      background: green;
      width: 40%;
      height: 100%;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px
    }
  }
  .content::before{
    content: "";
      position: absolute;
      background: green;
      width: 40%;
      height: 100%;
    }
  .first-column{
    z-index: 1;
    text-align: center;
    flex: 1 0 auto;
  }
  .second-column{
    flex: 2 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .second-content{
  position: absolute;
  display: flex;
  .first-column{
    order: 2;
  }
  .second-column-column{
    order:1;
  }
}
`;