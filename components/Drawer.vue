<script setup>
    import Drawer_item from './Drawer_item.vue';

    import { useSidebarStore } from '@/stores/sidebar';

    const sidebarStore = useSidebarStore();

    const props = defineProps ({
        items: Array
    })

    sidebarStore.totalPrise = props.items.reduce((sum, item) => sum + item.prise, 0);
</script>

<template>
    <div class="sidebar-container">
    <!-- Боковая панель -->
    <aside class="sidebar" :class="{ open: sidebarStore.isSidebarOpen }">
        <header class="sidebar-header">
            <h2>Корзина</h2>
            <button @click="sidebarStore.toggleSidebar">Закрыть</button>
        </header>
    <ul class="cart-items" v-if="items.length > 0">
        <Drawer_item
            v-for="item in items"
            :key = item.id
            :id = item.id
            :title = item.title
            :imageUrl = item.imageUrl
            :prise = item.prise
        />
        <footer class="sidebar-footer">
            <p>Итого: {{ sidebarStore.totalPrise }} rub</p>
            <button class="checkout-button">Оформить заказ</button>
        </footer>
    </ul>

      <div class="empty-cart" v-else>
            <p>Корзина пуста</p>
      </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>

.sidebar-container {
  position: relative;

  .toggle-button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #38a169;
    }
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: -300px; /* Сначала скрыта */
    width: 300px;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
    transition: right 0.3s ease;
    overflow-y: auto;

    &.open {
      right: 0; /* Открыта */
    }

    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid #ddd;

      h2 {
        font-size: 20px;
        margin: 0;
      }

      .close-button {
        background-color: transparent;
        border: none;
        font-size: 16px;
        cursor: pointer;
        color: #333;
      }
    }

    .cart-items {
      list-style: none;
      padding: 0;
      margin: 0;

      .cart-item {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        border-bottom: 1px solid #eee;

        .item-info {
          flex: 1;
          margin-right: 10px;

          .item-name {
            font-size: 16px;
            margin: 0;
          }

          .item-price {
            font-size: 14px;
            color: #666;
            margin: 5px 0 0;
          }
        }

        .quantity-controls {
          display: flex;
          align-items: center;

          button {
            background-color: #f0f0f0;
            border: none;
            width: 30px;
            height: 30px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
              background-color: #ddd;
            }

            &:disabled {
              background-color: #ccc;
              cursor: not-allowed;
            }
          }

          .quantity {
            margin: 0 5px;
            font-size: 16px;
            font-weight: bold;
          }
        }

        .remove-button {
          background-color: #e53e3e;
          color: white;
          border: none;
          padding: 5px 10px;
          font-size: 14px;
          cursor: pointer;
          border-radius: 4px;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #c53030;
          }
        }
      }
    }

    .empty-cart {
      text-align: center;
      padding: 20px;
      font-size: 18px;
      color: #666;
    }

    .sidebar-footer {
      position: sticky;
      bottom: 0;
      background-color: #f9f9f9;
      padding: 15px;
      text-align: right;

      p {
        margin: 0 0 10px;
        font-size: 18px;
        font-weight: bold;
      }

      .checkout-button {
        background-color: #42b983;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #38a169;
        }
      }
    }
  }
}

</style>