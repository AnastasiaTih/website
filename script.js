// Получаем текущий URL
const currentUrl = window.location.href;

// Получаем все ссылки в навигации
const links = document.querySelectorAll('nav a');

// Обрабатываем каждую ссылку
links.forEach(link => {
  // Получаем URL ссылки
  const linkUrl = link.href;

  // Проверяем, совпадает ли текущий URL с URL ссылки
  if (currentUrl === linkUrl) {
    // Добавляем класс "current" выбранной ссылке
    link.classList.add('current');
  }
});