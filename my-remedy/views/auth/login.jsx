const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <div className="pink-back">
        <form action="/auth/login" method="post">
         <label>
          Username <input type="text" name="username" />
          Password <input type="text" name="password" />
          </label>
          <input type="submit" value="login"/>
        </form>
        <p>or <a href={"/auth/signup"}> Signup</a></p>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
