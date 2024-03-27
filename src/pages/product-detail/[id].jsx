import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import Product from "../../components/product";

const index = () => {
  return (
    <>
      <Seo pageTitle="Blog List 1" />
      <Product />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
