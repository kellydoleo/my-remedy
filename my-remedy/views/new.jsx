const React = require("react");
const Layout = require("./layout.jsx");

class New extends React.Component {
    render() {
        return(
            <Layout>
                <div className="pink-back">
                    <h2>add to the guide</h2>
                    <form action="/guide/" method="POST">
                        <label>
                         Title* <input type="text" name="title"/> <br/>
                         Description* <input type="text" name="description"/> <br/>
                         Source* <input type="text" name="source"/> <br/>
                         Image URL <input type="text" name="image"/> <br/>
                         Instagram URL <input type="text" name="instagram"/> <br/>
                         Twitter URL <input type="text" name="twitter"/> <br/>
                        </label>
                        <input type="submit"  value= "Submit" />
                    </form>
                    <a href = {`/guide`} ><button>Go Back</button></a>
                </div>

            </Layout>
        )
    }


}

module.exports = New;