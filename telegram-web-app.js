// Инициализация Web App API
const tg = window.Telegram.WebApp;

// Подготовка Mini App
document.addEventListener("DOMContentLoaded", () => {
    console.log("Telegram Web App инициализировано");

    // Устанавливаем цвета интерфейса
    tg.setBackgroundColor("#ffffff");
    tg.setHeaderColor("blue");

    // Отображаем основную кнопку
    tg.MainButton.setText("Закрыть приложение");
    tg.MainButton.show();

    // Обрабатываем клик по основной кнопке
    tg.MainButton.onClick(() => {
        tg.close(); // Закрытие Web App
    });

    // Пример работы с кнопкой на странице
    const actionButton = document.getElementById("main-action-button");
    actionButton.addEventListener("click", () => {
        tg.sendData(JSON.stringify({ action: "mainButtonClicked" }));
    });
});
