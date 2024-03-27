import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import Present from "../present";
import DetailsContent from "./DetailsContent";
import LocalPresentation from "./localPresentation";
import Sidebar from "./Sidebar";
import SliderGallery from "./SliderGallery";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Loadding from "../loadding/loadding";
import Bot from "../bot/Bot";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const [local,setLocal] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/locals/list/${id}/`);
        console.log(response.data)
        console.log(response.data)
        setLocal(response.data);
        

      } catch (error) {
        router.push('/404')
      }
    };

    if(id){
      fetchData();
    }

}, [router,id]);
  
  return (
    <>
      {local ? <>
      <Header />

      
      <MobileMenu />
      {local.bookingLocal.length > 0 ? <Bot booking={local.bookingLocal}/> : undefined}
      
      {local.promoLocal[0] ? <>
      <Present present={local.promoLocal[0]}/>
      <PopupSignInUp promo={local.promoLocal[0]}/>
      </> : undefined}
      

      
      <section className="listing-title-area mt85 pb0 md-mt0">
        <div className="container pb50">
          <LocalPresentation  name={local.local_name} visit={local.visit} address={local.address} fb={local.facebook} inst={local.instagram} wapp={local.whatsapp} tel={local.telegram} twitter={local.twitter}/>
        </div>
        

        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-12 p0">
              <div className="listing_single_property_slider arrow-style-2 arrow-white">
                <SliderGallery gallery={local.galleryLocal} />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="our-agent-single bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <DetailsContent description={local.description} categories={local.categoryLocal}/>
            </div>
            

            <div className="col-lg-4 col-xl-4">
              <Sidebar id={local.id} asequible={local.isAsequible} reviews={local.reviewsLocal}/>
            </div>
            
          </div>
          
        </div>
      </section>

      
      <section className="footer_one">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      
      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
      
      </>: <Loadding/>}
      
    </>
  );
};

export default Index;
