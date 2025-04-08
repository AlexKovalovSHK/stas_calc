import { Button, TextField } from "@mui/material"
import Accordion from "react-bootstrap/Accordion"
import Form from "react-bootstrap/Form"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  addClientAdress,
  addClientRechnungData,
  addObjectAdress,
  changeClientParagraph,
  selectClientAddress,
  selectClientRechnungData,
  selectObjectAddress,
} from "../../features/client/clientSlice"
import { useState } from "react"
import {
  ClientAddress,
  ClientObject,
  ClientRechnungData,
} from "../../features/client/type"
import { NewRechnungDto, RechnungUnit } from "../../features/rechnung/type"
import {
  addRechnungUnit,
  selectRechUnitsList,
} from "../../features/rechnung/rechnungSlice"
import DeleteMpdalRach from "./DeleteMpdalRach"
import { fechGenereteRechnung } from "../../features/rechnung/rechnungApi"

const MAX_ROWS = 10 // Максимальное количество строк

const Preis = () => {
  const dispatch = useAppDispatch()
  const rechUnits = useAppSelector(selectRechUnitsList)
  const allPreis = useAppSelector(state => state.rechnung)
  const [userName, setUserName] = useState("")
  const [userStrasse, setUserStrasse] = useState("")
  const [userHous, setUserHous] = useState("")
  const [userPlz, setUserPlz] = useState("")
  const [userOrt, setUserOrt] = useState("")

  const [rechNum, setRechNum] = useState("")
  const [rechData, setRechData] = useState("")
  const [rechZahlungsbedingungen, setRechZahlungsbedingungen] = useState("")
  const [rechFelligData, setRechFelligData] = useState("")

  const [objName, setObjName] = useState("")
  const [objNum, setObjNum] = useState("")
  const [objStrasse, setObjStrasse] = useState("")
  const [objPlz, setObjPlz] = useState("")
  const [objOrt, setObjOrt] = useState("")

  const [beschreibung, setBeschreibung] = useState("")
  const [menge, setMenge] = useState<string>("")
  const [einzelpreis, setEinzelpreis] = useState<string>("")
  const [parragraph, setParragraph] = useState("19")

  const addClientData = () => {
    const newClient: ClientAddress = {
      name: userName,
      strasse: userStrasse,
      hausNum: userHous,
      plz: userPlz,
      ort: userOrt,
    }
    dispatch(addClientAdress(newClient))
  }

  const addDataObj = () => {
    const newObj: ClientObject = {
      name: objName,
      strasse: objStrasse,
      hausNum: objNum,
      plz: objPlz,
      ort: objOrt,
    }
    dispatch(addObjectAdress(newObj))
  }

  const addDataRechnung = () => {
    const newRech: ClientRechnungData = {
      rechnungsnummer: rechNum,
      rechnungsdatum: rechData,
      zhlungsbedingungen: rechZahlungsbedingungen,
      feilligkeitsdatum: rechFelligData,
    }
    dispatch(addClientRechnungData(newRech))
  }

  const rechUnit = () => {
    const newUnit: RechnungUnit = {
      beschreibung: beschreibung,
      menge: Number(menge) || 0,
      einzelpreis: Number(einzelpreis) || 0,
      betrag: (Number(menge) || 0) * (Number(einzelpreis) || 0),
    }
    if (rechUnits.length > MAX_ROWS) {
      alert("Нельзя добавить больше 10 строк!")
    } else {
      dispatch(addRechnungUnit(newUnit))
    }
    setBeschreibung("")
    setMenge("")
    setEinzelpreis("")
  }

  const generatePdf = () => {
    const newPdf: NewRechnungDto = {
      rechnungsnummer: rechNum,
      rechnungsdatum: rechData,
      zhlungsbedingungen: rechZahlungsbedingungen,
      feilligkeitsdatum: rechFelligData,
      name: userName,
      strasse: userStrasse,
      hausNum: userHous,
      plz: userPlz,
      ort: userOrt,
      objektName: objName,
      objektStrasse: objStrasse,
      objektHausNum: objNum,
      objektPlz: objPlz,
      objektOrt: objOrt,
      paragraph: parragraph,
      rechnungUnits: rechUnits,
    }
    console.log(newPdf)
    fechGenereteRechnung(newPdf)
  }

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 p-5">
          <p>
            <b>Rechningsadresse</b>
          </p>

          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              onChange={e => setUserName(e.target.value.trim())}
            />
          </div>

          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Strasse"
              name="strasse"
              onChange={e => setUserStrasse(e.target.value.trim())}
            />
          </div>

          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nr."
              name="nr"
              onChange={e => setUserHous(e.target.value.trim())}
            />
          </div>

          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="PLZ"
              name="plz"
              onChange={e => setUserPlz(e.target.value.trim())}
            />
          </div>

          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ort"
              name="ort"
              onChange={e => setUserOrt(e.target.value.trim())}
            />
          </div>

          <Button variant="contained" className="w-100" onClick={addClientData}>
            Enter data
          </Button>
        </div>

        <div className="col-lg-6 p-5">
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Rechnungsnummer"
              name="rechnungsnummer"
              onChange={e => setRechNum(e.target.value.trim())}
            />
          </div>

          <div className="mb-3 mt-3">
            <input
              type="date"
              className="form-control"
              placeholder="Rechnungsdatum"
              name="rechnungsdatum"
              onChange={e => setRechData(e.target.value.trim())}
            />
          </div>

          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Zahlungsbedingungen"
              name="Zahlungsbedingungen"
              onChange={e => setRechZahlungsbedingungen(e.target.value.trim())}
            />
          </div>

          <div className="mb-3 mt-3">
            <input
              type="date"
              className="form-control"
              placeholder="Fälligkeitsdatum"
              name="feilligkeitsdatum"
              onChange={e => setRechFelligData(e.target.value.trim())}
            />
          </div>
          <Button
            variant="contained"
            className="w-100"
            onClick={addDataRechnung}
          >
            Enter data
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 p-5">
          <p>
            <b>Objekt</b>
          </p>

          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Objekte name"
              name="objeck name"
              onChange={e => setObjName(e.target.value.trim())}
            />
          </div>

          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Strasse"
              name="strasse"
              onChange={e => setObjStrasse(e.target.value.trim())}
            />
          </div>

          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nr."
              name="nr"
              onChange={e => setObjNum(e.target.value.trim())}
            />
          </div>
        </div>
        <div className="col-lg-6 p-5">
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="PLZ"
              name="plz"
              onChange={e => setObjPlz(e.target.value.trim())}
            />
          </div>
         
          <div className="mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ort"
            name="ort"
            onChange={e => setObjOrt(e.target.value.trim())}
          />
          </div>
          <Button variant="contained" className="w-100" onClick={addDataObj}>
            Enter data
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 p-5">
          <div className="row mt-3 d-flex justify-content-around ">
            <input
              type="text"
              className="form-control"
              placeholder="Beschreibung"
              name="beschreibung"
              value={beschreibung}
              onChange={e => setBeschreibung(e.target.value.trim())}
            />
            <div className="d-flex  mt-3 mb-3">
              <div className=" me-3">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Menge"
                  name="menge"
                  value={menge}
                  onChange={e => setMenge(e.target.value)}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Einzelpreis"
                  name="einzelpreis"
                  value={einzelpreis}
                  onChange={e => setEinzelpreis(e.target.value)}
                />
              </div>
            </div>
            <div></div>
          </div>
          <div className="d-flex justify-content-around">
            <Button
              variant="contained"
              className="me-2 w-50"
              onClick={rechUnit}
            >
              Add position
            </Button>
            <DeleteMpdalRach />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 p-5">
          <Form.Select
            aria-label="Default select example"
            onChange={e => dispatch(changeClientParagraph(e.target.value))}
          >
            <option>Paragraph</option>
            <option value="19">19</option>
            <option value="17">17</option>
          </Form.Select>
        </div>
        <div className="col-lg-6 p-5">
          <Button
            variant="outlined"
            className="w-100 mt-2"
            onClick={generatePdf}
          >
            Print
          </Button>
          <Button variant="outlined" className="w-100 mt-2">
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Preis
