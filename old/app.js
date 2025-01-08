// Инициализация Web App API
const tg = window.Telegram.WebApp;

// Подготовка Mini App
document.addEventListener("DOMContentLoaded", () => {
    function createTextBlock(text) {
        const block = document.createElement("div");
        block.textContent = text;
        block.style.padding = "10px";
        block.style.backgroundColor = "#f3f3f3";
        block.style.border = "1px solid #ccc";
        block.style.marginTop = "10px";
        block.style.fontFamily = "Arial, sans-serif";
        return block;
    }

    
    console.log("Telegram Web App инициализировано");
    const userId = tg.initDataUnsafe?.user?.id;

    if (userId) {
      // Create a new element dynamically
      const userIdElement = createTextBlock(`User ID: ${userId}`);
      document.body.appendChild(userIdElement);
    } else {
      console.log("Unable to retrieve User ID");
      const errorElement = createTextBlock("Unable to retrieve User ID");
      document.body.appendChild(errorElement);
    }

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
