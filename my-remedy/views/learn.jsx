const React = require("react");
const Layout = require("./layout.jsx");

class Learn extends React.Component {
    render(){
        return(
            <Layout title="learn" >
            <div className = "pink-back">
                <h2>learn</h2>
                <p>my remedy is a platform where you can share and build your menstrual remedy. Below you can find resources related to the menstrual cycle.</p>
                <ul>
                   <a href="#" > <li>Endometriosis</li></a>
                   <a href="#" > <li>Ovarian Cysts</li></a>
                   <a href="#" > <li>Uterine Fibrosis</li></a>
                   <a href="#" > <li>Ovarian Cancer</li></a>
                   <a href="#" > <li>Cervical Cancer</li></a>
                   <a href="#" > <li>PMS</li></a>
                   <a href="#" > <li>Premenstrual Dysphoric Disorder (PMDD)</li></a>

                </ul>
            </div>

            </Layout>

        )
    }
}

module.exports = Learn;