import Image from "next/image";
import Ratings from "./Ratings";

const Comments = ({id,name,description}) => {
  
  return (
    <>
      
        <div className="mbp_first media" key={id}>
          
          <div className="media-body">
            <h4 className="sub_title mt-0 text-thm">
              {name}
              
            </h4>
            
            <p className="fz14 mt10">{description}</p>
          </div>
        </div>
      
    </>
  );
};

export default Comments;
