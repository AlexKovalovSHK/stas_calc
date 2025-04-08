import { TableContainer } from "@mui/material"
import React, { useState } from "react"
import { useAppSelector } from "../../app/hooks"
import { selectClientAddress, selectClientRechnungData, selectObjectAddress, selectParagraph } from "../../features/client/clientSlice"
import RechnungTable from "./RechnungTable"

const RechnungPdf = () => {
  const clientData = useAppSelector(selectClientAddress)
  const objData = useAppSelector(selectObjectAddress)
  const rechData = useAppSelector(selectClientRechnungData)
  const parragraph = useAppSelector(selectParagraph)

  return (
    <div className="p-5">
      <div className="row">
        <div className="col-sm-6">
          <div>
            <p className="mb-0">Marius Ursoi</p>
            <p className="mb-0">Im Barm 13 - 30916 - Isernhagen</p>
          </div>

          <div className="mt-5">
            <h6 className="mb-3">
              <b>Rechningsadresse</b>
            </h6>
            <p className="mb-0">
              <b>{clientData.name}</b>
            </p>
            <p className="mb-0">
              <b>{clientData.strasse} {clientData.hausNum}</b>
            </p>
            <p className="mb-0">
              <b>{clientData.plz} {clientData.ort}</b>
            </p>
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <div className="d-flex justify-content-between">
            <div>
              <b>Rechnungsnummer:</b>
            </div>
            <div>{rechData.rechnungsnummer}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b>Rechnungsdatum:</b>
            </div>
            <div>{rechData.rechnungsdatum}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b>Zahlungsbedingungen:</b>
            </div>
            <div>{rechData.zhlungsbedingungen}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <b>Fälligkeitsdatum:</b>
            </div>
            <div>{rechData.feilligkeitsdatum}</div>
          </div>
        </div>
      </div>
      <div className="mt-5 ms-5">
        <p className="mb-0">{objData.name}</p>
        <p className="mb-0">{objData.strasse} {objData.hausNum}</p>
        <p className="mb-0">{objData.plz} {objData.ort}</p>
      </div>
      <div className="mt-3">
        <RechnungTable />
      </div>

      <div className="p-5">
        <p>
          Gmäß #{parragraph} Abs. 1 UStG enthält der ausgewiensene Betrag keine
          Umsatzsteuer.
        </p>
        <p>
          Bitte überweisen Sie den Gesamtpreis innerhalb von 7 Tagen auf das
          untenable angegebene Bankkonto.
        </p>
      </div>
      <div className="ps-5 pe-5 mb-0 pb-0">
        <hr />

        <div className="text-center">
          <p>
            <b>Adresse:</b>Im barm 13 - 30916 - Isernhagen <b>E-Mail:</b>
            mariusursoi18gmail.com <b>Mobil:</b>017684677759 <b>Bank:</b>
            Sparkasse Hannover <b>SWIFT/BIC</b>SPKHDE2HXXX <b>IBAN</b>
            DE43250501800910582947 <b>Kontoinhaber: </b>Marius Ursoi{" "}
            <b>Paypal: </b>mariusursoi18@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default RechnungPdf
