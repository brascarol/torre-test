<template>
  <div>
    <AppTopbar />

    <div class="layout-main ">
      <router-view />
    </div>

    <AppFooter />
  </div>
</template>

<script>

import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';

export default {

  components: {
    AppTopbar,
    AppFooter
  }
  
};
</script>

<style>

</style>
