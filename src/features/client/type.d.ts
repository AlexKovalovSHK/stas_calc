export interface Client {
    client: ClientAddress
    cloentObj: ClientObject
    clientRechnungData: ClientRechnungData
    paragraph:string
}

export interface ClientAddress {
    name: string
    strasse:string
    hausNum: string
    plz: string
    ort: string
}

export interface ClientObject {
    name: string
    strasse:string
    hausNum: string
    plz: string
    ort: string
}

export interface ClientRechnungData {
    rechnungsnummer: string
    rechnungsdatum: string
    zhlungsbedingungen: string
    feilligkeitsdatum: string
}