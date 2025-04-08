import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addPreis, selectRechUnitsList } from "../../features/rechnung/rechnungSlice"
import { useEffect, useState } from "react"


const RechnungTable = () => {
  const rechUnits = useAppSelector(selectRechUnitsList)
  const dispatch = useAppDispatch()
  const [gesamtpreis, setGesamtpreis] = useState(0)

  useEffect(() => {
    const total = rechUnits.reduce((acc, unit) => acc + unit.betrag, 0)
    setGesamtpreis(total)
    dispatch(addPreis(total))
  }, [rechUnits]) 

  

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead sx={{ backgroundColor: "#DDDDDD" }}>
            <TableRow>
              <TableCell>
                <b>Beschreibung</b>
              </TableCell>
              <TableCell align="right">
                <b>Menge</b>
              </TableCell>
              <TableCell align="right">
                <b>Einzelpreis</b>
              </TableCell>
              <TableCell align="right">
                <b>Betrag</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rechUnits.map((row, i) => (
              <TableRow
                key={`${row.beschreibung}${i}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.beschreibung}
                </TableCell>
                <TableCell align="right">{row.menge}</TableCell>
                <TableCell align="right">{row.einzelpreis}</TableCell>
                <TableCell align="right">{row.betrag}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p className="mt-2 text-end">
        <b>Gesamtpreis {gesamtpreis}</b>
      </p>
    </div>
  )
}

export default RechnungTable
