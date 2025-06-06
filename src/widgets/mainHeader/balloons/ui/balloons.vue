<template>
    <div class="balloon-container">
        <div class="balloon blue"></div>
        <div class="balloon red"></div>
        <div class="balloon blue"></div>
        <div class="balloon red"></div>
        <div class="balloon blue"></div>
        <div class="balloon red"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

function moveBalloon (container: HTMLElement, balloon: HTMLElement) {
    let velocityX = (Math.random() < 0.5 ? 1 : -1) * (Math.random() + 1); // Случайная скорость по X
    let velocityY = (Math.random() < 0.5 ? 1 : -1) * (Math.random() + 1); // Случайная скорость по Y
    const position = { x: Math.random() * (container.clientWidth - 30), y: Math.random() * (container.clientHeight - 30) };

    function animate () {
        position.x += velocityX;
        position.y += velocityY;
        const containerHeight = container.clientHeight;
        const containerWidth = container.clientWidth;
        const balloonSize = 30; // Размер шарика

        // Проверка столкновения с границами контейнера
        if (position.x + balloonSize > containerWidth || position.x < 0) {
            velocityX *= -1; // Изменить направление по оси X
            position.x = Math.max(0, Math.min(containerWidth - balloonSize, position.x)); // Ensure we don't go out of bounds
        }
        if (position.y + balloonSize > containerHeight || position.y < 0) {
            velocityY *= -1; // Изменить направление по оси Y
            position.y = Math.max(0, Math.min(containerHeight - balloonSize, position.y)); // Ensure we don't go out of bounds
        }

        // Обновление позиции шарика
        balloon.style.transform = `translate(${position.x}px, ${position.y}px)`;

        requestAnimationFrame(animate); // Рекурсивный вызов для анимации
    }

    animate();
}

// Используем onMounted для вызова анимации при монтировании компонента
onMounted(() => {
    const containers = document.querySelectorAll('.balloon-container') as NodeListOf<HTMLElement>;

    containers.forEach(container => {
        const balloons = container.getElementsByClassName('balloon');

        if (balloons.length > 0) {
            for (let i = 0; i < balloons.length; i++) {
                moveBalloon(container, balloons[i] as HTMLElement);
            }
        } else {
            console.warn('No balloons found in the balloon container.');
        }
    });
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
