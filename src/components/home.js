import food from "../images/food.jpg";
import logo from "../images/logo.png";
import fish from "../images/fish.jpg";

const Home = () => {
    return (
    <div>
        <div class="container">
            <img src={logo} class="img-fluid p-3" />
            <div class="row">
                <div class="card bg-dark">
                    <img src={fish} class="card-img-top" alt="fish"/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default  Home;