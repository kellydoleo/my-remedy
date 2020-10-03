const React = require("react");
const Layout = require("./layout.jsx");
const remedy = require("../models/remedy.js");


class Show extends React.Component {
    render() {
        const {remedy} = this.props;
        return(
            <Layout>
                <div class="pink-back" >
                <div class="guide-div" >
               
                
               <a href={`/guide/${this.props.index}`} ><h1 class="guide-h1" >{remedy.title}</h1></a>
               <img class="guide-image" src={`${remedy.image}`}/>
               <p  >{remedy.description}</p>
               <p>Source: {remedy.source}</p>
               <a href ={`${remedy.instagram}`}><img style={{width:"9%"}} src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg" /></a>
               <a href={`${remedy.twitter}`}>{remedy.twitter}</a>

           
      

         <form class="guide-form"
               action={`/guide/${this.props.index}?_method=DELETE`}
               method="POST"
             >
               <input class="button guide-delete" type="submit" value="DELETE" />
             </form>
         </div>
         </div> 
            </Layout>
        )
    }
}

module.exports = Show;