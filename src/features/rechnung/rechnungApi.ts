import axios, { AxiosError } from "axios";
import { NewRechnungDto, Preis, RechnungDto } from "./type";
import { apiUrl } from "../../App";

export async function fechGenereteRechnung(dto: NewRechnungDto): Promise<Preis> {
    try {
      const res = await axios.post(
        `${apiUrl}/api/v1/rechnungs`,
        dto,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Добавляем withCredentials для поддержки cookies
        },
      )
      console.log("Response:", res.data) // Выводим ответ
      return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError
          const responseData = axiosError.response?.data as any
          if (responseData && responseData.errors) {
            const firstErrorKey = Object.keys(responseData.errors)[0]
            throw new Error(
              "Registration failed! " + responseData.errors[firstErrorKey],
            )
          } else {
            throw new Error("Registration failed! Reason unknown")
          }
        } else {
          throw error
        }
      }
  }

  export async function fechAllRechnungs(): Promise<RechnungDto[]> {
    const res = await axios.get(`${apiUrl}/api/v1/rechnungs`, {withCredentials: true,})
    return res.data
  }

  export async function fetchAndOpenPdfById(id: string): Promise<void> {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/rechnungs/${id}`, {
        responseType: "blob", // важно для корректного получения файла
        withCredentials: true, // если используются cookies
      });
  
      const fileUrl = URL.createObjectURL(response.data);
      window.open(fileUrl, "_blank");
    } catch (error) {
      console.error("Ошибка при открытии PDF:", error);
    }
  }

  export async function fechDeleteRechnungById(id: string): Promise<{ message: string }> {
    const res = await axios.delete(`${apiUrl}/api/v1/rechnungs/${id}`, {withCredentials: true,})
    return res.data
  }
  