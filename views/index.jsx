const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (

      <html>
        <head>
        <link rel="stylesheet" href="/css/style.css" />

        </head>
   

      <div class="body" title="my remedy">
        <nav class= "login-page-nav" >
        <ul class="nav-list-logins" >
        <a  href ={"/auth/login"}><li class="login" >login</li></a>
        </ul>
        <a href ={"/"}  ><img  class="logo nav-list-logins" src= {"https://i.ibb.co/R6QrcKv/my-remedy-logo.png"} /></a>
        <ul class = "nav-list-logins">
        <a  href ={"/auth/signup"}><li class="signup" >signup</li></a>
        </ul>
        </nav>
     
        
        <div>
          <img id="hero-image" src={"https://i.ibb.co/n6ByFVR/my-remedy-hero-image.png"} />
        </div>




        <div  className="pink-back index">
          <div class="p-div" >
          {/* <p class="about-p" > <span class="my-remedy" >my remedy</span> is a platform where you can share, create and build your menstrual remedy. Our mission is to bring more awareness and education surrounding natural healthcare practices for black and brown women. </p> */}
          <img style={{maxWidth: "69%", paddingLeft: "15%", paddingTop: "5%"}} src="https://i.ibb.co/jR0vFPz/Screen-Shot-2020-10-16-at-12-28-37-AM.png" />
          </div>

          <img id="green-flower-all" src="https://i.ibb.co/Jt7VkYJ/green-flower-all.png" />
        </div>
    
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
      </html>
    );
  }
}

module.exports = Index;
