const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <nav>
              <ul>
              <a href ={"/"} ><li>home</li></a>
               <a href ={"/guide"}><li>guide</li></a> 
              </ul>
              <a href ={"/"}  ><img  id="logo" src= {"https://i.ibb.co/R6QrcKv/my-remedy-logo.png"} /></a>
              <ul>
              <a href ={"/learn"} >  <li>learn</li></a>
               <a  href ={"/auth/login"}><li>login</li></a>
              </ul>
            </nav>
          
          </header>
         
          <main>{this.props.children}</main>
         
          <footer>
            
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;