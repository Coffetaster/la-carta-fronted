'use Client'
import BreadCrumb from "../common/BreadCrumb";
import { useRouter } from 'next/router';

const BreadCrumb2 = ({type}) => {


  return (
    <div className="breadcrumb_content style2">
      <BreadCrumb title={type} />
      <h2 className="breadcrumb_title">{type}</h2>
    </div>
  );
};

export default BreadCrumb2;
