const React = require("react");
const Layout = require("./layout.jsx");
const remedy = require("../models/remedy.js");



class Guide extends React.Component {
    render() {
        return(
            <Layout title ="guide">
                <div className="pink-back">
                    <h2 id="guide-header" >guide</h2>
                    <p id="guide-p" >here you'll find tips, recipes, and practices for menstrual health. Feel free to add your own</p>
                    <a class="add" href={"/new"} ><h1>+</h1></a>
                    
                    {this.props.remedy.map((remedy, i) => {
              return (
                  <div class="guide-div" >
               
                
                    <a href={`/guide/${remedy._id}`} ><h1 class="guide-h1" >{remedy.title}</h1></a>
                    <img class="guide-image" src={`${remedy.image}`}/>
                    <p class="guide-p" >{remedy.description}</p>
                    <p>Source: {remedy.source}</p>
                    <a href ={`${remedy.instagram}`}><img style={{width:"9%"}} src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg" /></a>
                    <a href={`${remedy.twitter}`}>{remedy.twitter}</a>

                
           

              <form class="guide-form"
                    action={`/guide/${remedy._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input class="button guide-delete" type="submit" value="DELETE" />
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