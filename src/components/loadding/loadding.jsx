import Image from 'next/image';
import style from '../../../public/assets/styles/loadding.module.css'
import image from '../../../public/assets/images/logo/logo.png'

const Loadding = () => {
  return (
    <>
      <section className={style.sectionLoading}>
            <Image width={200} height={200} src={image} alt='La Carta' />
            <h4>Cargando...</h4>
            <div  className={style.box}>
               
                <div className={style.form}>
                    
                    
                </div>
            </div>
      </section>
    </>
  );
};

export default Loadding;
