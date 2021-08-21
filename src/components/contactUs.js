import logo from "../images/logo.png";
import bg from "../images/bg.png";


const contact = () => {
    return (
        <div class="container">
        <img src={logo} class=" mt-3 mb-5 img-fluid" />
        <h1 class="p-5"> Call us at <br/> <a href="tel:7068501191"> (706) 850-1191</a> </h1>
        <h1 class="p-5">We Hope you<br/> enjoyed your meal</h1>
        <img src={bg} class="img-fluid mt-5 mb-5"/>
        </div>
    )
}

export default contact;