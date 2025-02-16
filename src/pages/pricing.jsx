import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Membership from "../components/membership";

const index = () => {
  return (
    <>
      <Seo pageTitle="Precios" />
      <Membership />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
