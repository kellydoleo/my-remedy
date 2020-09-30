const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <div className="pink-back">
        <form action="/auth/signup" method="post">
          <label>
       Full Name* <input type="text" name="full name"/>
         Username* <input type="text" name="username"  />
          Password* <input type="text" name="password"  />
          Email Address* <input type="text" name="email address"/>
          </label>
          <input type="submit" value="signup" />
        </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
