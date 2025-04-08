import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { Client, ClientAddress, ClientObject, ClientRechnungData } from "./type"

const initialState: Client = {
  client: {} as ClientAddress,
  cloentObj: {} as ClientObject,
  clientRechnungData: {} as ClientRechnungData,
  paragraph: "19",
}

export const clientSlice = createAppSlice({
  name: "client",
  initialState,
  reducers: create => ({
    addClientAdress: create.reducer(
      (state, action: PayloadAction<ClientAddress>) => {
        state.client = action.payload
      },
    ),
    addObjectAdress: create.reducer(
      (state, action: PayloadAction<ClientObject>) => {
        state.cloentObj = action.payload
      },
    ),
    addClientRechnungData: create.reducer(
      (state, action: PayloadAction<ClientRechnungData>) => {
        state.clientRechnungData = action.payload
      },
    ),
    changeClientParagraph: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.paragraph = action.payload
      },
    ),
  }),
  selectors: {
    selectClientAddress: state => state.client,
    selectObjectAddress: state => state.cloentObj,
    selectClientRechnungData: state => state.clientRechnungData,
    selectParagraph: state => state.paragraph,
  },
})

// Action creators are generated for each case reducer function.
export const {
  addClientAdress,
  addObjectAdress,
  addClientRechnungData,
  changeClientParagraph,
} = clientSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {
  selectClientAddress,
  selectObjectAddress,
  selectClientRechnungData,
  selectParagraph,
} = clientSlice.selectors
