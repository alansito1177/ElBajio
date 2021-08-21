import food from "../images/food.jpg";
import logo from "../images/logo.png";
import fish from "../images/fish.jpg";
import carne from "../images/carne.jpg";
import taco from "../images/taco.jpg";

const Home = () => {
    return (
    <div>
        <div class="container">
            <img src={logo} class="img-fluid p-3" />
            <div class="row justify-content-evenly">
                <div class="card bg-dark col-md-5 p-1">
                    <img src={carne} class="card-img-top" alt="fish"/>
                    <div class="card-body">
                        <p class="card-text">Carne Asada: 
                        Grilled steak cooked with onions, served with rice beans and guacamole.</p>
                    </div>
                </div>
                <div class="card bg-dark col-md-5 p-1">
                    <img src={taco} class="card-img-top" alt="fish"/>
                    <div class="card-body">
                        <p class="card-text">Build your own Mexican Tacos: avocado, onions, cilantro, cucumber and spicy sauce.</p>
                    </div>
                </div>
                <div class="card bg-dark col-md-8 p-1 m-2">
                    <img src={fish} class="card-img-top" alt="fish"/>
                    <div class="card-body">
                        <p class="card-text">Mojarra Frita:
                        Whole fried tilapia served with rice pico de gallo and guacamole salad.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default  Home;