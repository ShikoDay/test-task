<script setup>
    defineProps ({
        title: String,
        imageUrl: String,
        description: String,
        prise: Number,
        isAdd: Boolean,
        clickAdd: Function
    })

    import { ref } from "vue";

    var addList = ref([])

    // Перенос элемента в выбранные
    const clickAdd = (item) => {
    const index = items.value.findIndex((i) => i.id === item.id);
    if (index !== -1) {
        selectedItems.value.push({ ...item }); // Добавляем копию элемента
        // items.value.splice(index, 1); // Удаляем элемент из исходного массива
    }
    };

    // Возврат элемента обратно
    const moveBack = (item) => {
    const index = selectedItems.value.findIndex((i) => i.id === item.id);
    if (index !== -1) {
        items.value.push({ ...item }); // Добавляем копию элемента
        // selectedItems.value.splice(index, 1); // Удаляем элемент из выбранного массива
    }
    };
</script>

<template>

    <!-- Карточка товара 1 -->
    <div class="product-card">
      <img :src="imageUrl" alt="Товар 1" class="product-image" />
      <h3 class="product-name">{{ title }}</h3>
      <!-- <h3 class="product-name">{{ description }}</h3> -->
      <p class="product-price">{{ prise }} ₽</p>
      <button class="action-button" @click="clickAdd">{{ !isAdd ? "Добавить в корзину" : "Уже в корзине" }}</button>
    </div>

    <!-- Карточка товара 2 -->
    <!-- <div class="product-card">
      <img src="" alt="Товар 2" class="product-image" />
      <h3 class="product-name">Товар 2</h3>
      <p class="product-price">2 499 ₽</p>
      <button class="action-button">Добавить в корзину</button>
    </div> -->
</template>

<style lang="scss" scoped>
.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .product-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .product-name {
      font-size: 16px;
      margin: 10px 0 5px;
      text-align: center;
    }

    .product-price {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      text-align: center;
      margin-bottom: 10px;
    }

    .action-button {
      display: block;
      width: 100%;
      padding: 10px;
      background-color: #42b983;
      border: none;
      color: white;
      font-size: 16px;
      font-weight: bold;
      border-radius: 0 0 4px 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #38a169;
      }
    }
  }

</style>