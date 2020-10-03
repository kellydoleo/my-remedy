const React = require("react");
const Layout = require("../layout.jsx");

class Fail extends React.Component {
  render() {
    return (
      <html title="failed">
        <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        </head>
        <header>
        <nav class= "login-page-nav" >
        <ul class="nav-list-logins" >
        <a  href ={"/auth/login"}><li>login</li></a>
        </ul>

        <a href ={"/"}  ><img  class="logo nav-list-logins" src= {"https://i.ibb.co/R6QrcKv/my-remedy-logo.png"} /></a>
        <ul class = "nav-list-logins">
        <a  href ={"/auth/signup"}><li>signup</li></a>
        </ul>
        </nav>
        </header>
        <body>
        <h1>FAILED TO LOGIN</h1>
        <footer>
      <a href ={"/"}  ><img  id= "footer-logo" class="logo" src= {"https://i.ibb.co/WDwHjj5/remedy-white-footer.png"} /></a>
      <ul>
       <a href ={"#"}> <li>about</li></a>
       <a href ={"#"} >  <li>press</li></a>
       <a href ={"#"} >  <li>careers</li></a>
        </ul>
        <ul>
        <a href ={"#"} >  <li>signup</li></a>
        <a href ={"#"} > <li>contact us</li></a>
        <a href ={"#"} > <li>privacy policy</li></a>
        </ul>
      </footer>
        </body>
        
      </html>
    );
  }
}

module.exports = Fail;
