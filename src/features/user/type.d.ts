export interface UserState {
  user?: User
  userID?: string
  errorMessage?: string
  role?: string
  status?: "idle" | "loading" | "success" | "error"
  paginationUsers: UsersPage
}

export interface User {
  userId: string
  username: string
  firstName: string
  lastName: string
  email: string
  telefon: string
  companyName: string
  street: string
  houseNumber: string
  country: string
  ort: string
  plz: string
  image: string
  userBank: string
  swift_bic: string
  paypal: string
  iban: string
}

export interface UserEdit {
  userId: string
  firstName: string
  lastName: string
  telefon: string
  companyName: string
  street: string
  houseNumber: string
  country: string
  ort: string
  plz: string
  image: string
  image: string
  userBank: string
  swift_bic: string
  paypal: string
  iban: string
}

export interface UserLogin {
  email: string
  password: string
}

export interface ChangePwd {
  userId: string
  password2: string
}
