<script setup lang="ts">
const elements = document.querySelectorAll('.fade-in') as NodeListOf<HTMLElement>;

function handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Добавляем класс с небольшой задержкой
            setTimeout(() => {
                entry.target.classList.add('visible'); // Добавляем класс для видимости
            }, 50); // Задержка в 50 мс
        } else {
            // Убираем класс, когда элемент выходит за пределы
            entry.target.classList.remove('visible');
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


</script>

<style lang="scss" scoped>
.fade-in {
    opacity: 0; // Исходное состояние
    transform: translateY(20px); // Начальное положение
    transition: opacity 0.5s ease, transform 0.5s ease; // Плавный переход
    position: relative; // Предотвращаем смещение при изменении opacity
}

.fade-in.visible {
    opacity: 1; // Полная видимость
    transform: translateY(0); // Вернуться на место
}

// Устанавливаем задержку отображения в 100 мс
.fade-in:not(.visible) {
    height: 0;
    overflow: hidden;
}
</style>

