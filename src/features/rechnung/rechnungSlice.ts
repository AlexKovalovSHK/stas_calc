import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { NewRechnungDto, Preis, RechnungUnit } from "./type"
import { fechGenereteRechnung } from "./rechnungApi"

const initialState: Preis = {
  rechnung: [] as RechnungUnit[],
  preis: 0,
  dataTime: String(new Date()),
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
      addPreis: create.reducer(
        (state, action: PayloadAction<number>) => {
            state.preis = action.payload
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
                unit.betrag === action.payload.betrag
              )
          );
        }
      ),
      generateRecnung: create.asyncThunk(
        async (dto: NewRechnungDto) => {
            const response = await fechGenereteRechnung(dto)
            return response
        },
        {
            pending: state => {
                state.status = "loading"
            },
            fulfilled: (state, action) => {
                state.rechnung = action.payload.rechnung
                state.status = "success"
            },
            rejected: (state, action) => {
                state.status = "error"
            },
        },
    ),
    }),
    selectors: {
      selectPreis: state => state,
      selectRechUnitsList: state => state.rechnung
    },
  })

  // Action creators are generated for each case reducer function.
  export const { addRechnungUnit, addRechnung, deleteRechnungUnit, addPreis } =
  rechnungSlice.actions
  
  // Selectors returned by `slice.selectors` take the root state as their first argument.
  export const { selectPreis, selectRechUnitsList } = rechnungSlice.selectors