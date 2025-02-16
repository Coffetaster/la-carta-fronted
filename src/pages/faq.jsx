import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Faq from "../components/faq";

const index = () => {
  return (
    <>
      <Seo pageTitle="Preguntas frecuentes" />
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
