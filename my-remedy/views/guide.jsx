const React = require("react");
const Layout = require("./layout.jsx");



class Guide extends React.Component {
    render() {
        return(
            <Layout title ="guide" >
                <div className="pink-back">
                    <h2>guide</h2>
                    <p>here you'll find tips, recipes, and practices for menstrual health. Feel free to add your own</p>
                    <a href={"/new"} ><h1>+</h1></a>
                   
                


                </div>

                 
              

            </Layout>


        )
    }
}

module.exports = Guide;