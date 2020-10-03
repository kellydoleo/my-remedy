const React = require("react");
const Layout = require("./layout.jsx");
const login = require("../models/auth/index.js");

class Profile extends React.Component {
    render() {
      
        return(
            <Layout>
                
                <div class ="pink-back" >
                <a href={"/logout"} class="button" >Logout</a>
                {this.props.login.map((user, i) => {
              return (
                  <div>
               
                
                    <h1>{user.fullName}</h1>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                   
                    <a href = {`/${i}/edit`} value= {user.username} ><div  >edit</div></a>
                
           

              {/* <form
                    action={`/guide/${remedy._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form> */}
              </div>
              );
            })}
        </div>
            

            </Layout>
        )
    }
}

module.exports = Profile;