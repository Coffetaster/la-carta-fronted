import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="start_partner tac-smd">
          <h2>Nuestros precios</h2>
          <p>Precios asequibles para promocionar su local</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="parner_reg_btn text-right tac-smd">
          <Link href="/pricing" className="btn btn-thm2">
            Ver ahora
          </Link>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToAction;
