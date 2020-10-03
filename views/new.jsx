const React = require("react");
const Layout = require("./layout.jsx");

class New extends React.Component {
    render() {
        return(
            <Layout>
                <div className="pink-back">
                    <h2 id ="add-header" >add to the guide</h2>
                    <form action="/guide/" method="POST" class="add-form" >
                        <div class="form-group"  >
                        <label for="title"  >Title*</label>
                        <input id="title" class="form-bar" type="text" name="title"/> <br/>
                        </div>

                        <div class="form-group" >
                        <label for="description"  >Description*</label>
                        <input id="description" class="form-bar"  type="text" name="description"/> <br/>
                        </div>

                        <div class="form-group" >
                        <label for="source"  >Source*</label>
                        <input id="source" class="form-bar"  type="text" name="source"/> <br/>
                        </div>

                        <div class="form-group" >
                        <label for="image"  >Image URL*</label>
                        <input id="image" class="form-bar"  type="text" name="image"/> <br/>
                        </div>

                        <div class="form-group" >
                        <label for="instagram"  >Instagram URL</label>
                        <input id="instagram" class="form-bar"  type="text" name="instagram"/> <br/>
                        </div>

                        <div class="form-group" >
                        <label for="twitter"  >Twitter URL</label>
                        <input id="twitter" class="form-bar"  type="text" name="twitter"/> <br/>
                        </div>
                         
                         
                         
                         
                        
                        <input class="button" type="submit"  value= "Submit" />
                    </form>
                    <a class="go-back-link" href = {`/guide`}  ><div class= "button go-back" >Go Back</div></a>
                </div>

            </Layout>
        )
    }


}

module.exports = New;