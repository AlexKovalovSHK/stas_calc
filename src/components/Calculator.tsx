import React, { useState } from "react"
import { market } from "../features/goods/utils"
import { Product } from "../features/goods/type"
import Button from "@mui/material/Button"

interface Service {
  name: string
  price: number
  quantity: number
}

const Calculator = () => {
  // Состояния для материалов
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [productQuantity, setProductQuantity] = useState(0)

  // Состояния для услуг
  const [serviceName, setServiceName] = useState("")
  const [servicePrice, setServicePrice] = useState(0)
  const [serviceQuantity, setServiceQuantity] = useState(1)

  // Состояния для хранения выбранных материалов и услуг
  const [materials, setMaterials] = useState<
    { product: Product; quantity: number }[]
  >([])
  const [services, setServices] = useState<Service[]>([])

  // Добавление материала
  const addMaterial = () => {
    if (selectedProduct && productQuantity > 0) {
      setMaterials([
        ...materials,
        { product: selectedProduct, quantity: productQuantity },
      ])
      setSelectedProduct(null) // Сброс выбора материала
      setProductQuantity(0) // Сброс количества
    } else {
      alert("Выберите материал и укажите количество.")
    }
  }

  // Добавление услуги
  const addService = () => {
    if (serviceName && servicePrice > 0 && serviceQuantity > 0) {
      setServices([
        ...services,
        { name: serviceName, price: servicePrice, quantity: serviceQuantity },
      ])
      setServiceName("") // Сброс названия услуги
      setServicePrice(0) // Сброс стоимости услуги
      //setServiceQuantity(0); // Сброс количества услуг
    } else {
      alert("Заполните все поля для услуги.")
    }
  }

  // Удаление материала
  const removeMaterial = (index: number) => {
    const newMaterials = materials.filter((_, i) => i !== index)
    setMaterials(newMaterials)
  }

  // Удаление услуги
  const removeService = (index: number) => {
    const newServices = services.filter((_, i) => i !== index)
    setServices(newServices)
  }

  // Расчет общей суммы
  const calculateTotal = () => {
    const materialsTotal = materials.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    )
    const servicesTotal = services.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
    return materialsTotal + servicesTotal
  }

  return (
    <div className="container mt-4">
      <h2>Калькулятор строительных материалов и услуг</h2>

      <div className="row mt-4 mb-3">
        <div className="col-sm-6">
          {/* Выбор материала */}
          <div className="mb-3">
            <label className="form-label">Выберите материал:</label>
            <select
              className="form-select w-75 mx-auto"
              value={selectedProduct?.id || ""}
              onChange={e => {
                const product = market.find(p => p.id === e.target.value)
                setSelectedProduct(product || null)
              }}
            >
              <option value="">Выберите материал</option>
              {market.map(product => (
                <option key={product.id} value={product.id}>
                  {product.name} - {product.price} руб.
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Количество материала:</label>
            <input
              type="number"
              className="form-control w-75 mx-auto"
              value={productQuantity}
              onChange={e => setProductQuantity(Number(e.target.value))}
            />
          </div>

          <button className="btn btn-primary mb-3" onClick={addMaterial}>
            Добавить материал
          </button>
        </div>

        <div className="col-sm-6">
        <div className="mb-3">
          <label className="form-label">Название услуги:</label>
          <input
            type="text"
            className="form-control w-75 mx-auto"
            value={serviceName}
            onChange={e => setServiceName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Стоимость услуги:</label>
          <input
            type="number"
            className="form-control w-75 mx-auto"
            value={servicePrice}
            onChange={e => setServicePrice(Number(e.target.value))}
          />
        </div>

        <button className="btn btn-primary mb-3" onClick={addService}>
          Добавить услугу
        </button>
      </div>
      </div>

      

      {/* Таблица с выбранными материалами и услугами */}
      <h3>Выбранные материалы и услуги</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Тип</th>
            <th>Название</th>
            <th>Цена за единицу</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((item, index) => (
            <tr key={`material-${index}`}>
              <td>Материал</td>
              <td>{item.product.name}</td>
              <td>{item.product.price} руб.</td>
              <td>{item.quantity}</td>
              <td>{item.product.price * item.quantity} руб.</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeMaterial(index)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
          {services.map((item, index) => (
            <tr key={`service-${index}`}>
              <td>Услуга</td>
              <td>{item.name}</td>
              <td>{item.price} руб.</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity} руб.</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeService(index)}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Общая сумма */}
      <h3>Общая сумма: {calculateTotal()} руб.</h3>
      <Button
        variant="contained"
        onClick={() => alert("Генерируем бро!!!")}
        className="mt-3"
      >
        Сгенерировать PDF
      </Button>
    </div>
  )
}

export default Calculator
