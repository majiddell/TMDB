import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`


:root{
    box-sizing: border-box;
}
body {
    background-color:#252525;
   ::-webkit-scrollbar {
  width:5px;
  
  }

  
::-webkit-scrollbar-thumb {
  background: #888;
}
}


p{
    color: #cacaca;
   
}

h4{
    color: #cacaca;

}
h1{
    color: #cacaca;
}




`;



export default GlobalStyle;