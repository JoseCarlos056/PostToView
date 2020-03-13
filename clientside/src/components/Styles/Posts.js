import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
    width: 500px;
    background-color: #f2f2f2;
    overflow: auto;
    ::-webkit-scrollbar { 
display: none; 
}
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