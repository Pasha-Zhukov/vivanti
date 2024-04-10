import Modal from "../modal/Modal";

import { useEffect, useState } from "react";
import { Touched } from "./interface";
import { submitFormData } from "../../services/formService";

import "./FormComponent.scss";

function FormComponent() {
  const initialFormData = {
    lastName: "",
    firstName: "",
    middleName: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touched, setTouched] = useState<Touched>({
    lastName: false,
    firstName: false,
    middleName: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setTouched({
      lastName: true,
      firstName: true,
      middleName: true,
    });

    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    if (!allFieldsFilled) {
      console.log("Необходимо заполнить все поля.");
    } else {
      setIsModalOpen(true);
    }

    try {
      const response = await submitFormData(formData);
      console.log("Ответ сервера:", response);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  const inputClassName = (name: string) =>
    `form-input ${
      touched[name] && !formData[name as keyof typeof formData]
        ? "tried-to-submit"
        : ""
    }`;
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    let timer = 0;
    if (isModalOpen) {
      timer = setTimeout(() => {
        setIsModalOpen(false);

        setFormData(initialFormData);
        setTouched({
          lastName: false,
          firstName: false,
          middleName: false,
        });
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isModalOpen]);

  return (
    <section id="apply" className="wrapper-form-section">
      <div className="form-block">
        <div>
          <h2>Заявка на диагностику</h2>
          <p>
            Доверьте свои медицинские исследования надежным капибарам-лаборантам
            и получите качественные результаты в кратчайшие сроки!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input
              className={inputClassName("lastName")}
              placeholder="Фамилия"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />

            <input
              className={inputClassName("firstName")}
              placeholder="Имя"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />

            <input
              className={inputClassName("middleName")}
              placeholder="Отчество"
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button type="submit">Отправить</button>
          </div>
        </form>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img src="../../../public/images/success.svg" alt="" />
        <h4 className="description">
          Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее
          время.
        </h4>
      </Modal>
    </section>
  );
}

export default FormComponent;
