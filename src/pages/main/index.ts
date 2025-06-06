import IndexPage from './ui/IndexPage.vue';

export {
  IndexPage
};
// script.ts
const elements = document.querySelectorAll('.fade-in') as NodeListOf<HTMLElement>;

function handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Добавим класс для видимости
            // Остановим наблюдение после того, как элемент стал видимым
            observer.unobserve(entry.target);
        }
    });
}

// Создаем экземпляр IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1 // Срабатывание, когда 10% элемента видно
});

// Начинаем наблюдение за каждым элементом
elements.forEach(element => {
    observer.observe(element);
});