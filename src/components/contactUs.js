import logo from "../images/logo.png";
import bg from "../images/bg.png";


const contact = () => {
    return (
        <div class="container">
        <img src={logo} class="m-2 container-fluid" />
        <h1 class="p-3"> Call us at <a href="tel:7068501191"> (706) 850-1191</a> </h1>
        <img src={bg} class="m-2 container-fluid"/>
        <h1 class="p-2">We Hope you<br/> enjoyed you're meal</h1>
        </div>
    )
}

export default contact;