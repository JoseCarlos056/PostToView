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
.description{
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  line-height: 30px;
}
.btn{
  border-radius: 15px;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  padding: 10px 50px;
  font-weight: bold;
  cursor: pointer;
}
.btn-primary{
  background-color: transparent;
  border: 1px solid #fff;
&:hover{
  background-color: #fff;
  color: green;
}
}
.first-content{
  display: flex;
  position: relative;
}
.second-content{
  position: absolute;
  display: none !important;
}
.list-social-media{
    display: flex;
  }
  .form{
    display: flex;
    flex-direction: column;
  }
  .content {
    border-radius: 15px;
    background: white;
    width: 80%;
    height: 50%;
    justify-content: space-between;
    align-items:center;
    &:before{
      position: absolute;
      background: green;
      width: 40%;
      height: 100%;
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
`;