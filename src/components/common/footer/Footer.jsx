import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>Sobre el sitio</h4>
          <p>
            Estamos al servicio de la comunidad. Ahora es más fácil visitar o descubir
            un lugar en el cual puedas ir con pareja, familia o amigos. Así que hagamos esto juntos.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Más buscado</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/about-us">Sobre nosotros</Link>
            </li>
            <li>
              <Link href="/local/Cafeterias">Cafeterías</Link>
            </li>
            <li>
              <Link href="/local/Restaurantes">Restaurantes</Link>
            </li>
            <li>
              <Link href="/local/Bares">Bares</Link>
            </li>
            <li>
              <Link href="/local/Heladeria">Heladería</Link>
            </li>
            <li>
              <Link href="/local/Pizzerias">Pizzerías</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Como contactarnos</h4>
          <ul className="list-unstyled">
            <li>
              <a href="lacarta@gmail.com">lacarta@gmail.com</a>
            </li>
            <li>
              <a href="tel:+53 54916751">+53 54916751</a>
            </li>
            <li>
              <a href="tel:+53 54916751">+53 54916751</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Siguenos</h4>
          <ul className="mb30">
            <Social />
          </ul>
          {/* <h4>Subscribe</h4>
          <SubscribeForm /> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
