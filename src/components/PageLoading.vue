<template>
  <div class="loading Tshirt"
    ref="loading"
    :class="isLoading ? '' : 'fade'">
    <i class="fas fa-tshirt fa-2x tshirt"></i>
    <span>Loading</span>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    this.$emitter.on('page-loading', (val) => {
      const body = document.querySelector('body');
      this.isLoading = val;
      if (val) {
        this.$refs.loading.classList.remove('d-none');
        body.setAttribute('class', 'mh-100vh overflow-hidden');
      } else {
        setTimeout(() => {
          this.$refs.loading.classList.add('d-none');
          body.setAttribute('class', '');
        }, 200);
      }
    });
  },
};
</script>
