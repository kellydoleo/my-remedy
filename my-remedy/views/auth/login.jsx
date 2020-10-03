const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <html title="login">
        <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        </head>
        <body class="body" >
       <nav class= "login-page-nav" >
        <ul class="nav-list-logins" >
        <a  href ={"/auth/login"}><li>login</li></a>
        </ul>

        <a href ={"/"}  ><img  class="logo nav-list-logins" src= {"https://i.ibb.co/R6QrcKv/my-remedy-logo.png"} /></a>
        <ul class = "nav-list-logins">
        <a  href ={"/auth/signup"}><li>signup</li></a>
        </ul>
        </nav>
       <div class="dotted" ></div>
        <div className="pink-back">
        <h2 id="login-header" >login</h2>
        <form action="/auth/login" method="post" class="login-page-form" >
         <div class="form-group" >
         <label for="userlogin" >Username</label>
         <input type="text" name="username" id ="userlogin" />
         </div>
         <div class="form-group" >
         <label for="passwordlogin" >Password</label>
           <input type="password" name="password" class="password-box" id="passwordlogin" />
          </div>
          
          <input type="submit" value="Login" class="button" />
        </form>
        <p class="or-signup" >or <a class="underline-signup" href={"/auth/signup"}> Signup</a></p>
        </div>
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

module.exports = Login;
