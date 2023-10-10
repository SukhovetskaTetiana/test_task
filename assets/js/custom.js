// task 5: js файл создайте свой custom.js
// task 6: В блоке с комментариями добавить возможность
// оставлять комментарий юзерам - добавить поле для текста,
// кнопку “опубликовать”

// Выбираю элементы на странице по их классам
const commentsContainer = document.querySelector(".comments.txt");
const commentParagraphs = document.querySelectorAll(".comments.txt p");
const titleContainer = commentParagraphs[0];
const communicationContainer = commentParagraphs[1];

// Настраиваю стили для контейнера с комментариями
commentsContainer.style.display = "flex";
commentsContainer.style.flexDirection = "row";
titleContainer.style.width = "25%";
communicationContainer.style.width = "75%";

// Создаю контейнер для ввода комментария
const communicationInputContainer = document.createElement("div");
communicationInputContainer.style.display = "flex";
communicationInputContainer.style.flexDirection = "row";
communicationInputContainer.style.justifyContent = "space-between";

// Создаю поле для ввода комментария (input)
const commentInput = document.createElement("input");
commentInput.type = "text";
commentInput.placeholder = "Inserisci un commento";
commentInput.style.width = "100%";
commentInput.style.margin = "0 5px";

// Создаю кнопку для публикации комментария
const publishButton = document.createElement("button");
publishButton.classList.add("btn", "btn-success", "btn-sm");
publishButton.textContent = "Publicar";
publishButton.style.backgroundColor = "#ed9220";
publishButton.style.borderColor = "#ed9220";

// Создаю контейнер для отображения комментариев
const commentsDisplay = document.createElement("div");
commentsDisplay.style.marginTop = "10px";

// Добавляю обработчик события для кнопки "Опубликовать"
publishButton.addEventListener("click", () => {
  const commentText = commentInput.value.trim();
  if (commentText !== "") {
    const comment = document.createElement("p");
    comment.textContent = commentText;
    commentsDisplay.append(comment);
    commentInput.value = ""; // Очищаю поле для ввода
  }
});

// Добавляю созданные элементы на страницу
communicationInputContainer.append(commentInput);
communicationInputContainer.append(publishButton);
communicationContainer.append(communicationInputContainer);
communicationContainer.append(commentsDisplay);
commentsContainer.append(communicationContainer);
