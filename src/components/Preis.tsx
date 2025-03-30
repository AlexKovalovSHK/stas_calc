import { Button, TextField } from "@mui/material"
import Accordion from "react-bootstrap/Accordion"
import Form from "react-bootstrap/Form"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
    addClientAdress,
  addClientRechnungData,
  addObjectAdress,
  selectClientAddress,
  selectClientRechnungData,
  selectObjectAddress,
} from "../features/client/clientSlice"
import { useState } from "react"
import { ClientAddress, ClientObject, ClientRechnungData } from "../features/client/type"

const Preis = () => {
  const dispatch = useAppDispatch()

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
  const [menge, setMenge] = useState(0)
  const [einzelpreis, setEinzelpreis] = useState(0)
  const [betrag, setBetrag] = useState(0)

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
        feilligkeitsdatum: rechFelligData
    }
    dispatch(addClientRechnungData(newRech))
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
              type="text"
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
              type="text"
              className="form-control"
              placeholder="Fälligkeitsdatum"
              name="feilligkeitsdatum"
              onChange={e => setRechFelligData(e.target.value.trim())}
            />
          </div>
          <Button variant="contained" className="w-100" onClick={addDataRechnung}>
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
              onChange={e => setBeschreibung(e.target.value.trim())}
            />
            <div className="d-flex justify-content-between mt-3 mb-3">
              <div className=" ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Menge"
                  name="menge"
                  onChange={e => setMenge(Number(e.target.value))}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Einzelpreis"
                  name="einzelpreis"
                  onChange={e => setEinzelpreis(Number(e.target.value))}
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bertrag"
                  name="bertrag"
                  onChange={e => setBetrag(Number(e.target.value))}
                />
              </div>
            </div>
            <div></div>
          </div>
          <Button variant="contained" className="me-2">
            Add position
          </Button>

          <Button variant="contained" className="">
            Delete position
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 p-5">
          <Form.Select aria-label="Default select example">
            <option>Paragraph</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </Form.Select>
        </div>
        <div className="col-lg-6 p-5">
          <Button variant="outlined" className="w-100 mt-2">
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
