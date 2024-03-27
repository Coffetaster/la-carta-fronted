import BlogSidebar from "./BlogSidebar";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import Footer from "../common/footer/Footer";
import Header from "../common/header/DefaultHeader";
import MobileMenu from "../common/header/MobileMenu";
import PopupSignInUp from "../common/PopupSignInUp";
import Blog from "./Blog";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Loadding from "../../components/loadding/loadding";


const Index = () => {

  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    
    
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/locals/product/${id}/`);
        
        setData(response.data);
        
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    if(id){
      fetchData();
    }

    
}, [id]);

  return (
    
    <>
      {data ? <>
        <Header />

      
        <MobileMenu />

        <section className="blog_post_container bgc-f7">
          <div className="container">
          

            <div className="row">
              <div className="col-lg-8">
                <div className="main_blog_post_content">
                  <Blog image={data.image} name={data.product_name} cost={data.cost} discount={data.discount} category={data.category_name}/>  
                  
                </div>
              </div>
              

              <div className="col-lg-4 col-xl-4">
                <BlogSidebar ingredients={data.ingredientProduct.length > 0 ? data.ingredientProduct : undefined} 
                agregate={data.agregateProduct.length > 0 ? data.agregateProduct : undefined}/>
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
      </>  : <Loadding/>}
      
    </>
  );
};

export default Index;
