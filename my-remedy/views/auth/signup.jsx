const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <html title="signup">
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
<body class="body" >
        <div class="dotted" ></div>

        <div className="pink-back">
        <h2 id="login-header" >register</h2>
        <form action="/auth/signup" method="post" class= "form" >
      <div class = "form-group">
          <label for="fullname"  >Full Name*</label>
        <input type="text" name="full name" id="fullname" />
        </div>
        <div class = "form-group" >
        <label for="username" >Username*</label>
          <input type="text" name="username" id="username" />
        </div>
        <div class = "form-group">
          <label for="password" >Password*</label>
          <input type="password" name="password" id="password" />
          </div>
          <div class = "form-group">
          <label for="email" >Email Address*</label>
          <input type="text" name="email address" id="email" />
          
          </div>
          <input type="submit" value="Signup" class="button" />
        </form>
        <p class="or-login" >or <a href={"/auth/login"} class="underline-signup" >Login</a></p>
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

module.exports = Index;
