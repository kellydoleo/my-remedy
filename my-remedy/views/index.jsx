const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="my remedy">
        
        <div>
          <img id="hero-image" src={"https://i.ibb.co/n6ByFVR/my-remedy-hero-image.png"} />
        </div>

        <div  className="pink-back">
          <p>my remedy is a platform where you can share, create and build your menstrual remedy. Our mission is to bring more awareness and education surrounding natural healthcare practices for black and brown women. </p>
          <img id="green-flower-all" src="https://i.ibb.co/Jt7VkYJ/green-flower-all.png" />
        </div>
       
      </Layout>
    );
  }
}

module.exports = Index;
