<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import { useAlerts } from './composables/useAlert';

const { notifySuccess } = useAlerts();
</script>

<template>
  <main>
    <button @click="notifySuccess('success')">success</button>
  </main>

  <notifications group="app" width="400px">
    <template #body="props">
      <pre>{{ props }}</pre>
      <div class="g-notifications shadow bg-white">
        <div class="g-notifications__icon" :class="props.item.type">
          <font-awesome-icon
            :icon="[
              'fal',
              props.item.type === 'notification--error'
                ? 'times-circle'
                : 'check-circle',
            ]"
            size="2x"
          />
        </div>
        <div class="flex-fill d-flex flex-column justify-content-center mx-3">
          <div class="title">
            {{ props.item.title }}
          </div>
          <div class="fw-bold" v-html="props.item.text" />
        </div>

        <fs-link
          class="text-secondary d-flex p-2 align-self-start"
          @click="props.close"
        >
          <font-awesome-icon :icon="['fal', 'times']" />
        </fs-link>
      </div>
    </template>
  </notifications>
</template>

<style scoped lang="scss">
.g-notifications {
  min-height: 62px;
  margin: 10px;
  border-radius: 3px;
  display: flex !important;
  align-items: stretch;
  overflow: hidden;
  // @extend .shadow;
  &__icon {
    width: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    &.notification--error {
      background-color: red;
    }

    &.notification--success {
      background-color: blue;
    }

    &.notification--warning {
      background-color: orange;
    }
  }
}

/* Media Queries */
@media (max-width: 480px) {
  .vue-notification-group {
    width: 100% !important;
  }
}
</style>
