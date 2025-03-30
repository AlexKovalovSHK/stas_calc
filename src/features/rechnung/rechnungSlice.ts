import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { Preis, RechnungUnit } from "./type"

const initialState: Preis = {
  rechnung: [] as RechnungUnit[],
  preis: 0,
  dataTime: new Date(),
}

export const rechnungSlice = createAppSlice({
    name: "rechnung",
    initialState,
    reducers: create => ({
      addRechnung: create.reducer(
        (state, action: PayloadAction<Preis>) => {
            state = action.payload
        },
      ),
      addRechnungUnit: create.reducer(
        (state, action: PayloadAction<RechnungUnit>) => {
            state.rechnung.push(action.payload);
        },
      ),
      deleteRechnungUnit: create.reducer(
        (state, action: PayloadAction<RechnungUnit>) => {
          state.rechnung = state.rechnung.filter(
            (unit) =>
              !(
                unit.beschreibung === action.payload.beschreibung &&
                unit.menge === action.payload.menge &&
                unit.einzelpreis === action.payload.einzelpreis &&
                unit.bertrag === action.payload.bertrag
              )
          );
        }
      ),
      
    }),
    selectors: {
      selectPreis: state => state,
    },
  })

  // Action creators are generated for each case reducer function.
  export const { addRechnungUnit, addRechnung, deleteRechnungUnit } =
  rechnungSlice.actions
  
  // Selectors returned by `slice.selectors` take the root state as their first argument.
  export const { selectPreis } = rechnungSlice.selectors