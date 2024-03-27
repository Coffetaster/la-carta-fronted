import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import HomePage from "../components/homePage/Home8";

const index = () => {
  return (
    <>
      <Seo pageTitle="Inicio" />
      <HomePage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
