const React = require("react");
const login = require("../models/auth/index.js");
const Layout = require("./layout.jsx");

class Edit extends React.Component {
    render(){
        const {login, index} = this.props;
        return(
            
            <Layout>
                <form action={`/${index}/?_method=PUT`} method="post" class="pink-back" >
                <label>
                   Name <input type="text" placeholder={``} name="fullName" /><br/>
                   Username <input type="text" placeholder="username" name="username" /><br/>
                   Email  <input type="text" placeholder="Email" name="email" /><br/>
                    <input type="submit"  value= "Update"></input>
                </label>
                <a href = {`/auth/profile`} ><button>Go Back</button></a>
            </form>
            
            </Layout>
        )
    }
}

module.exports = Edit; 