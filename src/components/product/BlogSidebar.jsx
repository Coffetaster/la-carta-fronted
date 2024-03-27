import FeatureProperties from "../common/listing/FeatureProperties";
import Aggregates from "./Aggregates";
import Ingredients from "./Ingredients";

const BlogSidebar = ({ingredients,agregate}) => {
  return (
    <div className="blog-sidebar_widgets ">
      
      {/* End .sidebar_search_widget */}
    <div className="container">
      
      <div className="row">
          {agregate ? <div className="terms_condition_widget ">
            <h4 className="title">Agregados</h4>
            <div className="widget_list">
              <ul className="list_details">
                {agregate.map((item) => (
                  <>
                    <li key={item.id}>
           
                        <i className="fa fa-caret-right mr10 text-thm"></i>
                        
                        {item.agregate_name}
                        
                        <span className="float-end text-thm">{item.cost} cup</span>
                        <p>({item.measurement_unit_quantity}{item.measurement_unit}){" "}</p>
                      
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div> : undefined}
          {ingredients ? <div className="terms_condition_widget ">
            <h4 className="title">Ingredientes</h4>
            <div className="widget_list">
            <ul className="list_details">
              {ingredients.map((item) => (
                <li key={item.id}>
                  
                    <i className="fa fa-caret-right mr10 text-thm"></i>
                    {item.ingredient_name} {" "}
                    <span className="float-end text-thm">{item.measurement_unit_quantity} {item.measurement_unit}</span>
                  
                </li>
              ))}
            </ul>
            </div>
          </div>: undefined}
          
          
          {/* <div className="terms_condition_widget">
            <h4 className="title">Locales favoritos</h4>
            <div className="sidebar_feature_property_slider">
              <FeatureProperties />
            </div>
          </div> */}
        </div>
    </div>
      
      {/* End .Categories widget */}

      {/* End .blog_tag_widget */}
    </div>
  );
};

export default BlogSidebar;
