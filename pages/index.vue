<script setup>
import Product_card from '~/components/Product_card.vue';
import { ref, provide } from 'vue';
import { useSidebarStore } from '@/stores/sidebar';

const sidebarStore = useSidebarStore();

sidebarStore.totalItem = 0

const card = ref([])

const addItem = async(id) => {
  const index = item.value.findIndex((el) => el.id === id);
  if (index !== -1) {
    sidebarStore.totalItem++
    sidebarStore.totalPrise += item.value[index].prise
    card.value.push(item.value[index])
  }
}

const deteleItem = async(id) => {
  const index = card.value.findIndex((el) => el.id === id);
  if (index !== -1) {
    sidebarStore.totalItem--
    sidebarStore.totalPrise -= card.value[index].prise
    card.value = card.value.filter((el) => el.id !== id);
  }
}

provide('actionsItem', {addItem , deteleItem});

const item = ref([
  {
    id: 1,
    title: "2K Sport Performance",
    imageUrl: "https://2k-shop.ru/images/122710/yellow_black_black.jpg",
    prise: 3500
  },
  {
    id: 2,
    title: "Nicenonice Classic 'Miyagi face'",
    imageUrl: "https://nicenonice.ru/wa-data/public/shop/products/46/29/12946/images/15433/15433.970.jpg",
    prise: 3500
  },  
  {
    id: 3,
    title: "Армия России х/б бежевый",
    imageUrl: "https://okrug.ru/image/cache/data/futbolki/futbolka_Armia_Rossii_bezh_00-750x1163.jpg",
    prise: 5000
  },
  {
    id: 4,
    title: "Black + img",
    imageUrl: "https://merch.kaspersky.ru/assets/thumbnails/a5/a58cee5ee54e372a8f5cf3630721be12.jpg",
    prise: 4000
  },
  {
    id: 5,
    title: "Футболка унисекс BASIC",
    imageUrl: "https://modano.ru/wa-data/public/shop/products/08/15/1508/images/203949/203949.635x953@2x.jpg",
    prise: 2000
  },
  {
    id: 6,
    title: "Футболка детская Trisar 155",
    imageUrl: "https://4kraski.ru/assets/images/products/17523/118.36.1.jpg",
    prise: 2700
  },
  {
    id: 7,
    title: "Черная футболка Петербург",
    imageUrl: "https://static.insales-cdn.com/images/products/1/2624/874965568/%D1%81%D0%BF%D0%B1.jpg",
    prise: 2000
  },
  {
    id: 8,
    title: "Набор из двух футболок Cotton 2",
    imageUrl: "https://code7.ru/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/p/9/p9104.jpg",
    prise: 5000
  },
])
  
</script>

<template>
  <Navbar />

  <div class="product-grid">
    <Product_card 
      :items = item
    />
  </div>

  <Drawer :items = card />

</template>

<style lang="scss" scoped>

.navbar {
  background-color: #333;
  color: white;
  padding: 10px 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;

  .logo-link {
    text-decoration: none;
    color: white;
  }
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;

  li {
    a {
      text-decoration: none;
      color: white;
      transition: color 0.3s ease;

      &:hover {
        color: #42b983;
      }
    }
  }

  &.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 20px;
    z-index: 100;
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // Адаптивная сетка
  gap: 20px; // Отступы между карточками
  padding: 20px;
  max-width: 1200px; // Максимальная ширина контейнера
  margin: 0 auto; // Центрирование по горизонтали
}

</style>