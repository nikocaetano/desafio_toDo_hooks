import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background-color:#90e0ef;
}
`

export const Box = styled.form`
display:flex;
justify-content:space-evenly;
width:40%;
position:relative;
left: 30vw;
flex-wrap:wrap;
`

export const Input = styled.input`
width: 25vw;
height: 3vw;
border-radius:20px;
text-align:center;
`

export const Botão1 = styled.button`
width: 5vw;
border-radius: 50px;
border:none;
background-color:green;
cursor:pointer;
color:white;
font-family: 'Permanent Marker', sans-serif;
`
export const Botão2 = styled.button`
width: 5vw;
border-radius: 50px;
border:none;
background-color:red;
cursor:pointer;
color:white;
font-family: 'Permanent Marker', sans-serif;
`

export const Div = styled.div`
width:30vw;
display: flex;
justify-content:space-between;
background-color: #023e8a;
color:white;
padding: 10px;
margin: 1em 0 1em 0; 
border-radius:20px;
`

export const Img = styled.img`
width: 2vw;
cursor:pointer;
`