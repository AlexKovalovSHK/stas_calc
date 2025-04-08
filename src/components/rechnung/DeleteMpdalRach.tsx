import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deleteRechnungUnit, selectRechUnitsList } from "../../features/rechnung/rechnungSlice"
import { RechnungUnit } from "../../features/rechnung/type"

const DeleteMpdalRach = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const dispatch = useAppDispatch()
  const rechUnits = useAppSelector(selectRechUnitsList)

  const handleOpen = () => {
    setOpen(true)
  }

  const deletePosition = (position: RechnungUnit) => {
    dispatch(deleteRechnungUnit(position))
  }

  return (
    <>
      <Button onClick={handleOpen} variant="outlined" size="small">
        Delete position
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="container mt-5">
          <div className="col-lg-6 bg-light mx-auto">
            <Box className="p-3">
              <div className="d-flex justify-content-between p-2 mb-2">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Delete position
                </Typography>
              </div>
              <div className="overflow-auto" style={{ maxHeight: "700px" }}>
                <div className="w-100">
                    {rechUnits.map((p, i) => (
                      <div key={i} className="d-flex justify-content-between align-items-center border border-primary rounded p-2 mb-3">
                        <p className="mb-0">{p.beschreibung}</p>
                        
                        <Button
                          variant="outlined"
                          onClick={() => deletePosition(p)}
                          className=""
                        >
                          Delte
                        </Button>
                      </div>
                    ))}
                </div>
              </div>
            </Box>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DeleteMpdalRach
