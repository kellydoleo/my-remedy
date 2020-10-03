const React = require("react");
const Layout = require("./layout.jsx");
const remedy = require("../models/remedy.js");


class Show extends React.Component {
    render() {
   
        return(
            <Layout>
                <div class="pink-back" >
                <div class="guide-div show-div" >
               
                
               <a ><h1 class="guide-h1" >{this.props.remedy.title}</h1></a>
               <img class="guide-image" src={`${this.props.remedy.image}`}/>
               <p  >{this.props.remedy.description}</p>
               <p>Source: {this.props.remedy.source}</p>
               <a href ={`${this.props.remedy.instagram}`}><img style={{width:"9%"}} src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-svg-vector-for-print.svg" /></a>
               <a href={`${this.props.remedy.twitter}`}>{this.props.remedy.twitter}</a>

           
      

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