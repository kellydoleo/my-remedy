const React = require("react");



class Layout extends React.Component {
  render() {
    
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
          <link rel="stylesheet" href="css/bootstrap.css"/>
            <link rel="stylesheet" href="css/bootstrap-responsive.css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        </head>
        <body class="body" style={{margin: "0"}} >
          <header>
            <nav  >
              <ul class="layout-nav-list">
              <a href ={"/guide"} ><li>home</li></a>
               <a href ={"/guide"}><li>guide</li></a> 
              </ul>
              <a href ={"#"}  ><img  class="logo layout-nav-list" src= {"https://i.ibb.co/R6QrcKv/my-remedy-logo.png"} /></a>
              <ul class="layout-nav-list">
              <a href ={"/learn"} >  <li>learn</li></a>


              
               <a  href ={"/auth/profile"}><li>profile</li></a>
              </ul>
            </nav>
          
          </header>
          <div class="dotted" ></div>
         
          <main>{this.props.children}</main>
         
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

module.exports = Layout;