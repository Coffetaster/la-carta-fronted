import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import ListingDetailsV3 from "../../components/listing-details-v3";
import { useRouter } from 'next/router';
import Present from "../../components/present";


const index = () => {
  
  

  
    
  return (
    <>

      <Seo pageTitle="Local" />
     <ListingDetailsV3/>
      
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
