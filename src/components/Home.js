import React from 'react'
import '../css/Home.css'
import Product from './Product'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
function Home() {
    return (
        <div className="home">

            <AliceCarousel autoPlay dotsDisabled buttonsDisabled autoPlayInterval="2000">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home__image" alt="" />
                <img src="https://www.hd-tecnologia.com/imagenes/articulos/2018/11/Amazon-reemplazar%C3%ADa-los-Intel-Xeon-de-EC2-Cloud-por-sus-CPUs-Graviton.png" className="home__image" alt="" />
                <img src="https://trademarks.amazon.com/media/images/aws-header_tvMEUF2.width-800.png" className="home__image" alt="" />
                <img src="https://1h19u2763213rkq602x0udv1-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/Sell_On_Amazon_Header.jpg" className="home__image" alt="" />
            </AliceCarousel>
            {/* <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            /> */}
            <div className="home__row">
                <Product
                    id="45675897654"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL._AC_UL600_SR393,600_.jpg"
                />
                <Product
                    id="7482345345"
                    title="TOBOS Kenwood kMix KMX84 - Grifo Mezclador para Chimenea (500 W)"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41ziKxGAbnL._AC_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="342253472"
                    title="Echo Dot (3.ª generación) - Altavoz inteligente con reloj y Alexa, tela de color gris claro"
                    price={33.05}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ilNbqaGWL._AC_SL1500_.jpg"
                />
                <Product
                    id="32466234563245"
                    title="Willful Smartwatch,Reloj Inteligente"
                    price={39.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/514Y7g-JQDL._AC_SL1000_.jpg"
                />
                <Product
                    id="45675823523654"
                    title="Nuevo Apple iPad Pro (de 11 Pulgadas, con Wi-Fi + Cellular y 512 GB)"
                    price={1379.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81JbokPAeiL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="32462465"
                    title="TV SAMSUNG 49 UE49RU7305 UHD STV CURVO SLIM 1400 Clase de eficiencia energética A+"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/514QDB7aEsL._AC_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
