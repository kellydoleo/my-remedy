const React = require("react");
const Layout = require("./layout.jsx");
const remedy = require("../models/remedy.js");



class Guide extends React.Component {
    render() {
        return(
            <Layout title ="guide">
                <div className="pink-back">
                    <h2>guide</h2>
                    <p>here you'll find tips, recipes, and practices for menstrual health. Feel free to add your own</p>
                    <a href={"/new"} ><h1>+</h1></a>
                    
                    {this.props.remedy.map((remedy, i) => {
              return (
                  <div>
              <h1>{remedy.title}</h1>
              <p>{remedy.description}</p>
              
              <form
                    action={`/guide/${remedy._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form>
              </div>
              );
            })}
                    

                </div>
            </Layout>


        )
    }
}

module.exports = Guide;