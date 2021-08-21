import food from "../images/food.jpg";
import logo from "../images/logo.png";
import fish from "../images/fish.jpg";
import carne from "../images/carne.jpg";
import taco from "../images/taco.jpg";
import bistec from "../images/bistec.jpg";
import puerco from "../images/puerco.jpg";
import cocktail from "../images/cocktail.jpg";
import camaron from "../images/camaron.jpg";

const Home = () => {
    return (
    <div>
        <div class="container">
            <img src={logo} class="img-fluid p-3" />
            <p>Location: 400 Hawthorne Ave Athens, Ga 30606</p>
            <div class="row justify-content-evenly">
                <div class="card bg-dark col-md-5 p-1">
                    <img src={carne} class="card-img-top" alt="fish"/>
                    <div class="card-body">
                        <p class="card-text">Carne Asada: 
                        Grilled steak cooked with onions, served with rice beans and guacamole.</p>
                    </div>
                </div>
                <div class="card bg-dark col-md-5 p-1 m-2">
                    <img src={camaron} class="card-img-top" alt="fish"/>
                    <div class="card-body">
                        <p class="card-text">Camarones a La Diabla:
                        Shrimp and onions in a hot and spicy sauce served with rice, beans, and pico de gallo and guacamole salad.</p>
                    </div>
                </div>
                <div class="card bg-dark col-md-5 p-1 m-2">
                    <img src={fish} class="card-img-top" alt="fish"/>
                    <div class="card-body">
                        <p class="card-text">Mojarra Frita:
                        Whole fried tilapia served with rice, beans, and pico de gallo.</p>
                    </div>
                </div>
                <div class="card bg-dark col-md-5 p-1 m-2">
                    <img src={cocktail} class="card-img-top" alt="fish"/>
                    <div class="card-body">
                        <p class="card-text">Cocktail de Camaron:
                        Shrimp, tomato juice, pico de gallo,and avocado slices.</p>
                    </div>
                </div>
                <div class="card bg-dark col-md-5 p-1 m-2">
                    <img src={bistec} class="card-img-top" alt="fish"/>
                    <div class="card-body">
                        <p class="card-text">Bistec a la Mexicana:
                        Whole fried tilapia served with rice pico de gallo and guacamole salad.</p>
                    </div>
                </div>
                <div class="card bg-dark col-md-5 p-1 m-2">
                    <img src={puerco} class="card-img-top" alt="fish"/>
                    <div class="card-body">
                        <p class="card-text">Costillas de Puerco:
                        Pig ribs served with rice, beans, and guacamole.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>)
}

export default  Home;