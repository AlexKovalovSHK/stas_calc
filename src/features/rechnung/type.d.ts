export interface Preis {
    rechnung: RechnungUnit[]
    preis: number
    dataTime: Data
}

export interface RechnungUnit {
    beschreibung: string
    menge: number
    einzelpreis: number
    bertrag: number
}