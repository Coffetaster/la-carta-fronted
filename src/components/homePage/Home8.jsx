import MobileMenu from "../common/header/MobileMenu";
import Header from "./Header";
import FindProperties from "./FindProperties";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import ComfortPlace from "./ComfortPlace";
import Partners from "../common/Partners";
import HeroSlider from "./HeroSlider";
import PopupSignInUp from "../common/PopupSignInUp";
import HotProperties from "./HotProperties";
import style from "../../../public/assets/styles/list.module.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loadding from "../loadding/loadding";


const HomePage = () => {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState('Todos');
  const [search, setSearch] = useState('');

  const handleFilterChange = (category) => {
    setFilter(category);
    
 };
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/promo/laCarta/');
          console.log(response.data)
          setData(response.data);
          
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };

      fetchData();
  }, []);

  return (
    
      
      <>
      {data ?   <><Header />

      
<MobileMenu />





<section className="p0 ">
  <div className="container-fluid p0 ">
    <div className="home8-slider">
      <div className="bs_carousel slidebg-1 ">
        <HeroSlider offer={data.offer}/>
      </div>
      
    </div>
    
  </div>
</section>

<section id="comfort-place" className="comfort-place pb30 bb1">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        <div className="main-title text-center">
          <h2>Categorias de locales</h2>
          <p>
            Explore los distitos tipos de locales según sus preferencias.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <ComfortPlace />
    </div>
    
  </div>
</section>
{data.favorites.length > 0 ? 
  <section className="our-hot-offer parallax">
    <div className="container">
      <div className="row mt40">
        <div className="col-md-6 col-lg-4">
          <div className="our_hotoffer">
            <h2>Accede a los favoritos</h2>
            <p>Locales mas visitados por la comunidad.</p>
            
          </div>
        </div>
      
        <HotProperties favorites={data.favorites}/>
      </div>
    </div>
  </section>
: undefined}

{data.local.length > 0 ?
<section id="comfort-place" className="comfort-place pb30 bb1">
  <div className="container">
<div className="row">
    <div className="col-lg-12">
      <div className="main-title">
        <h2>Locales</h2>
        
        
        <div className="thmb_cntnt">
          <div className={style.listFiilter} >
            <div className={`list-inline-item add_listing `}>
              <button onClick={() => handleFilterChange('Todos')} type="button" class="btn btn-block btn-thm w-80 m-1">Todos</button>
            </div>  
            <div className={`list-inline-item add_listing `}>
              <button onClick={() => handleFilterChange('Pizzeria')} type="button" class="btn btn-block btn-thm w-80 m-1">Pizzeria</button>
            </div>
            <div className={`list-inline-item add_listing `}>
              <button onClick={() => handleFilterChange('Cafeteria')} type="button" class="btn btn-block btn-thm w-80 m-1">Cafeteria</button>
            </div>
            <div className={`list-inline-item add_listing `}>
              <button onClick={() => handleFilterChange('Restaurante')} type="button" class="btn btn-block btn-thm w-80 m-1">Restaurante</button>
            </div>
            <div className={`list-inline-item add_listing `}>
              <button onClick={() => handleFilterChange('Heladeria')} type="button" class="btn btn-block btn-thm w-80 m-1">Heladeria</button>
            </div>
            <div className={`list-inline-item add_listing `}>
              <button onClick={() => handleFilterChange('Bar')} type="button" class="btn btn-block btn-thm w-80 m-1">Bar</button>
            </div>
              </div>
          <div/>
            <ul className="sasw_list mb0 col-lg-6">
          <li className="search_area">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar"
                value={search} 
                onChange={handleInputChange}
            
              />
              <label>
                <span className="flaticon-magnifying-glass"></span>
              </label>
            </div>
          </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <FindProperties search={search} filtros={filter} locals={data.local}/>
  </div>
  </div>
</section>
: undefined}

<section id="our-partners" className="our-partners">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 offset-lg-3">
        <div className="main-title text-center">
          <h2>Comunidad</h2>
          <p>Nuestro tabajo ayuda a varios negocios</p>
        </div>
      </div>
    </div>
    <div className="row">
      <Partners />
    </div>
  </div>
</section>




<section className="footer_one home3">
  <div className="container">
    <div className="row">
      <Footer />
    </div>
  </div>
</section>


<section className="footer_middle_area home3 pt30 pb30">
  <div className="container">
    <CopyrightFooter />
  </div>
</section></> : <Loadding/>  }
      
      
    </>
  );
};

export default HomePage;
