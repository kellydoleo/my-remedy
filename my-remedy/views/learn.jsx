const React = require("react");
const Layout = require("./layout.jsx");

class Learn extends React.Component {
    render(){
        return(
            <Layout title="learn" >
            <div className = "pink-back">
                <h2 id="learn-header" >learn</h2>
                <p id="learn-p" ><span class="my-remedy" >my remedy </span>is a platform where you can share and build your menstrual remedy. Below you can find resources related to the menstrual cycle.</p>
                <ul class= "list-inline learn-ul">
                   <a href="#" > <li class="list-inline-item" >Endometriosis</li></a>
                   <a href="#" > <li class="list-inline-item" >Ovarian Cysts</li></a>
                   <a href="#" > <li class="list-inline-item" >Uterine Fibrosis</li></a>
                   <a href="#" > <li class="list-inline-item" >Ovarian Cancer</li></a>
                   <a href="#" > <li class="list-inline-item" >Cervical Cancer</li></a>
                   <a href="#" > <li class="list-inline-item" >PMS</li></a>
                   <a href="#" > <li class="list-inline-item" >Premenstrual Dysphoric Disorder (PMDD)</li></a>

                </ul>
            </div>

            </Layout>

        )
    }
}

module.exports = Learn;