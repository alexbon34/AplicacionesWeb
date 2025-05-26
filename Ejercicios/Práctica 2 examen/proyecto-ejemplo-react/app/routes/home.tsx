import type { Route } from "./+types/home";
import React, { useState } from "react";
import "../welcome/AppActionButtonStyles.css";
import "../welcome/OnOffButtonStyles.css";
import "../welcome/NotificacionStyles.css";
import Header from "~/shared/Header";
import TaskContainer from "~/shared/taskContainer";

import NotificationModal from "notification-modal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function queryDb() {
  return [
    { id: "task1", name: "Task 1", checked: false },
    { id: "task2", name: "Task 2", checked: true },
    { id: "task3", name: "Task 3", checked: false },
  ];
}

interface NotificationModalProps {
  openButtonImageSrc: string;
  openButtonImageAlt: string;
  modalTitle: string;
  inputPlacehold: string;
  notifyButtonText: string;
  buttonColor: string;
  buttonHoverColor: string;
  buttonTextColor: string;
  inputFocusColor: string;
  modalTextColor: string;
  onNotify?: (inputValue: string) => void;
}

const onNotify = (inputValue: string) => {
  if (inputValue.trim() === "") {
    alert("Por favor, ingresa un mensaje válido.");
    return;
  }

  // Crear una notificación emergente personalizada
  const notification = document.createElement("div");
  notification.textContent = `Texto ingresado: ${inputValue}`;
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.right = "20px";
  notification.style.backgroundColor = "#007bff";
  notification.style.color = "#ffffff";
  notification.style.padding = "10px";
  notification.style.borderRadius = "5px";
  notification.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  notification.style.zIndex = "1000";

  document.body.appendChild(notification);

  // Desaparecer la notificación después de unos segundos
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000);
};

export default function Home() {
  const [tasks, setTasks] = useState(queryDb());

  const handleTaskChange = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <>
      <Header />
      <main>
        <TaskContainer tasks={tasks} taskChange={handleTaskChange} />
      </main>
      <NotificationModal
        openButtonImageSrc="https://pngimg.com/uploads/buttons/buttons_PNG152.png"
        openButtonImageAlt="Abrir notificaciones"
        modalTitle="Suscríbete a nuestras notificaciones"
        inputPlacehold="Escribe tu correo aquí"
        notifyButtonText="Notificarme"
        buttonColor="#007bff"
        buttonHoverColor="#0056b3"
        buttonTextColor="#ffffff"
        inputFocusColor="#ffcc00"
        modalTextColor="#333333"
        onNotify={onNotify}
      />
    </>
  );
}
