import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/DefaultHeader";
import MobileMenu from "../../components/common/header/MobileMenu";
import BreadCrumb2 from "../../components/local-type/BreadCrumb2";
import FindProperties from "../../components/local-type/FindProperties";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Loadding from "../../components/loadding/loadding";


const Index = () => {
  const router = useRouter();
  const { type } = router.query;
  
  const [search, setSearch] = useState('');
  const [localitation, setLocalitation] = useState('');
  const [data, setData] = useState(null);
  const [isVoid, setIsVoid] = useState(false);

  
  const handleSearchChange = (event) => {
    
    setSearch(event.target.value);
    
  };

  const handleLocalitationChange = (event) => {
    
    setLocalitation(event.target.value);
    
  };

  const clearHandler = () => {
    setSearch('');
    setLocalitation('');
  };
  
  useEffect(() => {
    
    
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/locals/type/${type}/`);
        setIsVoid(false)
        setData(response.data);
        
      } catch (error) {
        console.error('Error fetching data: ', error);
        if(error.response.status = 404 ){
          setData([])
          setIsVoid(true)
        }
      }
    };
    if(type){
      fetchData();
    }

    
}, [type]);
  return (
    
    <>
    {data ? <> 
    
        <Header />

     
        <MobileMenu />


        {/* <PopupSignInUp /> */}


        <section className="our-listing bgc-f7 pb30-991 mt85 md-mt0 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <BreadCrumb2 type={type}/>
              </div>
              
            </div>
            
            {isVoid ? <h1 className="text-thm">No existen resultados disponibles</h1>: <>
            <div className="row">
              <div className="col-lg-4 col-xl-4">
                <div className="sidebar-listing-wrapper">
                  
                  {/* <SidebarListing /> */}
                  <div className="sidebar_advanced_search_widget">
                                <ul className="sasw_list mb0">
                                  <li className="search_area">
                                    <div className="form-group mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="search"
                                        placeholder="Buscar"
                                        value={search} 
                                        onChange={handleSearchChange}
                                      />
                                      <label>
                                        <span className="flaticon-magnifying-glass"></span>
                                      </label>
                                    </div>
                                  </li>
                                  {/* End li */}

                                  <li className="search_area">
                                    <div className="form-group mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="localitation"
                                        placeholder="Localización"
                                        value={localitation} 
                                        onChange={handleLocalitationChange}
                                      />
                                      <label htmlFor="exampleInputEmail">
                                        <span className="flaticon-maps-and-flags"></span>
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                      <div className="search_option_button">
                                        <button
                                          onClick={clearHandler}
                                          type="button"
                                          className="btn btn-block btn-thm w-100"
                                        >
                                          Limpiar filtros
                                        </button>
                                      </div>
                                    </li>
                                    {/* End li */}
                                  </ul>
                              </div>
                </div>
                <br />
              </div>
              
              

              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <FindProperties name={search} localitation={localitation} locals={data}/>
                </div>
                
              
              </div>
              
            </div></>}
            
            
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
        </section></> : <Loadding/>  }
      
      
    </>
  );
};

export default Index;
