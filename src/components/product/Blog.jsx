import Link from "next/link";
import blogContent from "../../data/blogs";
import Image from "next/image";

const Blog = ({image,name,cost,discount, category}) => {
  return (
    <>
      
        <div className="for_blog feat_property" >
          <div className="thumb">
              <Image
                width={731}
                height={438}
                priority
                className="img-whp cover w-100"
                src={image}
                alt={image}
                // src={`http://localhost:8000${image}`}
                // alt={`http://localhost:8000${image}`}
              />
          </div>
          {/* End .thumb */}

          <div className="details">
            <div className="tc_content">
              <h2 className="mb15">{name}</h2>
              <h4 className="text-thm">{category}</h4>
              {discount>0 ? <>
                <h4 className="text-thm">$ {(cost-(cost*discount)/100).toFixed(2)} cup</h4>
                <p className="text-decoration-line-through">$ {cost} cup</p>
              </> :<h4 className="text-thm">$ {cost} cup</h4>}
              
            </div>
            {/* End .tc_content */}
          </div>
        </div>
 
    </>
  );
};

export default Blog;
