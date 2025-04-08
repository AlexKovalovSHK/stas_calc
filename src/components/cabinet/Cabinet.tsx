import React, { useEffect, useState } from 'react'
import { RechnungDto } from '../../features/rechnung/type'
import { fechAllRechnungs, fechDeleteRechnungById, fetchAndOpenPdfById } from '../../features/rechnung/rechnungApi'

const Cabinet = () => {
  const [rechnungs, setRechnungs] = useState<RechnungDto[]>([])

  useEffect(() => {
    fechAllRechnungs().then((data) => setRechnungs(data))
  }, [])

  const getPdf = (id:string) => {
    fetchAndOpenPdfById(id)
  }

  const removePdf = (id:string) => {
    fechDeleteRechnungById(id).then((data) => {
      alert(data)
      fechAllRechnungs().then((data) => setRechnungs(data))
    })
  }

  return (
    <div className='mt-5 pt-5'>
      <h5 className=''>Rechnungs</h5>
      <ul>{rechnungs.map((r, i) => <div key={r._id} className='d-flex mb-2'>
        <li onClick={() => getPdf(r._id)} className='cursor me-5'>{r.name} {r.rechnungsdatum}</li>
        <button onClick={() =>removePdf(r._id)}>Delete</button>
      </div>)}</ul>
    </div>
  )
}

export default Cabinet