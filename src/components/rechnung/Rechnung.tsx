import Preis from "./Preis"
import RechnungPdf from "./RechnungPdf"


const Rechnung = () => {
  return (
    <div className="p-3 mt-5">
      <div className="row">
        <div className="col-lg-6 p-3 ">
          <div className="border border-primary">
            <RechnungPdf />
          </div>
        </div>
        <div className="col-lg-6 p-3 ">
          <div className="border border-primary">
            <Preis />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rechnung
