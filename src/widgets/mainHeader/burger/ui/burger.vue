<template>
    <div class="burger" @click="$emit('toggle')">
      <div class="line" :class="{ 'active': isOpen }"></div>
      <div class="middle-line" :class="{ 'active': isOpen }"></div>
      <div class="line" :class="{ 'active': isOpen }"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false, // Значение по умолчанию для открытого/закрытого состояния
      },
    },
  };
  </script>
  
  <style scoped>
  .burger {
    cursor: pointer;
    display: inline-block;
    margin: 16px 0;
    justify-content: center;
  }
  
  .line {
    width: 18px;
    height:2px;
    border-radius: 10px;
    background-color:  var(--description-dark);
    margin: 4px 0;
    transition: 0.3s;
  }

  .middle-line {
    width: 12px;
    height: 2px;
    border-radius: 10px;
    background-color:  var(--description-dark);
    margin: 4px 0px 4px 3px ;

  }

  .middle-line.active {
    visibility: hidden;
  }
  
  .line.active:nth-child(1) {
    transform: rotate(45deg) translate(2px, 3px);
  }
  
  .line.active:nth-child(2) {
    opacity: 0;
  }
  
  .line.active:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  
  .burger {
    display: block; /* Скрываем бургер при ширине экрана более 1288px */
  }

  @media (min-width: 768px) {
    .burger {
    display: block; /* Скрываем бургер при ширине экрана более 1288px */
  }
}

  @media (min-width: 1288px) {
    .burger {
    display: none; /* Скрываем бургер при ширине экрана более 1288px */
  }
}
  </style>