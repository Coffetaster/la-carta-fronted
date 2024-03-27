import ContactWithAgent from "../common/agent-view/ContactWithAgent";
import Categorie from "../common/listing/Categorie";
import ListingCreator from "../common/listing/ListingCreator";
import FeaturedListings from "../common/listing/FeaturedListings";
import FeatureProperties from "../common/listing/FeatureProperties";
import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";

const Sidebar = ({id,asequible,reviews}) => {
  
  return (
    <>
      <div className="product_single_content">
        <div className="mbp_pagination_comments mt30">
          <div className="total_review">
            <h4 >Reseñas</h4>
            
          </div>
          {/* End .total_review */}
          {reviews.map((review) => (
          <>
            <Comments id={review.id} name={review.user_name} description={review.description}/>
          </>))}
          
          <div className="custom_hr"></div>

          <div className="mbp_comment_form style2">
            <h4>Escribir reseña</h4>
            
            <ReviewBox asequible={asequible} id={id}/>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Sidebar;
