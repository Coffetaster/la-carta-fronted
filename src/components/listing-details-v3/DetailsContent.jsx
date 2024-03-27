import style from "../../../public/assets/styles/list.module.css"
import Menu from "./MenuDetail";
import { useState } from "react";


const DetailsContent = ({description,categories}) => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const filteredItems = selectedCategory === "Todas" ? categories : categories.filter(categories => categories.category_name === selectedCategory);

  return (
    <>
      <div className="listing_single_description">
        

        <h2 className="mb30">Quienes somos</h2>
        <p className="">{description}</p>
        {/* <PropertyDescriptions /> */}
      </div>
    

      <div className="additional_details">
        <div className="row" >
          <div className="col-12">
            <h2 className="mb15">Menú</h2>
          </div>
          <div className="thmb_cntnt" >
                <ul className={style.listFiilter} >
                  <li className={`list-inline-item add_listing `}>
                    <button type="button" class="btn btn-block btn-thm w-80 m-1 " onClick={() => setSelectedCategory("Todas")}>Todas</button>
                  </li>  
                {categories.map((category) => (
                  <>
                  <li className={`list-inline-item add_listing `}>
                    <button type="button" class="btn btn-block btn-thm w-80 m-1 " onClick={() => setSelectedCategory(category.category_name)}>{category.category_name}</button>
                  </li>  
                  </>
                ))}
                  </ul>
              </div>
              <div className="col-12" >
                <Menu products={filteredItems}/>
              </div>
          
        </div>
      </div>
      
    </>
  );
};

export default DetailsContent;
